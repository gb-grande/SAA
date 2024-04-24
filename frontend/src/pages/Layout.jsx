import {useDisclosure} from "@mantine/hooks";
import {AppShell, Burger, Group, Anchor, Center, Stack, Image} from "@mantine/core";
import {Outlet} from "react-router-dom";
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

    return (
        <AppShell
            header={{ height: headerHeight }}
            padding="md"
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

            <AppShell.Footer>
                
            </AppShell.Footer>
        </AppShell>
    );
}

export default Layout