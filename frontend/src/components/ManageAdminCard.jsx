import {TextInput, Card, Button, Text, Title, Flex, Space} from "@mantine/core";
import {modals} from "@mantine/modals"
import {HashLink} from "react-router-hash-link";

export function ManageAdminCard({admin, h, w, light=false, showDate=true, imgHPct=0.6, ...others}) {
    const {user} = admin;
    console.log(user)
    
    let textH = h - 20;
    const lineCount = Math.floor(textH / 32);

    const bgColor = light ? "aprai-purple.3" : "aprai-purple.9";
    const textColor = light ? "aprai-purple.9" : "white";

    function modalTest () {
        modals.open({
            title:`Atualizar senha de ${user}`,
            children: (
                <>
                    <TextInput label="Sua antiga senha" placeholder="Antiga senha" data-autofocus />
                    <TextInput label="Sua nova senha" placeholder="Nova senha" data-autofocus />
                    <TextInput label="Confirme sua nova senha" placeholder="Senha" data-autofocus />
                    <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                        Submit
                    </Button>
                </>
            )
        })
    }
    return (

        <Card
            radius={0} shadow={"md"}
            h={h} w={w}
            bg={bgColor}
            {...others}
        >
            <Card.Section p='sm' >
                <Space h = "3px"/>
                <Flex justify = 'space-between' align = 'center'>
                    <Title order={4} lineClamp={2} c={textColor} style={{ marginRight: '10px' }}>
                        {user}
                    </Title>

                    <div>
                    <   Flex justify = 'space-between' align = 'center'>
                            <Button component={HashLink} onClick={modalTest()}>
                                Editar
                            </Button>

                            <Space w = "xs"/>
                            
                            <Button component={HashLink} bg = "red" >
                                Deletar
                            </Button>
                        </Flex>
                    </div>
                </Flex>
            </Card.Section>
        </Card>
    )
}