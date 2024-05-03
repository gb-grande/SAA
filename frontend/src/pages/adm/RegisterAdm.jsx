import { useState } from 'react';
import { Stack, Button } from '@mantine/core'
import ContactInput from '../../components/ContactInput.jsx';

// To-Do: add update request to button,
// check password and make it safe

function RegisterAdm () {

    const [inputUsr, setInputUsr] = useState('');
    const changeUsr = (newValue) => setInputUsr(newValue);

    const [inputPwd, setInputPwd] = useState('');
    const changePwd = (newValue) => setInputPwd(newValue);

    const [inputConf, setInputConf] = useState('');
    const changeConf = (newValue) => setInputConf(newValue);

    return(
        <Stack align='center' h='100%' justify='center' gap='md'>
            <ContactInput
                label='Usuário'
                placeholder=''
                onChange={changeUsr}
            />

            <ContactInput
                label='Senha'
                placeholder=''
                onChange={changePwd}
                type='password'
            />

            <ContactInput
                label='Confirmar Senha'
                placeholder=''
                onChange={changeConf}
                type='password'
            />

            <Button
            justify='center'
            variant='filled'
            h='60px'
            fz='20px'
            w='300px'
            radius='lg'
            >
                Salvar
            </Button>
        </Stack>
    );
}

export default RegisterAdm;