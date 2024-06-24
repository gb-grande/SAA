
import { Table, Button, Space, Pagination, Flex, Text} from '@mantine/core';
import {useState} from "react";
import useFetch from "../hooks/useFetch.jsx";
import {modals} from "@mantine/modals";
import {DonationsModal, GenerateReport} from "./DonationsModal.jsx";
import {useParams} from 'react-router-dom';


function openCreateModal() {
  modals.open({
      title:`Criar novo registro de doação`,
      children: <DonationsModal/>
  })
}
function openGenerateReportModal() {
  modals.open({
      title:`Gerar Relatório`,
      children: <GenerateReport/>
  })
}


function* yieldPages(data, pageSize){
  for (let i = 0; i < data.length; i += pageSize){
      yield data.slice(i, i + pageSize);
  }
}

function DonationTable() {
    const [currentPage, setCurrentPage] = useState(1);

    const {result: elements} = useFetch('api/donations', {
      defaultValue: []
  });

    if(elements.length == 0)
        return(<></>)

    const cardsPerPage = 10;
    const pages = [...yieldPages(elements, cardsPerPage)];

    const rows = pages[currentPage-1].map((element) => (
      <Table.Tr key={element.name}>
        <Table.Td>{element.date}</Table.Td>
        <Space w = "120px"/>
        <Table.Td>{element.amount}</Table.Td>
        <Space w = "120px"/>
        <Table.Td>{element.type}</Table.Td>
        <Space w = "120px"/>
        <Table.Td>{element.srcDest}</Table.Td>
        <Space w = "150px"/>
        <Table.Td>{element.flow}</Table.Td>
        <Space w = "120px"/>

        <Table.Td> 
        <Button bg="red" onClick={() => openDeleteModal(id)}>Deletar</Button>
        </Table.Td>
      </Table.Tr>
        
    ));
  
    return (
      <>
      <Flex  align = 'center'>
        <Button onClick={openCreateModal}>Criar Novo Registro</Button>
        <Space w = "xs"/>
        <Button onClick={openGenerateReportModal}>Gerar Relatório</Button>
      </Flex>
      <Space h = "xl"/>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Data</Table.Th>
              <Space w = "120px"/>
              <Table.Th>Quantidade</Table.Th>
              <Space w = "120px"/>
              <Table.Th>Tipo</Table.Th>
              <Space w = "120px"/>
              <Table.Th>Origem/Destino</Table.Th>
              <Space w = "120px"/>
              <Table.Th>Recebido/Enviado</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>

      <Pagination m='lg' radius='md' withEdges
       total={pages.length} value={currentPage} onChange={setCurrentPage}/>
    </>
    );
  }

export default DonationTable