import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';


const SpendingTable = ({data}) => {

 
  return (
    <Container maxW="1250px" bg="black.600" color="black">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>الساعة</Th>
              <Th>التاريخ</Th>
              <Th>الرصيد المدخول</Th>
              <Th>رقم العملية</Th>
              <Th>رقم العميل</Th>
              <Th> صنف 2000</Th>
              <Th> صنف 1000</Th>
              <Th> صنف 500</Th>
              <Th> صنف 200</Th>
           
             
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((income, key) => {
              return (
                <Tr key={key}>
                  <Td>{income.time}</Td>
                  <Td>{income.date}</Td>
                  <Td>{income.balance}</Td>
                  <Td>{income.operation_code}</Td>
                  <Td>{income.first_qty}</Td>
                  <Td>{income.seconde_qty}</Td>
                  <Td>{income.tree_qty}</Td>
                  <Td>{income.four_qty}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SpendingTable;
