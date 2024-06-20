
import { Table } from '@mantine/core';


function DonationTable() {
  const elements = [
    { type: "tusca", amount: 12.011, source: 'C', destination: 'Carbon' },
    { type: "tusca", amount: 14.007, source: 'N', destination: 'Nitrogen' },
    { type: "tusca", amount: 88.906, source: 'Y', destination: 'Yttrium' },
    { type: "tusca", amount: 137.33, source: 'Ba', destination: 'Barium' },
    { type: "tusca", amount: 140.12, source: 'Ce', destination: 'Cerium' },
  ];


    const rows = elements.map((element) => (
      <Table.Tr key={element.name}>
        <Table.Td>{element.type}</Table.Td>
        <Table.Td>{element.destination}</Table.Td>
        <Table.Td>{element.source}</Table.Td>
        <Table.Td>{element.amount}</Table.Td>
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
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    );
  }

export default DonationTable