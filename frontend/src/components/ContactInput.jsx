import {PasswordInput, TextInput} from '@mantine/core'

/**
 * A Contact Input component, for contact info inputs.
 * 
 * @param {string} label The input label.
 * @param {string} placeholder The input placeholder.
 * @param {string} type The input type. Use 'text' or 'password'.
 * @returns {JSX.Element} The ContactInput component.
 */
function ContactInput({label, placeholder, type="text", ...others}) {

    const props = {
        variant: 'filled',
        size: 'lg',
        radius: 'lg',
        label: label,
        labelProps: { style: { fontSize: '25px' } },
        placeholder: placeholder,
        w: { base:'300px', sm: '500px', md: '600px', lg: '700px', xl: '800px'},
        ...others
    }


    if (type === 'password')
        return (<PasswordInput {...props}/>);
    return (<TextInput {...props}/>);
}

export default ContactInput;