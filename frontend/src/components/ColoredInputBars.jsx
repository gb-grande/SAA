import React from 'react';
import { TextInput, Paper, Text, Space } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

function getWidth() {
    const { width } = useViewportSize();
    return width;
  }

function ColoredInputBars({texto, ...others}){
    const s = getWidth() < 575 ? 'sm' : 'lg';

    return(
         <TextInput
            placeholder={texto}
            classNames={{ input: 'custom-input' }}
            size = {s}
            variant="filled"
            radius="xl"
            styles={{
            input: {
                backgroundColor: '#A9ABC9',
            },
            }}
            {...others}
        />
    )
}

export default ColoredInputBars;