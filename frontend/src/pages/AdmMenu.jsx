import { Space } from '@mantine/core'
import MenuButton from "../components/MenuButton";

function AdmMenu () {

    return(
        <>  
            <Space h='xl'/>
            <MenuButton 
                link='/admin/cadastro'
                text='Cadastro de Administrador'
            />
            <Space h='xl'/>
            <MenuButton 
                link='/todo'
                text='Gerenciar Postagens'
            />
            <Space h='xl'/>
            <MenuButton 
                link='/admin/editarcontato'
                text='Editar Informações de Contato'
            />
        </>
        
    );
}

export default AdmMenu;