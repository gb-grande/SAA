import {useDisclosure} from "@mantine/hooks";
import {AppShell, Burger, Group, Anchor, Center, Stack} from "@mantine/core";
import {Outlet} from "react-router-dom";

function Layout() {
    const [opened, {toggle}] = useDisclosure();

    const links = [
        {label: "Blog", link: "/blog"},
        {label: "test", link: "/test"}
    ];

    const linkButtons =
        links.map(l => <Anchor href={l.link}>{l.label}</Anchor>);

    let headerHeight = 60;
    if (opened) headerHeight += 30 * links.length;

    return (
        <AppShell
            header={{ height: headerHeight }}
            padding="md"
        >
            <AppShell.Header>
                <Center h="100%" px="md">
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
        </AppShell>
    );
}

export default Layout