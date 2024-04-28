import { Space, Button } from '@mantine/core'
import ContactInput from '../components/ContactInput';

function EditContact () {

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
                <Space h='sm'/>

                <ContactInput 
                    label='Telefone'
                    placeholder=''
                />

                <Space h='md'/>

                <ContactInput 
                    label='Endereço'
                    placeholder=''
                />

                <Space h='md'/>

                <ContactInput 
                    label='Instagram'
                    placeholder=''
                />

                <Space h='md'/>

                <ContactInput 
                    label='Facebook'
                    placeholder=''
                />

                <Space h='xl'/>

                <Button 
                justify='center'
                variant='filled'
                h='60px'
                fz='20px'
                w='300px'
                >
                    Salvar
                </Button>

            </div>
        </>
    );
}

export default EditContact;