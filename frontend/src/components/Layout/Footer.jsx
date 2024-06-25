import {ActionIcon, Group, Stack, Text, Image} from "@mantine/core";
import SocialMediaIcon from "../SocialMediaIcon.jsx";
import logo_icmc from "../../assets/logo_icmc.png";
/**
 * Footer component renders the footer layout section.
 * 
 * @returns The Footer component.
 */
function Footer(){
    return (
        <Group justify="space-between" bg={'aprai-purple.9'} ff={'Karla'} c={'white'} p="md">
            <Group>
            <Image p='sm' w={200} src={logo_icmc} />
            <Stack gap="0">
                <Text fz="h2">APRAI</Text>
                <Text fz="h4">Associação de Proteção aos Animais de Indaiatuba</Text>
                <Text fz="h5">Site desenvolvido pelos alunos de Ciências de Computação: Albert Shoji, Enzo Harada, Gustavo Grande, Lélio Cunha, Lucas O. Castro, Miguel Henriques</Text>
            </Stack>
            </Group>
            <ActionIcon.Group p='sm'>
                <SocialMediaIcon media={'instagram'} variant='subtle' size="xl" component="a" mr='sm'/>
                <SocialMediaIcon media={'facebook'} variant='subtle' size="xl" component="a"/>
            </ActionIcon.Group>
        </Group>
    )
}

export default Footer;