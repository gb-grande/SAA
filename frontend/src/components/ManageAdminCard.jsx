import {PasswordInput, Card, Button, Stack, Text, Title, Flex, Space} from "@mantine/core";
import {modals} from "@mantine/modals"
import {useDisclosure } from "@mantine/hooks";
import {isNotEmpty, useForm} from "@mantine/form";
import {HashLink} from "react-router-hash-link";
import axios from "axios";
import { notifications } from "@mantine/notifications";

// TO-DO !! prohibit users from deleting themselves!!

export function ManageAdminCard({admin, h, w, light=false, showDate=true, imgHPct=0.6, ...others}) {
    const { opened, toggle } = useDisclosure();
    const { user } = admin;

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
            passwordConfirm: (value, values) => {
                if (value !== values.newPassword) {
                    return 'As senhas não coincidem!';
                }
                return isNotEmpty('Confirme a nova senha')(value);
            }
        }
    });

    let textH = h - 20;
    const lineCount = Math.floor(textH / 32);

    const bgColor = light ? "aprai-purple.3" : "aprai-purple.9";
    const textColor = light ? "aprai-purple.9" : "white";

    function onClick(){
        const validationResults = form.validate();
    
        if (validationResults.hasErrors) {
            const firstError = Object.values(validationResults.errors)[0]
            notifications.show({ message: firstError, color: 'red' });
            return;
        }

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
                notifications.show({message: 'Erro ao atualizar admin.', color: 'red'})
            }
        })
        modals.closeAll()
    }

    function modalPassword () {
        modals.open({
            title:`Atualizar senha de ${user}`,
            children: (
                <>
                    <Stack component='form'>
                        <PasswordInput label="Sua antiga senha" placeholder='' visible={opened} onVisibilityChange={toggle}  {...form.getInputProps('oldPassword')} />
                        <PasswordInput label="Sua nova senha" placeholder='' visible={opened} onVisibilityChange={toggle} {...form.getInputProps('newPassword')}/>
                        <PasswordInput label="Confirme sua nova senha" placeholder='' visible={opened} onVisibilityChange={toggle} {...form.getInputProps('passwordConfirm')}/>
                        <Button fullWidth onClick={onClick} mt="md">
                            Submit
                        </Button>
                    </Stack>
                </>
            )
        })
    }

    function onConfirm() {
        console.log(`quero deletar user: ${user}`);
        axios.delete(`api/admins/${user}`)
            .then(
                notifications.show({message: 'Usuário deletado com sucesso.'})
            )
            .catch(err => {
                console.error("Unhandled error when deleting admin.", err);
                notifications.show({message: 'Erro ao deletar admin.', color: 'red'});
            });
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
            labels: { confirm: 'Deletar Conta', cancel: "Cancelar" },
            confirmProps: { color: 'red' },
            onCancel: () => console.log('Cancel'),
            onConfirm: onConfirm,
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