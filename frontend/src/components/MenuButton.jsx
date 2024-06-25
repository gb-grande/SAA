import { Button, Center } from '@mantine/core';
import { HashLink } from "react-router-hash-link";

/**
 * A Menu Button component that renders a button linking to a specified URL.
 * 
 * @param {string} link - The URL to which the button will navigate.
 * @param {string} text - The text to be displayed on the button.
 * @returns {JSX.Element} The MenuButton component.
 */
function MenuButton ({link, text, ...others}) {

    return(
        <Center>
            <Button
                justify='center'
                variant='filled'
                h='60px'
                fz='20px'
                w={{ base:'300px', sm: '500px', md: '600px', lg: '700px', xl: '700px'}}
                radius='md'
                component={HashLink}
                to={link}
                {...others}
                >
                {text}
            </Button>
        </Center>
    );
}

export default MenuButton;