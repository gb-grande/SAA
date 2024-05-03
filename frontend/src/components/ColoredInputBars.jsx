import React from 'react';
import { TextInput, Paper, Text, Space } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

function getWidth() {
    const { width } = useViewportSize();
    return width;
  }

function ColoredInputBars(props){
    const s = getWidth() < 575 ? 'sm' : 'lg';

    return(
         <TextInput
            placeholder={props.texto}
            classNames={{ input: 'custom-input' }}
            size = {s}
            variant="filled"
            radius="xl"
            styles={{
            input: {
                backgroundColor: '#A9ABC9',
            },
            }}
        />
    )
}

export default ColoredInputBars;