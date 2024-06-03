import {useEffect} from 'react';
import { Stack, Button } from '@mantine/core'
import ContactInput from '../../components/ContactInput.jsx';
import {isNotEmpty, useForm} from "@mantine/form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {IconAt} from "@tabler/icons-react";
import {IMaskInput} from "react-imask";

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
        },
        validate: {
            phone: isNotEmpty('Obrigatório'),
            address: isNotEmpty('Obrigatório'),
            instagram: isNotEmpty('Obrigatório'),
            facebook: isNotEmpty('Obrigatório')
        }
    });

    useEffect(() => {
        axios.get('api/contactInfos').then(res => {
            const data = res.data;
            //Remove the +55 from the phone number
            data.phone = data.phone.slice(3);
            form.initialize(data);
            console.log("Data loaded: ", res.data);
        }).catch(err => {
            console.log("Failed loading data.", err);
        });
    }, []);

    function onSubmit(values){
        //Add the +55 to the phone number
        values.phone = '+55' + values.phone
        axios.post('api/contactInfos', values).then(_ => {
            console.log("Saved contact info: ", values);
            navigate('..');
        }).catch(err => {
            if (err.response.data.validationErrors){
                form.setErrors(err.response.data.validationErrors);
            }
            else console.log("Couldn't save contact info.", err)
        })
    }

    return(
        <Stack align='center' h='100%' justify='center' gap='md'
               component={'form'} onSubmit={form.onSubmit(onSubmit)}
        >
            <ContactInput
                label='Telefone'
                placeholder=''
                component={IMaskInput} mask='(00) 0000-0000'
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
                leftSection={(<IconAt/>)}
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