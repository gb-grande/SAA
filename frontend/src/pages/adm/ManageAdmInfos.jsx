import {Pagination, Title, Center, Group, Button} from "@mantine/core";
import {useState} from "react";
import ManageAdminGrid from "../../components/ManageAdminGrid.jsx";
import {useViewportSize} from "@mantine/hooks";
import ProtectedComponent from "../../components/ProtectedComponent.jsx";
import useFetch from "../../hooks/useFetch.jsx";
import {HashLink} from "react-router-hash-link";

function* yieldPages(data, pageSize){
    for (let i = 0; i < data.length; i += pageSize){
        yield data.slice(i, i + pageSize);
    }
}

function ManageAdmInfos(){
    const [currentPage, setCurrentPage] = useState(1);
    const {width} = useViewportSize();

    const {result: admins} = useFetch('api/admins', {
        defaultValue: []
    });
    
    const cardsPerPage = 12;
    const pages = [...yieldPages(admins, cardsPerPage)];
    return (
      <>
          <Group>
              <Title mb='sm'>Cadastro de Admnistradores</Title>
              <ProtectedComponent>
                  <Button component={HashLink} to={'/admin/cadastro/'}>Criar</Button>
              </ProtectedComponent>
          </Group>
             <ManageAdminGrid data={pages[currentPage - 1]} containerWidth={width}/>
          <Center>
              <Pagination m='lg' radius='md' withEdges
                  total={pages.length} value={currentPage} onChange={setCurrentPage}/>
          </Center>
      </>
    );
}

export default ManageAdmInfos