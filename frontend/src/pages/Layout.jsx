import {useDisclosure} from "@mantine/hooks";
import {AppShell, Burger, Group, Anchor, Center, Stack, Image, Text, ActionIcon} from "@mantine/core";
import {Outlet} from "react-router-dom";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import logo from '../assets/logo.jpeg';
import App from "../App";


function Layout() {
    const [opened, {toggle}] = useDisclosure();

    const links = [
        {label: "Quem Somos", link: "#quemSomos"},
        {label: "Contato", link: "#contato"},
        {label: "Bazar", link: ""},
        {label: "Blog", link: "/blog"},
        {label: "Administracao", link: "/test"}
    ];

    const linkButtons =
        links.map(l => <Anchor  c={'white'} ff={'Karla'} fz={'20px'} mx={'60px'} href={l.link}>{l.label}</Anchor>);

    let headerHeight = 60;
    if (opened) headerHeight += 30 * links.length;
    
    let footerHeight = 90;

    return (
        <AppShell
            header={{ height: headerHeight }}
            padding="md"

            footer={{height: footerHeight}}
        >   
            <AppShell.Header bg={'#392F88'}>
                <Center h={'100%'} px="md">
                    <Stack hiddenFrom="sm">
                        {opened && linkButtons}
                        <Burger opened={opened} onClick={toggle} size="sm" />
                    </Stack>
                    <Group ml="xl" visibleFrom="sm">
                        {linkButtons}
                    </Group>
                </Center>
            </AppShell.Header>

            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>

            <AppShell.Footer bg={'#392F88'} ff={'Karla'} c={'white'} mt="auto">
              
                <Group justify="space-between" p="md">
                    <Stack gap="0">
                        <Text fz="h2">APRAI</Text>
                        <Text fz="h4">Associação de Proteção aos Animais de Indaiatuba</Text>
                    </Stack>
                    <ActionIcon.Group>
                        <ActionIcon variant="subtle" color="white" size="xl">
                            <IconBrandInstagram style={{width: '100%', height: '100%'}}></IconBrandInstagram>
                        </ActionIcon>
                        <ActionIcon variant="subtle" color="white" size="xl">
                            <IconBrandFacebook style={{width: '100%', height: '100%'}}></IconBrandFacebook>
                        </ActionIcon>
                    </ActionIcon.Group>
                </Group>
             
            </AppShell.Footer>
        </AppShell>
    );
}

export default Layout