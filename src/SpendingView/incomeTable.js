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
  HStack,
  Button,
} from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import DeleteIncome from './DeleteIncome';
import UpdateIncome from './UpdateIncome';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons';

const IncomeTable = ({ data }) => {

 
  return (
    <Container maxW="1000px" bg="black.600" color="black">
      <TableContainer border={'4px solid #2C9BC8'} borderRadius={'5'}>
        <Table variant="simple">
          <PerfectScrollbar>
            <Thead bg={'#2C9BC8'}>
              <Tr color={'white'}>
                <Th color={'white'}>الساعة</Th>
                <Th color={'white'}>التاريخ</Th>
                <Th color={'white'}>الرصيد </Th>
                <Th color={'white'}>القسم </Th>
                <Th color={'white'}> الباب</Th>
                <Th color={'white'}>  المدخل</Th>
                <Th color={'white'}>  المكلف</Th>
                <Th color={'white'}>  المعني</Th>
                <Th color={'white'}>  </Th>
                <Th color={'white'}> </Th>
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
                    <Td>{income.client_code}</Td>

                    <Td>{income.first_qty}</Td>
                    <Td>{income.seconde_qty}</Td>
                    <Td>{income.tree_qty}</Td>
                    <Td>{income.four_qty}</Td>

                    <Td>
                      <HStack>
                        <DeleteIncome Incomeid={income.id} />
                        <UpdateIncome Incomeid={income.id} />
                      </HStack>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </PerfectScrollbar>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default IncomeTable;
