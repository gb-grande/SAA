import {Button, Text, Title, Flex, Space, Paper, LoadingOverlay} from "@mantine/core";
import {modals} from "@mantine/modals"
import axios from "axios";
import { notifications } from "@mantine/notifications";
import ManageAdminModal from "./ManageAdminModal.jsx";
import {useState} from "react";
import {useAuth} from "../../providers/AuthProvider.jsx";

function ManageAdminCard({admin, h, w, onAdminDeleted, ...others}) {
    const {user} = admin;
    const [loading, setLoading] = useState(false);

    const { userName, clearAuth } = useAuth();
    const logOutAfterChanging = (admin) => {
        if (admin.user === user)
            clearAuth();
    }

    function openEditModal() {
        // Checking who is userName
        if (userName === user) {
            notifications.show({message: 'Você será deslogado se modificar sua senha.',
                color: 'yellow',
                autoClose: false,});
        }
        modals.open({
            title:`Atualizar senha de ${user}`,
            children: <ManageAdminModal admin={admin} onAdminEdited={logOutAfterChanging}/>
        })
    }

    function onConfirmDeletion() {
        setLoading(true);
        axios.delete(`api/admins/${user}`)
            .then(_ => {
                notifications.show({message: 'Usuário deletado com sucesso.'})
                if (onAdminDeleted) onAdminDeleted(admin);
                logOutAfterChanging(admin);
            })
            .catch(err => {
                console.error("Unhandled error when deleting admin.", err);
                notifications.show({message: 'Erro ao deletar administrador.', color: 'red'});
            }).finally(() => setLoading(false));
    }

    function openDeleteModal(){
        if (userName === user) {
            notifications.show({message: 'Você será deslogado se deletar a si mesmo.',
                color: 'yellow',
                autoClose: false});
        }
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
                        <Button onClick={openEditModal}>
                            Editar
                        </Button>

                        <Space w = "xs"/>

                        <Button onClick={openDeleteModal} bg = "red" >
                            Deletar
                        </Button>
                    </Flex>
                </div>
            </Flex>
        </Paper>
    )
}
export default ManageAdminCard;