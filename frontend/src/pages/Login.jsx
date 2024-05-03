import React from 'react';
import { TextInput, Paper, Text, Space, Button } from '@mantine/core';
import ColoredInputBars from "../components/ColoredInputBars.jsx";



function Login() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100vh'
      }}
    >
      <Paper
        h={{ base: 230, xs: 375 }}
        w={{ base: 180, xs: 280 }}
        bg="#392F88"
        my="xl"
        p={{ base: 'xs', xs: 'md' }}
        radius="xl"
      >
        <Text ta="center"  fz={{base: "30px", xs: "40px"}}  style={{ color: 'white' }}>
          Login
        </Text>

        <Space h="lg" />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ColoredInputBars texto = "Usuário"/>

          <Space h="xs" />

          <ColoredInputBars texto = "Senha"/>

          <Space h="xl" />

          <Button 
              justify='center'
              variant='filled'
              h={{ base: 30, xs: 50 }}
              fz={{ base: 13, xs: 20 }}
              w={{ base: 80, xs: 200 }}
              radius='lg'
              color = "white"
              style={{ color: '#392F88' }}

              >
                  Entrar
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Login;