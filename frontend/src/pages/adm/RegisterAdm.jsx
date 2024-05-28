import { Stack, Button } from '@mantine/core'
import ContactInput from '../../components/ContactInput.jsx';
import {useForm} from "@mantine/form";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function RegisterAdm () {
    const navigate = useNavigate();
    //TODO proper validation
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            user: '',
            password: '',
            passwordConfirm: ''
        },
        validate: {
            passwordConfirm: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null

        }
    });

    function onSubmit(values){
        values = {
            user: values.user,
            password: values.password
        }
        axios.post('api/admins', values).then(_ => {
            console.log("Registered new admin: ", values);
            navigate('..');
        }).catch(err => {
            console.log("Couldn't register new admin.", err)
        })
    }

    return(
        <Stack align='center' h='100%' justify='center' gap='md'
               component={'form'} onSubmit={form.onSubmit(onSubmit)}
        >
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