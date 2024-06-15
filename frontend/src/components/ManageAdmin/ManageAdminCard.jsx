import {Button, Text, Title, Flex, Space, Paper, LoadingOverlay} from "@mantine/core";
import {modals} from "@mantine/modals"
import axios from "axios";
import { notifications } from "@mantine/notifications";
import ManageAdminModal from "./ManageAdminModal.jsx";
import {useState} from "react";

// TODO !! prohibit users from deleting themselves!!

function ManageAdminCard({admin, h, w, onAdminDeleted, ...others}) {
    const {user} = admin;
    const [loading, setLoading] = useState(false);
    function openModal () {
        modals.open({
            title:`Atualizar senha de ${user}`,
            children: <ManageAdminModal admin={admin}/>
        })
    }

    function onConfirmDeletion() {
        setLoading(true);
        axios.delete(`api/admins/${user}`)
            .then(_ => {
                    notifications.show({message: 'Usuário deletado com sucesso.'})
                    onAdminDeleted(admin);
            })
            .catch(err => {
                console.error("Unhandled error when deleting admin.", err);
                notifications.show({message: 'Erro ao deletar administrador.', color: 'red'});
            }).finally(() => setLoading(false));
    }

    function modalDelete (){
        modals.openConfirmModal({
            title: 'Deletar conta de administrador',
            centered: true,
            children: (
              <Text size="sm">
                Você quer deletar a conta {user}? Essa ação é irreversível.
              </Text>
            ),
            labels: { confirm: 'Deletar Conta', cancel: "Cancelar" },
            confirmProps: { color: 'red' },
            onConfirm: onConfirmDeletion,
          });
    }
    
    return (
        <Paper
            radius={0} shadow="md"
            h={h} w={w} p="sm"
            bg="aprai-purple.3"
            {...others}
        >
            <LoadingOverlay visible={loading}/>
            <Space h = "3px"/>
            <Flex justify='space-between' align='center'>
                <Title order={4} lineClamp={2} c='aprai-purple.9' style={{ marginRight: '10px' }}>
                    {user}
                </Title>

                <div>
                    <Flex justify = 'space-between' align = 'center'>
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
        </Paper>
    )
}
export default ManageAdminCard;