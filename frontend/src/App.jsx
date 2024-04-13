import '@mantine/core/styles.css';
import {AppShell, Burger, Button, MantineProvider, Paper, Text, Title} from '@mantine/core';
import './App.css'
import {useDisclosure} from '@mantine/hooks';

function App() {
    const [opened, {toggle}] = useDisclosure();

    return (
        <MantineProvider>
            <AppShell
                header={{height: 60}}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: {mobile: !opened}
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
                </AppShell.Header>

                <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
                <AppShell.Main>
                    <Button>Botão</Button>
                    <Paper m='md' shadow="xl" radius="md" withBorder p="xl" size='100%'>
                        <Title>Título</Title>
                        <Text>text</Text>
                    </Paper>
                </AppShell.Main>
            </AppShell>

        </MantineProvider>
    );
}

export default App
