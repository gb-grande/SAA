import {Stack, Text} from '@mantine/core'
import MenuButton from "../../components/customInputs/MenuButton.jsx";
import { useAuth } from '../../providers/AuthProvider.jsx';

/**
 * This is a admin menu page, with navigation to administrative sections.
 * 
 * @returns {JSX.Element} The AdmMenu page.
 */
function AdmMenu() {
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
                link='/admin/registrardoacoes'
                text='Gerenciar Doações'
            />
            <MenuButton
                link='/login'
                text='Sair'
                bg='red'
                onClick={logOut}
            >

            </MenuButton>
        </Stack>
    );
}

export default AdmMenu;