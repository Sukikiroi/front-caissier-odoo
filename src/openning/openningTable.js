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


const OpenningTable = ({data}) => {

 
  return (
    <Container maxW="850px" bg="black.600" color="black">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>الساعة</Th>
              <Th>التاريخ</Th>
              <Th>الرصيد الغلق</Th>
            
              <Th> منفد الغلق</Th>
             
            </Tr>
          </Thead>
          <Tbody>
            {/* {data?.map((income, key) => {
              return (
                <Tr key={key}>
                  <Td>{income.time}</Td>
                  <Td>{income.date}</Td>
                  <Td>{income.balance}</Td>
                  <Td>{income.operation_code}</Td>
                  <Td>{income.client_code}</Td>
                </Tr>
              );
            })} */}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default OpenningTable;
