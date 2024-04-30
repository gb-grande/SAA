import { Button, Center, Anchor} from '@mantine/core';

function MenuButton ({link, text}) {

    return(
        <Center>
            <Anchor href={link}>
            <Button 
                justify='center'
                variant='filled'
                h='60px'
                fz='20px'
                w={{ base:'300px', sm: '500px', md: '600px', lg: '700px', xl: '700px'}}
                radius='md'
                >
                {text}
            </Button>
            </Anchor>
        </Center>
    );
}

export default MenuButton;