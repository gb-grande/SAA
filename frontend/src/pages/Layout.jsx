import {useDisclosure} from "@mantine/hooks";
import {AppShell, Group, Anchor, Center, Stack, Image, Text, ActionIcon, Box, Paper, Flex} from "@mantine/core";
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
        links.map((l, index) =>
            <Anchor key={index}
                c={'white'} ff={'Karla'}
                fz={'1.2em'} mx={'60px'}
                component={Link} to={l.link}
            >
                {l.label}
            </Anchor>
        );

    return (
        <Flex h="100vh" direction="column">
            <Center w={"100vw"} pos="relative">
                <Image w={{base: "100vw", sm: "45vw", md: "30vw", lg: "25vw"}} h={"auto"} src={logo}/>
                <Group style={{position: "absolute", right: 0, bottom: 0}}>
                    <ActionIcon variant="filled" color="pink" size="xl" radius="xl" component="a" href="https://www.instagram.com/aprai.indaiatuba/">
                        <IconBrandInstagram style={{width: '100%', height: '100%'}}></IconBrandInstagram>
                    </ActionIcon>

                    <ActionIcon variant="filled" color="blue" size="xl" radius="xl" component="a" href="https://www.facebook.com/people/Aprai-Indaiatuba/100090048881690/">
                        <IconBrandFacebook style={{width: '100%', height: '100%'}}></IconBrandFacebook>
                    </ActionIcon>
                </Group>
            </Center>
            <Center mih={'5em'} bg={'aprai-purple.9'} px="md">
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

            <div style={{flex: 1}}>
                <Outlet/>
            </div>

            <Group h={120} justify="space-between" bg={'aprai-purple.9'} ff={'Karla'} c={'white'} w={'100vw'} p="md">
                <Stack gap="0">
                    <Text fz="h2">APRAI</Text>
                    <Text fz="h4">Associação de Proteção aos Animais de Indaiatuba</Text>
                </Stack>
                <ActionIcon.Group>
                    <ActionIcon variant="subtle" color="white" size="xl" component="a" href="https://www.instagram.com/aprai.indaiatuba/">
                        <IconBrandInstagram style={{width: '100%', height: '100%'}}></IconBrandInstagram>
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="white" size="xl" component="a" href="https://www.facebook.com/people/Aprai-Indaiatuba/100090048881690/">
                        <IconBrandFacebook style={{width: '100%', height: '100%'}}></IconBrandFacebook>
                    </ActionIcon>
                </ActionIcon.Group>
            </Group>
        </Flex>
    );
}

export default Layout