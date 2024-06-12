import {PasswordInput, Card, Button, Stack, Text, Title, Flex, Space} from "@mantine/core";
import {modals} from "@mantine/modals"
import {useDisclosure } from "@mantine/hooks";
import {isNotEmpty, useForm} from "@mantine/form";
import {HashLink} from "react-router-hash-link";
import axios from "axios";

export function ManageAdminCard({admin, h, w, light=false, showDate=true, imgHPct=0.6, ...others}) {
    const [visible, { toggle }] = useDisclosure(false);
    const {user} = admin;

    const form = useForm({
        mode: "uncontrolled",

        initialValues: {
            user: '',
            oldPassword: '',
            newPassword: '',
            passwordConfirm: ''
        },
        
        validate: {
            oldPassword: isNotEmpty('Informe a velha senha'),
            newPassword: isNotEmpty('Informe a nova senha'),
            passwordConfirm: isNotEmpty('Confirme a nova senha')
        }
    });

    let textH = h - 20;
    const lineCount = Math.floor(textH / 32);

    const bgColor = light ? "aprai-purple.3" : "aprai-purple.9";
    const textColor = light ? "aprai-purple.9" : "white";

    function onClick(){
        form.validate()
        const oldPassword = form.getInputProps('oldPassword').defaultValue
        const newPassword = form.getInputProps('newPassword').defaultValue
        const passwordConfirm = form.getInputProps('passwordConfirm').defaultValue
        console.log(`user: ${user} past:${oldPassword} new:${newPassword} confirm:${passwordConfirm}`)
        axios.put(`api/admins/${user}`, {
            user: user,
            oldPassword: oldPassword,
            newPassword: newPassword
        }).then(_ => {
            notifications.show({message: 'Informação atualizada com sucesso.'})
        }).catch(err => {
            if (err.response.data.validationErrors){
                form.setErrors(err.response.data.validationErrors);
            }
            else {
                console.error("Unhandled error when saving admin info.", err);
                notifications.show({message: 'Erro ao atualizar admin..', color: 'red'})
            }
        })
        modals.closeAll()
    }

    function onConfirm(){
        axios.delete(`api/admins/${user}`)
    }

    function modalPassword () {
        modals.open({
            title:`Atualizar senha de ${user}`,
            children: (
                <>
                    <Stack component='form'>
                        <PasswordInput label="Sua antiga senha" placeholder='' visible={visible} onVisibilityChange={toggle}  {...form.getInputProps('oldPassword')} />
                        <PasswordInput label="Sua nova senha" placeholder='' visible={visible} onVisibilityChange={toggle} {...form.getInputProps('newPassword')}/>
                        <PasswordInput label="Confirme sua nova senha" placeholder='' visible={visible} onVisibilityChange={toggle} {...form.getInputProps('passwordConfirm')}/>
                        <Button fullWidth onClick={onClick} mt="md">
                            Submit
                        </Button>
                    </Stack>
                </>
            )
        })
    }

    function modalDelete (){
        modals.openConfirmModal({
            title: 'Deletar conta de administrador',
            centered: true,
            children: (
              <Text size="sm">
                Você quer deletar a conta {user}?
              </Text>
            ),
            labels: { confirm: 'Deletar conta', cancel: "Cancelar" },
            confirmProps: { color: 'red' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () => console.log('Confirmed'),
          });
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
                            <Button component={HashLink} onClick={modalPassword}>
                                Editar
                            </Button>

                            <Space w = "xs"/>
                            
                            <Button component={HashLink} onClick={modalDelete} bg = "red" >
                                Deletar
                            </Button>
                        </Flex>
                    </div>
                </Flex>
            </Card.Section>
        </Card>
    )
}