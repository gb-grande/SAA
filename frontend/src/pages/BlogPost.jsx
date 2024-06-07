import {Title, Text, Image, Center, Group, Button, LoadingOverlay} from "@mantine/core"
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import ProtectedComponent from "../components/ProtectedComponent.jsx";
import { modals } from "@mantine/modals";
import axios from "axios";
import useFetch from "../hooks/useFetch.jsx";
import {notifications} from "@mantine/notifications";


function BlogPost() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {result: post, error, loading, setLoading} = useFetch(`api/posts/${id}`, {
        defaultValue: {
            title: "",
            content: "",
            date: new Date(),
            imageUrl: "",
        },
        postProcessFunc: data => ({
            ...data,
            date: new Date(data.date)
        })
    });

    if (error){
        console.error("Error when fetching blog post.", error);
        return <Navigate to='/blog'/>;
    }

    if (loading){
        return <LoadingOverlay visible={true}/>;
    }

    function handleDeleteClicked(){
        modals.openConfirmModal({
            title: 'Excluir postagem',
            centered: true,
            children: (
                <Text size='sm'>
                    Tem certeza de que quer excluir a postagem? Essa ação é irreversível.
                </Text>
            ),
            labels: {confirm: 'Deletar', cancel: 'Cancelar'},
            confirmProps: {color: 'red'},
            cancelProps: {variant: 'filled'},
            onConfirm: () => {
                setLoading(true);
                axios.delete(`api/posts/${id}`)
                    .then(_ => {
                        notifications.show({message: 'Post deletado.'});
                        navigate('/blog');
                    }).catch(err => {
                        notifications.show({message: "Erro ao deletar post.", color: "red"});
                        console.error("Error when deleting post.", err.response);
                    }).finally(() => setLoading(false));
            }
        });
    }
    
    return (
        <>
            <Group>
                <Title>{post.title}</Title>
                <ProtectedComponent>
                    <Button w={100} variant='filled' component='a' href={`/admin/blog/${id}`}>Editar</Button>
                    <Button w={100} onClick={handleDeleteClicked} bg='red'>Excluir</Button>
                </ProtectedComponent>
            </Group>
            <Text c="aprai-purple.9">{post.date?.toLocaleDateString()}</Text>
            <Center>
                <Image m="md" w={{lg: 350, md:300, sm: 250, base: 200}} radius="xl" src={post.imageUrl} />
            </Center>
            <Text 
                ml={{base: "5%", sm: "10%"}} 
                mr={{base: "5%", sm: "10%"}} 
                style={{whiteSpace: "pre-line", textAlign: "justify"}}
                dangerouslySetInnerHTML={{__html: post.content}}
            />
        </>
    )
}

export default BlogPost