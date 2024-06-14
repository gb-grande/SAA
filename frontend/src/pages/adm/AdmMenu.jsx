import {Stack} from '@mantine/core'
import MenuButton from "../../components/MenuButton.jsx";
import axios from 'axios';
import { useAuth } from '../../providers/AuthProvider.jsx';

function AdmMenu () {
    const {setToken} = useAuth();

    const logOut = () => {
        setToken();
    } 

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
                onClick={logOut}
            >

            </MenuButton>
        </Stack>
    );
}

export default AdmMenu;