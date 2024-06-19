import {Stack, Button, LoadingOverlay} from '@mantine/core'
import ContactInput from '../../components/ContactInput.jsx';
import {isNotEmpty, useForm} from "@mantine/form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {notifications} from "@mantine/notifications";

function RegisterAdm () {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    //TODO proper password validation
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            user: '',
            password: '',
            passwordConfirm: ''
        },
        validate: {
            user: isNotEmpty('O usuário é obrigatório.'),
            password: isNotEmpty('A senha é obrigatória.'),
            passwordConfirm: (value, values) =>
                value !== values.password ? 'As senhas devem ser iguais.' : null,
        }
    });

    function onSubmit(values){
        setLoading(true);
        values = {
            user: values.user.trim(),
            password: values.password
        }
        axios.post('api/admins', values).then(_ => {
            console.log("Registered new admin: ", values);
            notifications.show({message: 'Administrador registrado com sucesso.'})
            navigate('..');
        }).catch(err => {
            if (err.response?.status === 409){
                form.setFieldError('user', 'Administrador já existe.');
            } else if (err.response.data.validationErrors){
                form.setErrors(err.response.data.validationErrors);
            } else {
                console.error("Unhandled error when registering administrator.", err);
                notifications.show({message: 'Erro ao registrar administrador.', color: 'red'})
            }
        }).finally(() => setLoading(false));
    }

    return(
        <Stack align='center' h='100%' justify='center' gap='md'
               component={'form'} onSubmit={form.onSubmit(onSubmit)}
        >
            <LoadingOverlay visible={loading}/>

            <ContactInput
                label='Usuário'
                placeholder=''
                {...form.getInputProps('user')}
            />

            <ContactInput
                label='Senha'
                placeholder=''
                type='password'
                {...form.getInputProps('password')}
            />

            <ContactInput
                label='Confirmar Senha'
                placeholder=''
                type='password'
                {...form.getInputProps('passwordConfirm')}
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

export default RegisterAdm;