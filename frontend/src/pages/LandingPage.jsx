import {Button, Paper, Title, Text} from "@mantine/core"

function LandingPage(){
    return (
        <>
            <Button>Botão</Button>
            <Paper m='md' shadow="xl" radius="md" withBorder p="xl" size='100%'>
                <Title>Título</Title>
                <Text>text</Text>
            </Paper>
        </>
    )
}

export default LandingPage