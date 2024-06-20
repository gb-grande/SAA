
import { Table } from '@mantine/core';


function DonationTable() {
  const elements = [
    { type: "tusca", amount: 12.011, source: 'C', destination: 'Carbon', date: "12/12/1222"},
    { type: "tusca", amount: 14.007, source: 'N', destination: 'Nitrogen', date: "12/12/1222"},
    { type: "tusca", amount: 88.906, source: 'Y', destination: 'Yttrium', date: "12/12/1222"},
    { type: "tusca", amount: 137.33, source: 'Ba', destination: 'Barium', date: "12/12/1222"},
    { type: "tusca", amount: 140.12, source: 'Ce', destination: 'Cerium', date: "12/12/1222"},
  ];


    const rows = elements.map((element) => (
      <Table.Tr key={element.name}>
        <Table.Td>{element.type}</Table.Td>
        <Table.Td>{element.amount}</Table.Td>
        <Table.Td>{element.destination}</Table.Td>
        <Table.Td>{element.source}</Table.Td>
        <Table.Td>{element.date}</Table.Td>
      </Table.Tr>
    ));
  
    return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Tipo</Table.Th>
            <Table.Th>Quantidade</Table.Th>
            <Table.Th>Origem</Table.Th>
            <Table.Th>Destino</Table.Th>
            <Table.Th>Data</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    );
  }

export default DonationTable