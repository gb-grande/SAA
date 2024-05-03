import {useDisclosure} from "@mantine/hooks";
import {AppShell, Group, Anchor, Center, Stack, Image, Text, ActionIcon } from "@mantine/core";
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
        links.map(l =>
            <Anchor c={'white'} ff={'Karla'}
                    fz={'1.2em'} mx={'60px'}
                    component={Link} to={l.link}
            >
                {l.label}
            </Anchor>
        );

    return (
        <Stack w="100vw" gap={"0"} align="center">
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
            <AppShell
                maw={"100%"}
            >   
                <AppShell.Header bg={'#392F88'} pos="relative" w={"100%"} content="fit" display="inline-block">
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

                <AppShell.Footer bg={'#392F88'} ff={'Karla'} c={'white'} pos="relative" w={'100%'} p="md">
                    <Group justify="space-between" >
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
                </AppShell.Footer>
            </AppShell>
        </Stack>
    );
}

export default Layout