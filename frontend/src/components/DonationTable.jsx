
import { Table, Button, Space, Pagination, Flex, Text} from '@mantine/core';
import {useState} from "react";
import useFetch from "../hooks/useFetch.jsx";
import {modals} from "@mantine/modals";
import {RegisterDonationsModal, GenerateReport} from "./DonationsModal.jsx";
import axios from "axios";
import { notifications } from "@mantine/notifications";


function openCreateModal(callback) {
  modals.open({
    title: `Criar novo registro de doação`,
    children: <RegisterDonationsModal onDonationCreated={callback} />
  });
}

function openGenerateReportModal() {
  modals.open({
    title: `Gerar Relatório`,
    children: <GenerateReport />
  });
}

function* yieldPages(data, pageSize) {
  for (let i = 0; i < data.length; i += pageSize) {
    yield data.slice(i, i + pageSize);
  }
}

function DonationTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const { result: elements, reFetch, error, loading, setLoading } = useFetch('api/donations', {
    defaultValue: []
  });

  function handleCreateButtonClick() {
    openCreateModal(() => {
      reFetch();
    });
  }

  function handleDeleteClicked(element) {
    modals.openConfirmModal({
      title: 'Excluir registro',
      centered: true,
      children: (
        <Text size='sm'>
          Tem certeza de que quer excluir esse registro? Essa ação é irreversível.
        </Text>
      ),
      labels: { confirm: 'Deletar', cancel: 'Cancelar' },
      confirmProps: { color: 'red' },
      cancelProps: { variant: 'filled' },
      onConfirm: () => {
        setLoading(true);
        axios.delete(`api/donations/${element._id}`)
          .then(_ => {
            notifications.show({ message: 'Registro deletado.' });
            reFetch();
          }).catch(err => {
            notifications.show({ message: "Erro ao deletar registro.", color: "red" });
            console.error("Error when deleting register.", err.response);
          }).finally(() => setLoading(false));
      }
    });
  }

  if (elements.length == 0)
    return (<></>)

  const cardsPerPage = 10;
  const pages = [...yieldPages(elements, cardsPerPage)];

  const rows = pages[currentPage - 1].map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{element.date}</Table.Td>
      <Space w="120px" />
      <Table.Td>{element.amount}</Table.Td>
      <Space w="120px" />
      <Table.Td>{element.type}</Table.Td>
      <Space w="120px" />
      <Table.Td>{element.srcDest}</Table.Td>
      <Space w="150px" />
      <Table.Td>{element.flow === 'received' ? 'Recebido' : 'Enviado'}</Table.Td>
      <Space w="120px" />
      <Table.Td>
        <Button bg="red" onClick={() => handleDeleteClicked(element)}>Deletar</Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Flex align='center'>
        <Button onClick={handleCreateButtonClick}>Novo Registro</Button>
        <Space w="xs" />
        <Button onClick={openGenerateReportModal}>Gerar Relatório</Button>
      </Flex>
      <Space h="xl" />
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Data</Table.Th>
            <Space w="120px" />
            <Table.Th>Quantidade</Table.Th>
            <Space w="120px" />
            <Table.Th>Tipo</Table.Th>
            <Space w="120px" />
            <Table.Th>Origem/Destino</Table.Th>
            <Space w="120px" />
            <Table.Th>Recebido/Enviado</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Pagination m='lg' radius='md' withEdges total={pages.length} value={currentPage} onChange={setCurrentPage} />
    </>
  );
}

export default DonationTable