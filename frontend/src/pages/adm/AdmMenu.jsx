import {Stack} from '@mantine/core'
import MenuButton from "../../components/MenuButton.jsx";
import axios from 'axios';
import { useAuth } from '../../providers/AuthProvider.jsx';

function AdmMenu () {
    const {userName, setToken, setUserName} = useAuth();

    const logOut = () => {
        setToken();
        setUserName();
    } 

    return(
        <Stack align='center' h='100%' justify='center' gap='xl'>
            <Text>{userName}</Text>
            <MenuButton
                link='/admin/cadastro'
                text='Cadastro de Administrador'
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