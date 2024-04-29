import { useState } from 'react';
import { Space, Button } from '@mantine/core'
import ContactInput from '../components/ContactInput';

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
        <>  
            <div
                style = {{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}    
            >
                <Space h='md'/>

                <ContactInput 
                    label='Usuário'
                    placeholder=''
                    onChange={changeUsr}
                />

                <Space h='md'/>

                <ContactInput 
                    label='Senha'
                    placeholder=''
                    onChange={changePwd}
                    type='password'
                />

                <Space h='md'/>

                <ContactInput 
                    label='Confirmar Senha'
                    placeholder=''
                    onChange={changeConf}
                    type='password'
                />

                <Space h='xl'/>

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

            </div>
        </>
    );
}

export default RegisterAdm;