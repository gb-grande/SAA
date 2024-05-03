import { Button, Center } from '@mantine/core';
import { HashLink } from "react-router-hash-link";

function MenuButton ({link, text}) {

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
                >
                {text}
            </Button>
        </Center>
    );
}

export default MenuButton;