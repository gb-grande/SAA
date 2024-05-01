import React from 'react';
import { TextInput, Paper, Text, Space } from '@mantine/core';
import ColoredInputBars from "../components/ColoredInputBars.jsx";



function Login() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Paper
          h={{ base: 150, sm: 287.5 }}
          w="30%"
          bg="#392F88"
          my="xl"
          p={{ base: 'xs', sm: 'md' }}
          radius="xl"
        >
          <Text ta="center"  fz={{base: "20px", md: "3vw"}}  style={{ color: 'white' }}>
            Login
          </Text>

          <Space h="xs" />

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
          </div>
        </Paper>
      </div>
    </>
  );
}

export default Login;