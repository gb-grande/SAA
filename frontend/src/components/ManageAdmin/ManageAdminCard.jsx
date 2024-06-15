import {Card, Button, Text, Title, Flex, Space} from "@mantine/core";
import {modals} from "@mantine/modals"
import axios from "axios";
import { notifications } from "@mantine/notifications";
import ManageAdminModal from "./ManageAdminModal.jsx";

// TODO !! prohibit users from deleting themselves!!

export function ManageAdminCard({admin, h, w, light=false, showDate=true, imgHPct=0.6, ...others}) {
    const bgColor = light ? "aprai-purple.3" : "aprai-purple.9";
    const textColor = light ? "aprai-purple.9" : "white";

    function openModal () {
        modals.open({
            title:`Atualizar senha de ${admin}`,
            children: <ManageAdminModal admin={admin}/>
        })
    }

    function onConfirmDeletion() {
        console.log(`quero deletar user: ${admin}`);
        axios.delete(`api/admins/${admin}`)
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
                Você quer deletar a conta {admin}? Essa ação é irreversível.
              </Text>
            ),
            labels: { confirm: 'Deletar Conta', cancel: "Cancelar" },
            confirmProps: { color: 'red' },
            onConfirm: onConfirmDeletion,
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
                        {admin}
                    </Title>

                    <div>
                    <   Flex justify = 'space-between' align = 'center'>
                            <Button onClick={openModal}>
                                Editar
                            </Button>

                            <Space w = "xs"/>

                            <Button onClick={modalDelete} bg = "red" >
                                Deletar
                            </Button>
                        </Flex>
                    </div>
                </Flex>
            </Card.Section>
        </Card>
    )
}