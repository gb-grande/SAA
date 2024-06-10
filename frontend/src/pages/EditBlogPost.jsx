import {TextInput, Group, Button, FileButton, Text, Center, Image, Stack} from "@mantine/core"
import { useParams, useNavigate } from 'react-router-dom';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { useState, useEffect } from "react";
import { modals } from "@mantine/modals";
import axios from "axios";
import { isNotEmpty, useForm } from "@mantine/form";
import {notifications} from "@mantine/notifications";
import classes from "./EditBlogPost.module.css"

function EditBlogPost() {
    let navigate = useNavigate();
    const { id } = useParams();
    const [file, setFile] = useState(null);
    const form = useForm({
        mode: "controlled",
        initialValues: {
            title: '',
            content: '',
            imageUrl: ''
        },
        validate: {
            title: isNotEmpty('O título não pode estar vazio.'),
            content: isNotEmpty('O conteúdo não pode estar vazio.')
        }
    });
    //To make sure we can keep track of wheter we have changed to no image, or never had an image to begin with.
    const [imageDeleted, setImageDeleted] = useState(false);

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
        content: form.values.content,
        onUpdate: ({ editor }) => form.setFieldValue('content', editor.getHTML())
    });

    useEffect(() => {
        if (!id || !editor) return;

        axios.get(`api/posts/${id}`)
            .then(res => {
                form.initialize({
                    title: res.data.title,
                    content: res.data.content,
                    imageUrl: res.data.imageUrl
                });
                editor.commands.setContent(res.data.content);
            })
            .catch(err => {
                console.error("Error fetching post to edit", err);
                navigate('/blog');
            });
    }, [id, editor]);

    function onSubmit(values){

        //If a file is sent, the imageUrl will be overwritten.
        //If no file and no imageUrl is sent, the image will be deleted.
        values.image = file;
        if (imageDeleted) values.imageUrl = '';

        if (id === undefined) {
            values.posterUsername = 'TEMP'; // TODO insert username
            axios.postForm('api/posts/', values)
                .then(res => navigate(`/blog/${res.data.id}`))
                .catch(err => {
                    if (err.response.data.validationErrors){
                        console.log(err.response.data.validationErrors);
                        form.setErrors(err.response.data.validationErrors);
                    }
                    else {
                        console.error("Unhandled error when creating blog.", err);
                        notifications.show({message: "Erro ao salvar post.", color: 'red'});
                    }
                });
        }
        else {
            axios.putForm(`api/posts/${id}`, values)
                .then(res => navigate(`/blog/${res.data.id}`))
                .catch(err => {
                    console.error("Unhandled error when updating blog.", err);
                    notifications.show({message: "Erro ao salvar post.", color: 'red'});
                });
        }
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

    let imageUrl = imageDeleted ? null : form.values.imageUrl;
    if (file) imageUrl = URL.createObjectURL(file);

    let imageRevertButtonLabel;
    if (imageDeleted || file) imageRevertButtonLabel = 'Reverter Imagem';
    else if (form.values.imageUrl) imageRevertButtonLabel = 'Remover Imagem';

    let imageRevertButtonFunction;
    if (imageDeleted) imageRevertButtonFunction = () => setImageDeleted(false);
    else if (file) imageRevertButtonFunction = () => setFile(null);
    else if (form.values.imageUrl) imageRevertButtonFunction = () => setImageDeleted(true);

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
                    <Button type="submit" className={classes.customButton} disabled={!form.values.content}>Salvar</Button>

                    <Button bg='red' className={classes.customButton} onClick={onCancel}>Cancelar</Button>
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
                <Stack w={{lg: 350, md:300, sm: 250, base: 200}}>
                    <FileButton onChange={setFile} accept="image/png,image/jpeg">
                        {(props) => <Button className={classes.customButton} {...props}>Carregar Imagem</Button>}
                    </FileButton>

                    {imageRevertButtonLabel &&
                        <Button className={classes.customButton} onClick={imageRevertButtonFunction}>
                            {imageRevertButtonLabel}
                        </Button>
                    }

                    {imageUrl &&
                        <Image radius="xl" src={imageUrl} />
                    }
                </Stack>
            </Center>
        </form>
    )
}

export default EditBlogPost