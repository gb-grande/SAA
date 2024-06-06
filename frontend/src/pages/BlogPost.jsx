import {Title, Text, Image, Center, Group, Button} from "@mantine/core"
import {useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import ProtectedComponent from "../components/ProtectedComponent.jsx";
import { modals } from "@mantine/modals";
import axios from "axios";


function BlogPost() {
    const {id} = useParams();
    
    const today = new Date();
    const[post, setPost] = useState({})
    // const post = {
    //     title: "APRAI",
    //     time: today,
    //     image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitxnXh3BCHXlUOIPJdO1y51fEPdGCGf9bImEnIUVo_uPy5ECws2w1iAI2wrDs8Sc0oVbtdnYZvFG5UzykV-qvcWamD-Wyj6MOvh6UCTXHPH-5Xf-B5tH-8BqYSvw4roWyud7AgdE_3eXc/s800/pet_omocha_inu.png",
    //     text: `
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel tincidunt purus, vel vulputate augue. Integer ut ex metus. Nulla imperdiet lobortis felis, sed pellentesque magna rutrum aliquet. Maecenas nec tincidunt leo, eu faucibus lectus. Maecenas hendrerit purus et diam rhoncus scelerisque. Cras tempor odio ac mi sodales, non laoreet nibh egestas. Quisque non luctus lacus. 
    //     Quisque pulvinar faucibus elementum. Ut cursus augue vitae consectetur tincidunt. Pellentesque dignissim, diam in ullamcorper rhoncus, ex tellus pharetra lorem, sed accumsan nisl dui consequat ipsum. Donec mollis vitae tortor faucibus consectetur. Aenean dolor urna, dapibus ut risus ut, aliquet tempor nunc. Suspendisse tempor dignissim nunc id mattis. Nullam at magna lorem.
        
    // `
    // };

    useEffect(() => {
        axios.get(`api/posts/` + id)
            .then(res => {
                setPost(res.data)
            })
            .catch(error => console.log(error))
    }, [])

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
            onConfirm: () => console.log('Deletar post ' + id)
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
            <Text c="aprai-purple.9">Postado em</Text>
            <Center>
                <Image m="md" w={{lg: 350, md:300, sm: 250, base: 200}} radius="xl" src={post.imageId} />
            </Center>
            <Text 
                ml={{base: "5%", sm: "10%"}} 
                mr={{base: "5%", sm: "10%"}} 
                style={{whiteSpace: "pre-line", textAlign: "justify"}}>
                    {post.content}
            </Text>
        </>
    )
}

export default BlogPost