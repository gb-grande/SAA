import { TextInput } from '@mantine/core'

function ContactInput ({label, placeholder}) {

    return(

        <TextInput
        variant='filled'
        size='lg'
        radius='md'
        label={label}
        labelProps={{ style: { fontSize: '25px' } }}
        placeholder={placeholder}
        w={{ base:'300px', sm: '500px', md: '600px', lg: '700px', xl: '800px'}}
        />

    );
}

export default ContactInput;