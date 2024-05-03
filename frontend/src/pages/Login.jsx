import React from 'react';
import { Paper, Text, Button, Center, Stack} from '@mantine/core';
import ColoredInputBars from "../components/ColoredInputBars.jsx";
import {HashLink} from "react-router-hash-link";

function Login() {
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

        <Stack align='center' justify='center' gap={'xs'}>
          <ColoredInputBars texto = "Usuário"/>
          <ColoredInputBars texto = "Senha"/>

          <Button mt={{base: 'xs', xs: 'xl'}}
                  justify='center'
                  variant='white'
                  h={{ base: 30, xs: 50 }}
                  w={{ base: 80, xs: 200 }}
                  fz={{ base: 13, xs: 20 }}
                  radius='lg'
                  component={HashLink}
                  to='/admin'
          >
                  Entrar
          </Button>
        </Stack>
      </Paper>
    </Center>
  );
}

export default Login;