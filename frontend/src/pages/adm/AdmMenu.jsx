import {Stack} from '@mantine/core'
import MenuButton from "../../components/MenuButton.jsx";

function AdmMenu () {

    return(
        <Stack align='center' h='100%' justify='center' gap='xl'>
            <MenuButton
                link='/admin/gerenciarcadastro'
                text='Gerenciar Administradores'
            />
            <MenuButton
                link='/blog'
                text='Gerenciar Postagens'
            />
            <MenuButton
                link='/bazar'
                text='Gerenciar Bazar'
            />
            <MenuButton
                link='/admin/editarcontato'
                text='Editar Informações de Contato'
            />
            <MenuButton
                link='/login'
                text='Sair'
            >

            </MenuButton>
        </Stack>
    );
}

export default AdmMenu;