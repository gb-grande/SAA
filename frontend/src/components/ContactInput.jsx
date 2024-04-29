import { TextInput } from '@mantine/core'
import { useState } from 'react';

function ContactInput ({label, placeholder, onChange, type="text"}) {

    const [inputVal, setInputVal] = useState('');

    const change = (event) => {
        const newVal = event.target.value;

        setInputVal(newVal);

        if (onChange) {
            onChange(newVal);
        }
    }

    return(

        <TextInput
        variant='filled'
        size='lg'
        radius='lg'
        label={label}
        labelProps={{ style: { fontSize: '25px' } }}
        placeholder={placeholder}
        w={{ base:'300px', sm: '500px', md: '600px', lg: '700px', xl: '800px'}}
        value={inputVal}
        onChange={change}
        type={type}
        />

    );
}

export default ContactInput;