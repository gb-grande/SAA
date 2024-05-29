import React, { useState } from 'react';
import { Paper, Text, Button, Center, Stack, Switch} from '@mantine/core';
import ColoredInputBars from "../components/ColoredInputBars.jsx";
import {isNotEmpty, useForm} from "@mantine/form";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Com useDisclousure não estava funcionando.
    const navigate = useNavigate();
    const form = useForm({
        mode: "uncontrolled",
        
        validate: {
            user: isNotEmpty('Informe o usuário'),
            password: isNotEmpty('Informe a senha')
        }
    });

    function onSubmit(values){
        setLoading(true);
        setError('');
        console.log(values);
        axios.post(`/admins/login`, values)
            .then(_ => {
                document.cookie = "logged=true;SameSitelax;max-age=7200;"
                navigate('/admin');
            })
            .catch(err => {
                setLoading(false);
                console.error("Erro:", err.response.data.message);
                setError(err.response.data.message);
            });
    }
    return (
        <Center h="100%">
            <Stack>
            { error &&
            <Paper pos='relative' w={{ base: 180, xs: 280 }} radius='md' align='center' p='sm' bg="red" fw={700}>
                <Text>
                    {error}
                </Text>
            </Paper>}
            <Paper
                mih={{ base: 230, xs: 375 }}
                w={{ base: 180, xs: 280 }}
                bg="aprai-purple.9"
                p={{ base: 'xs', xs: 'md' }}
                radius="xl"
            >
                <Text ta="center"  fz={{base: "30px", xs: "40px"}} c='white' mb='lg'>
                    Login
                </Text>

                <Stack align='center' justify='center' gap={'xs'} component={'form'} onSubmit={form.onSubmit(onSubmit)}>
                    
                    <ColoredInputBars 
                        texto = "Usuário"
                        {...form.getInputProps('user')}
                    />
                    <ColoredInputBars 
                        texto = "Senha"
                        {...form.getInputProps('password')}    
                    />

                    <Button 
                        mt={{base: 'xs', xs: 'xl'}}
                        justify='center'
                        variant='white'
                        h={{ base: 30, xs: 50 }}
                        w={{ base: 80, xs: 200 }}
                        fz={{ base: 13, xs: 20 }}
                        radius='lg'
                        type='submit'
                        loading={loading}
                    >
                        Entrar
                    </Button>
                </Stack>
            </Paper>
            </Stack>
        </Center>
  );
}

export default Login;