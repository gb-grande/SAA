import React from 'react';
import { Paper, Text, Button, Center, Stack} from '@mantine/core';
import ColoredInputBars from "../components/ColoredInputBars.jsx";
import {HashLink} from "react-router-hash-link";
import {useForm} from "@mantine/form";

function Login() {
    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            usuario: '',
            senha: '',
        }
    });

    function onSubmit(values){
        console.log(values);
        axios.post(`/admins/login`, values)
            .then(_ => {
                console.log("Foi");
            })
            .catch(err => console.error("Deu erro", err));
    }
    return (
        <Center h="100%">
            <Paper
                h={{ base: 230, xs: 375 }}
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
                        {...form.getInputProps('usuario')}
                    />
                    <ColoredInputBars 
                        texto = "Senha"
                        {...form.getInputProps('senha')}    
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
                    >
                        Entrar
                    </Button>
                </Stack>
            </Paper>
        </Center>
  );
}

export default Login;