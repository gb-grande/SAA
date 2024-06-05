import {ActionIcon, Group, Stack, Text} from "@mantine/core";
import {IconBrandFacebook, IconBrandInstagram} from "@tabler/icons-react";


function Footer(){
    return (
        <Group justify="space-between" bg={'aprai-purple.9'} ff={'Karla'} c={'white'} p="md">
            <Stack gap="0">
                <Text fz="h2">APRAI</Text>
                <Text fz="h4">Associação de Proteção aos Animais de Indaiatuba</Text>
            </Stack>
            <ActionIcon.Group p='sm'>
                <ActionIcon variant="subtle" color="white" size="xl" component="a" href="https://www.instagram.com/aprai.indaiatuba/" mr='sm'>
                    <IconBrandInstagram style={{width: '100%', height: '100%'}}></IconBrandInstagram>
                </ActionIcon>
                <ActionIcon variant="subtle" color="white" size="xl" component="a" href="https://www.facebook.com/people/Aprai-Indaiatuba/100090048881690/">
                    <IconBrandFacebook style={{width: '100%', height: '100%'}}></IconBrandFacebook>
                </ActionIcon>
            </ActionIcon.Group>
        </Group>
    )
}

export default Footer;