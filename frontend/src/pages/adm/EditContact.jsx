import { useState } from 'react';
import { Stack, Button } from '@mantine/core'
import ContactInput from '../../components/ContactInput.jsx';

// To-Do: add update request to button

function EditContact () {

    const [inputTel, setInputTel] = useState('');
    const changeTel = (newValue) => setInputTel(newValue);

    const [inputAdr, setInputAdr] = useState('');
    const changeAdr = (newValue) => setInputAdr(newValue);

    const [inputIg, setInputIg] = useState('');
    const changeIg = (newValue) => setInputIg(newValue);

    const [inputFb, setInputFb] = useState('');
    const changeFb = (newValue) => setInputFb(newValue);

    return(
        <Stack align='center' h='100%' justify='center' gap='md'>
            <ContactInput
                label='Telefone'
                placeholder=''
                onChange={changeTel}
            />

            <ContactInput
                label='Endereço'
                placeholder=''
                onChange={changeAdr}
            />

            <ContactInput
                label='Instagram'
                placeholder=''
                onChange={changeIg}
            />

            <ContactInput
                label='Facebook'
                placeholder=''
                onChange={changeFb}
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

export default EditContact;