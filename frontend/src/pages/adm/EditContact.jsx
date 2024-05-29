import {useEffect} from 'react';
import { Stack, Button } from '@mantine/core'
import ContactInput from '../../components/ContactInput.jsx';
import {useForm} from "@mantine/form";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function EditContact () {
    //TODO validate fields and make explicit if should input social media link or handle
    const navigate = useNavigate();
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            phone: '',
            address: '',
            instagram: '',
            facebook: ''
        }
    });

    useEffect(() => {
        axios.get('api/contactInfos').then(res => {
            form.initialize(res.data);
            console.log("Data loaded: ", res.data);
        }).catch(err => {
            console.log("Failed loading data.", err);
        });
    }, []);

    function onSubmit(values){
        axios.put('api/contactInfos', values).then(_ => {
            console.log("Saved contact info: ", values);
            navigate('..');
        }).catch(err => {
            console.log("Couldn't save contact info.", err)
        })
    }

    return(
        <Stack align='center' h='100%' justify='center' gap='md'
               component={'form'} onSubmit={form.onSubmit(onSubmit)}
        >
            <ContactInput
                label='Telefone'
                placeholder=''
                {...form.getInputProps('phone')}
            />

            <ContactInput
                label='Endereço'
                placeholder=''
                {...form.getInputProps('address')}
            />

            <ContactInput
                label='Instagram'
                placeholder=''
                {...form.getInputProps('instagram')}
            />

            <ContactInput
                label='Facebook'
                placeholder=''
                {...form.getInputProps('facebook')}
            />

            <Button
                justify='center'
                variant='filled'
                h='60px'
                fz='20px'
                w='300px'
                radius='lg'
                type='submit'
            >
                Salvar
            </Button>
        </Stack>
    );
}

export default EditContact;