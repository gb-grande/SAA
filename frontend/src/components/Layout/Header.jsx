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
        {label: "Administracao", link: "/admin"}
    ];

    const linkButtons =
        links.map((l, index) =>
            <Anchor key={index}
                    c={'white'} ff={'Karla'}
                    fz={'1.2em'} mx={'60px'}
                    component={HashLink} to={l.link}
            >
                {l.label}
            </Anchor>
        );

    const heightProp = opened ? {} : {h: '5em'};
    return (
        <Center bg={'aprai-purple.9'} px="md" {...heightProp}>
            <Stack hiddenFrom="sm" pos="relative">
                {opened ?
                    <Stack justify="center" align="center" p="lg">
                        {linkButtons}
                        <IconChevronUp style={{cursor: 'pointer'}} color="white" onClick={toggle}/>
                    </Stack>
                    :
                    <Center>
                        <IconChevronDown style={{cursor: 'pointer'}} color="white" onClick={toggle}/>
                    </Center>
                }
            </Stack>
            <Group ml="xl" visibleFrom="sm">
                {linkButtons}
            </Group>
        </Center>
    )
}

export default Header;