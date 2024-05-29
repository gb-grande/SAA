import {useDisclosure} from "@mantine/hooks";
import {Anchor, Center, Group, Stack} from "@mantine/core";
import {IconChevronDown, IconChevronUp} from "@tabler/icons-react";
import {HashLink} from "react-router-hash-link";


function Header(){
    const [opened, {toggle}] = useDisclosure();

    const links = [
        {label: "Quem Somos", link: "/#quemSomos"},
        {label: "Contato", link: "/#contato"},
        {label: "Bazar", link: "/bazar"},
        {label: "Blog", link: "/blog"},
        {label: "Administração", link: "/login"}
    ];

    const linkButtons =
        links.map((l, index) =>
            <Anchor key={index}
                    c={'white'} ff={'Karla'}
                    fz={'1.2em'} mx={{base: '20px', md: '40px', lg: '60px'}}
                    component={HashLink} to={l.link}
            >
                {l.label}
            </Anchor>
        );

    return (
        <Center bg={'aprai-purple.9'} px="md" h={{base: (opened ? 'auto' : '5em'), sm: '5em'}}>
            <Stack hiddenFrom="sm" pos="relative">
                {opened ?
                    <Stack justify="center" align="center" p="lg">
                        {linkButtons}
                        <IconChevronUp style={{cursor: 'pointer'}} color="white" onClick={toggle}/>
                    </Stack>
                    :
                    <Center my="md">
                        <IconChevronDown style={{cursor: 'pointer'}} color="white" onClick={toggle}/>
                    </Center>
                }
            </Stack>
            <Group my="md" ml="xl" visibleFrom="sm">
                {linkButtons}
            </Group>
        </Center>
    )
}

export default Header;