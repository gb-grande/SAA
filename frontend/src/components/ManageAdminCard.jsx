import {PasswordInput, Card, Button, Text, Title, Flex, Space} from "@mantine/core";
import {modals} from "@mantine/modals"
import {useDisclosure } from "@mantine/hooks";
import {isNotEmpty, useForm} from "@mantine/form";
import {HashLink} from "react-router-hash-link";

export function ManageAdminCard({admin, h, w, light=false, showDate=true, imgHPct=0.6, ...others}) {
    const [visible, { toggle }] = useDisclosure(false);
    const {user} = admin;

    const form = useForm({
        mode: "uncontrolled",
        
        validate: {
            user: isNotEmpty('Informe o usuário'),
            pastPassword: isNotEmpty('Informe a velha senha'),
            newPassword: isNotEmpty('Informe a nova senha')
        }
    });

    let textH = h - 20;
    const lineCount = Math.floor(textH / 32);

    const bgColor = light ? "aprai-purple.3" : "aprai-purple.9";
    const textColor = light ? "aprai-purple.9" : "white";

    function onSubmit(values){
        console.log("NADAAAA")
    }

    function modalTest () {
        modals.open({
            title:`Atualizar senha de ${user}`,
            children: (
                <>
                    <form onSubmit={form.onSubmit(onSubmit)}>
                        <PasswordInput label="Sua antiga senha" visible={visible} onVisibilityChange={toggle} {...form.getInputProps('user')}/> 
                        <PasswordInput label="Sua nova senha" visible={visible} onVisibilityChange={toggle}  {...form.getInputProps('oldPassword')} />
                        <PasswordInput label="Confirme sua nova senha" visible={visible} onVisibilityChange={toggle} {...form.getInputProps('newPassword')}/>
                    
                        <Button fullWidth onClick={() => modals.closeAll()} type="submit" mt="md">
                            Submit
                        </Button>
                    </form>
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
                            <Button component={HashLink} onClick={modalTest}>
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