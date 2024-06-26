import { useState } from 'react';
import { Paper, Text, Button, Center, Stack} from '@mantine/core';
import ColoredInputBars from "../components/customInputs/ColoredInputBars.jsx";
import {isNotEmpty, useForm} from "@mantine/form";
import {useNavigate} from "react-router-dom";
import { useAuth } from '../providers/AuthProvider.jsx';
import { Navigate } from 'react-router-dom';

/**
 * The Login page renders the user login interface, allowing admins to authenticate
 * themselves into the application.
 * 
 * @returns {JSX.Element} The Login page.
 */
function Login() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {token, tryLogin} = useAuth();
    const form = useForm({
        mode: "uncontrolled",
        
        validate: {
            user: isNotEmpty('Informe o usuário'),
            password: isNotEmpty('Informe a senha')
        }
    });

    if (token) {
        return <Navigate to='/admin' replace />
    }

    function onSubmit(values){
        values ={
            user: values.user.trim(),
            password: values.password
        }
        setLoading(true);
        setError('');
        tryLogin(values)
            .then(_ => {
                navigate('/admin')
            })
            .catch(err => {
                setLoading(false);
                if (err.response?.status !== 401){
                    console.error("Login error:", err.response.data.message);
                }
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
                        placeholder = "Usuário"
                        {...form.getInputProps('user')}
                    />
                    <ColoredInputBars 
                        placeholder = "Senha"
                        type='password'
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