import { Space } from '@mantine/core'
import MenuButton from "../components/MenuButton";

function AdmMenu () {

    return(
        <>  
            <Space h='sm'/>
            <MenuButton 
                link='/cadastro'
                text='Cadastro de Administrador'
            />
            <Space h='xl'/>
            <MenuButton 
                link='/gerenciablog'
                text='Gerenciar Postagens'
            />
            <Space h='xl'/>
            <MenuButton 
                link='/editarcontato'
                text='Editar Informações de Contato'
            />
        </>
        
    );
}

export default AdmMenu;