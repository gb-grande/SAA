import {useDisclosure} from "@mantine/hooks";
import {AppShell, Burger, Group, Anchor, Center, Stack, Image, Text, ActionIcon, Space, Flex} from "@mantine/core";
import {Outlet, Link} from "react-router-dom";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import logo from '../assets/logo.jpeg';


function Layout() {
    const [opened, {toggle}] = useDisclosure();

    const links = [
        {label: "Quem Somos", link: "/#quemSomos"},
        {label: "Contato", link: "/#contato"},
        {label: "Bazar", link: ""},
        {label: "Blog", link: "/blog"},
        {label: "Administracao", link: "/admin"}
    ];

    const linkButtons =
        links.map(l => <Anchor  c={'white'} ff={'Karla'} fz={'1.2em'} mx={'60px'} href={l.link}>{l.label}</Anchor>);

    let headerHeight = 60;
    if (opened) headerHeight += 10 * links.length;
    
    let footerHeight = 90;

    return (
        <Stack gap={"0"} align="center">
            <Flex
                maw={"100%"}
                justify="space-between"
                align="flex-end"
            >   
                <Space></Space>
                <Image src={logo} h={"25%"} w={"25%"}></Image>
                <Group>
                    <Link to="https://www.instagram.com/aprai.indaiatuba/">
                        <ActionIcon variant="filled" color="pink" size="xl" radius="xl" link="https://www.instagram.com/">
                            <IconBrandInstagram style={{width: '100%', height: '100%'}}></IconBrandInstagram>
                        </ActionIcon>
                    </Link>
                    <Link to="https://www.facebook.com/people/Aprai-Indaiatuba/100090048881690/">
                        <ActionIcon variant="filled" color="blue" size="xl" radius="xl">
                                <IconBrandFacebook style={{width: '100%', height: '100%'}}></IconBrandFacebook>
                        </ActionIcon>
                    </Link>
                    
                </Group>
            </Flex>
            <AppShell
                header={{ height: headerHeight }}
                padding="md"
                footer={{height: footerHeight}}
                maw={"100%"}
            >   
                <AppShell.Header bg={'#392F88'} pos="relative">
                    <Center h={'100%'} px="md">
                        <Stack hiddenFrom="sm" pos="relative">
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

                <AppShell.Footer bg={'#392F88'} ff={'Karla'} c={'white'} pos="relative" w={'100%'}p="md">
                    <Group justify="space-between" >
                        <Stack gap="0">
                            <Text fz="h2">APRAI</Text>
                            <Text fz="h4">Associação de Proteção aos Animais de Indaiatuba</Text>
                        </Stack>
                        <ActionIcon.Group>
                            <Link to="https://www.instagram.com/aprai.indaiatuba/">
                                <ActionIcon variant="subtle" color="white" size="xl">
                                    <IconBrandInstagram style={{width: '100%', height: '100%'}}></IconBrandInstagram>
                                </ActionIcon>
                            </Link>
                            <Link to="https://www.facebook.com/people/Aprai-Indaiatuba/100090048881690/">
                                <ActionIcon variant="subtle" color="white" size="xl">
                                    <IconBrandFacebook style={{width: '100%', height: '100%'}}></IconBrandFacebook>
                                </ActionIcon>
                            </Link>
                        </ActionIcon.Group>
                    </Group>
                </AppShell.Footer>
            </AppShell>
        </Stack>
    );
}

export default Layout