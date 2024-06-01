import {TextInput, Group, Button, FileButton, Text, Center} from "@mantine/core"
import { useParams, useNavigate } from 'react-router-dom';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import {useState} from "react";
import { modals } from "@mantine/modals";
import axios from "axios";
import {isNotEmpty, useForm} from "@mantine/form";

function EditBlogPost() {
    let navigate = useNavigate();
    const {id} = useParams();

    //TODO store image before setting form value
    const [file, setFile] = useState(null);

    const form = useForm({
        mode: "controlled",
        initialValues: {
            title: '',
            content: '',
            image: null
        },
        validate: {
            title: isNotEmpty('O título não pode estar vazio.'),
            content: isNotEmpty('O conteúdo não pode estar vazio.')
        }
    })

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        onUpdate: ({ editor }) => form.setFieldValue('content', editor.getHTML())
    });

    //TODO initialize form or message/redirect if no post with the id
    // useEffect(() => {
    //     axios.get(`api/posts/${id}`).then(res => form.initialize({
    //         title: res.data.title,
    //         content: res.data.content,
    //         image: res.data.image
    //     }))
    // }, [id]);

    function onSubmit(values){
        if (id === undefined) {
            axios.post('api/posts/', {
                posterUsername: 'TEMP', //TODO send stored current user
                title: values.title,
                imageId: null, //TODO first upload image and then set id
                content: values.content
            })
                .then(res => navigate(`/blog/${res.data.id}`))
                .catch(err => console.log('Error saving blog post.', err));
        }
        else alert("Editing existing post not yet implemented :(");
    }

    function onCancel() {
        modals.openConfirmModal({
            title: 'Cancelar escrita',
            centered: true,
            children: (
                <Text>
                    Tem certeza que quer cancelar a escrita da postagem? Essa ação é irreversível.
                </Text>
            ),
            labels: {confirm: 'Cancelar', cancel: 'Continuar escrevendo'},
            confirmProps: {color: 'red'},
            cancelProps: {variant: 'filled'},
            onConfirm: () => navigate("/blog")
        })
    }

    return (
        <form onSubmit={form.onSubmit(onSubmit)}>
            <Group m="md" justify="space-between">
                <TextInput 
                    placeholder="Título"
                    w={{base: "100%", sm: 460}}
                    maxLength={128}
                    {...form.getInputProps('title')}
                />
                <div>
                    <Button type="submit" mr="md" bg='aprai-purple.5' radius="lg" fz="xl" disabled={!form.values.content}>Salvar</Button>
                    
                    <Button bg='red' radius="lg" fz="xl" onClick={onCancel}>Cancelar</Button>
                </div>
            </Group>

            <RichTextEditor editor={editor} m="md" mih={600}>
                <RichTextEditor.Toolbar sticky stickyOffset={60}>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Bold />
                        <RichTextEditor.Italic />
                        <RichTextEditor.Underline />
                        <RichTextEditor.Strikethrough />
                        <RichTextEditor.ClearFormatting />
                        <RichTextEditor.Highlight />
                        <RichTextEditor.Code />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.H1 />
                        <RichTextEditor.H2 />
                        <RichTextEditor.H3 />
                        <RichTextEditor.H4 />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Blockquote />
                        <RichTextEditor.Hr />
                        <RichTextEditor.BulletList />
                        <RichTextEditor.OrderedList />
                        <RichTextEditor.Subscript />
                        <RichTextEditor.Superscript />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Link />
                        <RichTextEditor.Unlink />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.AlignLeft />
                        <RichTextEditor.AlignCenter />
                        <RichTextEditor.AlignJustify />
                        <RichTextEditor.AlignRight />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Undo />
                        <RichTextEditor.Redo />
                    </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>
                <RichTextEditor.Content />
            </RichTextEditor>

            <Center>
                <FileButton onChange={setFile} accept="image/png,image/jpeg">
                    {(props) => <Button bg='aprai-purple.5' radius="lg" fz="xl" {...props}>Carregar Imagem</Button>}
                </FileButton>
            </Center>
            {form.values.image && (
                <Text size="sm" ta="center" mt="sm">
                Arquivo selecionado: {form.values.image.name}
                </Text>
            )}
        </form>
    )
}

export default EditBlogPost