import {Stack} from '@mantine/core'
import MenuButton from "../../components/MenuButton.jsx";

function AdmMenu () {

    return(
        <Stack h='100%' justify='center' gap='xl'>
            <MenuButton
                link='/admin/cadastro'
                text='Cadastro de Administrador'
            />
            <MenuButton
                link='/todo'
                text='Gerenciar Postagens'
            />
            <MenuButton
                link='/admin/editarcontato'
                text='Editar Informações de Contato'
            />
        </Stack>
    );
}

export default AdmMenu;