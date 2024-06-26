import { TextInput, PasswordInput } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

function getWidth() {
    const { width } = useViewportSize();
    return width;
}

/**
 * A Colored Input Bar component, for text or password input.
 * 
 * @param {string} placeholder The input placeholder.
 * @param {string} type The input type. Use: 'text' or 'password'.
 * @returns {JSX.Element} The ColoredInputBars component.
 */
function ColoredInputBars({placeholder, type="text", ...others}){
    const s = getWidth() < 575 ? 'sm' : 'lg';

    const props = {
        classNames: { input: 'custom-input' ,innerInput: 'custom-input' },
        placeholder: placeholder,
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

    if (type === 'password') {
        return (<PasswordInput {...props}/>)
    }
    return (<TextInput {...props}/>)
}

export default ColoredInputBars;