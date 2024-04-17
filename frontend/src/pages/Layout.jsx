import {useDisclosure} from "@mantine/hooks";
import {AppShell, Burger, Group, Anchor} from "@mantine/core";
import {Outlet} from "react-router-dom";

function Layout() {
    const [opened, {toggle}] = useDisclosure();

    const links = [
        {label: "Blog", link: "/blog"},
        {label: "test", link: "/test"}
    ]

    return (
        <AppShell
            header={{height: 60}}
            navbar={{
                width: { base: 50, md: 100, lg: 200 },
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <div>Logo</div>
                <Group gap={5} visibleFrom="xs">
                    {links.map(l =>
                        <Anchor href={l.link} underline="never">
                            {l.label}
                        </Anchor>
                    )}
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>
        </AppShell>
    );
}

export default Layout