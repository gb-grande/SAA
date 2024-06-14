import {Stack, Text} from '@mantine/core'
import MenuButton from "../../components/MenuButton.jsx";
import axios from 'axios';
import { useAuth } from '../../providers/AuthProvider.jsx';

function AdmMenu () {
    const {userName, clearAuth} = useAuth();

    const logOut = () => {
        clearAuth();
    } 

    return(
        <Stack align='center' h='100%' justify='center' gap='xl'>
            <Text>Olá, {userName}!</Text>
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
                onClick={logOut}
            >

            </MenuButton>
        </Stack>
    );
}

export default AdmMenu;