import {ActionIcon, Group, Stack, Text} from "@mantine/core";
import SocialMediaIcon from "../SocialMediaIcon.jsx";


function Footer(){
    return (
        <Group justify="space-between" bg={'aprai-purple.9'} ff={'Karla'} c={'white'} p="md">
            <Stack gap="0">
                <Text fz="h2">APRAI</Text>
                <Text fz="h4">Associação de Proteção aos Animais de Indaiatuba</Text>
            </Stack>
            <ActionIcon.Group p='sm'>
                <SocialMediaIcon media={'instagram'} variant='subtle' size="xl" component="a" mr='sm'/>
                <SocialMediaIcon media={'facebook'} variant='subtle' size="xl" component="a"/>
            </ActionIcon.Group>
        </Group>
    )
}

export default Footer;