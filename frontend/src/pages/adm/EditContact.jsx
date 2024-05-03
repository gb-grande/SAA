import { useState } from 'react';
import { Space, Button } from '@mantine/core'
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
                    label='Telefone'
                    placeholder=''
                    onChange={changeTel}
                />

                <Space h='md'/>

                <ContactInput 
                    label='Endereço'
                    placeholder=''
                    onChange={changeAdr}
                />

                <Space h='md'/>

                <ContactInput 
                    label='Instagram'
                    placeholder=''
                    onChange={changeIg}
                />

                <Space h='md'/>

                <ContactInput 
                    label='Facebook'
                    placeholder=''
                    onChange={changeFb}
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

export default EditContact;