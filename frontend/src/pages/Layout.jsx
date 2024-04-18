import {useDisclosure} from "@mantine/hooks";
import {AppShell, Burger, Group, Anchor} from "@mantine/core";
import {Outlet} from "react-router-dom";

function Layout() {
    const [opened, {toggle}] = useDisclosure();

    const links = [
        {label: "Blog", link: "/blog"},
        {label: "test", link: "/test"}
    ];

    const linkButtons = links.map(l =>
        <Anchor href={l.link}>{l.label}</Anchor>
    );

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <div>Logo</div>
                    <Group ml="xl" visibleFrom="sm">
                        {linkButtons}
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                {linkButtons}
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
}

export default Layout