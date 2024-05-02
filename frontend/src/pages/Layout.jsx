import {useDisclosure} from "@mantine/hooks";
import {AppShell, Group, Anchor, Center, Stack, Image, Text, ActionIcon, Space, Flex} from "@mantine/core";
import {Outlet, Link} from "react-router-dom";
import { IconBrandFacebook, IconBrandInstagram, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
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

    return (
        <Stack gap={"0"} align="center">
            <Flex
                maw={"100%"}
                justify="space-between"
                align="flex-end"
            >   
                <Space w="25%"></Space>
                <Image src={logo} h={"25%"} w={"25%"}></Image>
                <Group>
                    <Link to="https://www.instagram.com/aprai.indaiatuba/">
                        <ActionIcon variant="filled" color="pink" size="xl" radius="xl" href="https://www.instagram.com/aprai.indaiatuba/">
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
                maw={"100%"}
            >   
                <AppShell.Header bg={'#392F88'} pos="relative" w={"100%"} content="fit"display="inline-block">
                    <Center mih={'5em'} px="md">
                        <Stack hiddenFrom="sm" pos="relative">
                            {opened ? 
                                <Stack justify="center" align="center" p="lg">
                                    {linkButtons} 
                                    <IconChevronUp color="white" onClick={toggle}/>
                                </Stack>
                                :   
                                <IconChevronDown color="white" onClick={toggle}/>}
                        </Stack>
                        <Group ml="xl" visibleFrom="sm">
                            {linkButtons}
                        </Group>
                    </Center>
                </AppShell.Header>


                <AppShell.Main pl="md" pr="md" pt="0" pb="0">
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