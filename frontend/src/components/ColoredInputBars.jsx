import React from 'react';
import { TextInput, Paper, Text, Space, PasswordInput } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

function getWidth() {
    const { width } = useViewportSize();
    return width;
  }

function ColoredInputBars({texto, type="text", ...others}){
    const s = getWidth() < 575 ? 'sm' : 'lg';

    const props = {
        classNames: { input: 'custom-input' ,innerInput: 'custom-input' },
        placeholder: texto,
        size: s,
        w: { base: 150, xs: 250 },
        variant: "filled",
        radius: "xl",
        styles: {
            input: { 
                backgroundColor: '#A9ABC9' 
            },
        },
        ...others
    }

    if (type == 'password') {
        return (<PasswordInput {...props}/>)
    }
    return (<TextInput {...props}/>)
}

export default ColoredInputBars;