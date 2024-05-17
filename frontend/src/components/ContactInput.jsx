import { TextInput } from '@mantine/core'

function ContactInput({label, placeholder, type="text", ...others}) {
    return(
        <TextInput
            variant='filled'
            size='lg'
            radius='lg'
            label={label}
            labelProps={{ style: { fontSize: '25px' } }}
            placeholder={placeholder}
            w={{ base:'300px', sm: '500px', md: '600px', lg: '700px', xl: '800px'}}
            type={type}
            {...others}
        />

    );
}

export default ContactInput;