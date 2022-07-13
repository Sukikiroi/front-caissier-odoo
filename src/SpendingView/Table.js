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
import { HiOutlinePrinter } from 'react-icons/hi';
import Printmodal from '../print/Printmodal';
import currencyFormatter from "currency-formatter"
import Show from './Show';
const Spendingtable = ({ data }) => {
  console.log("i am data")
  console.log( data)
  return (
    <Container bg="black.600"  maxW={'1450px'}  color="black">
      <TableContainer border={'4px solid #2C9BC8'} borderRadius={'5'}>
        <Table variant="simple">
          <PerfectScrollbar>
            <Thead bg={'#2C9BC8'}>
              <Tr color={'white'}>
                <Th color={'white'}>الساعة</Th>
                <Th color={'white'}>التاريخ</Th>
                <Th color={'white'}>المبلغ </Th>
                <Th color={'white'}>القسم </Th>
                <Th color={'white'}> المدخل</Th>
                <Th color={'white'}> الباب</Th>
                <Th color={'white'}> المكلف</Th>
                <Th color={'white'}> المعني</Th>
                <Th color={'white'}>الملاحظة </Th>
                <Th color={'white'}> الاجراءات</Th>
                <Th color={'white'}> </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((spend, key) => {
                return (
                  <Tr key={key}>
                    <Td>{spend.time}</Td>
                    <Td>{spend.create_date}</Td>
                    <Td>     {currencyFormatter.format(spend.sold, {
  symbol: 'دج',
  decimal: '.',
  thousand: ',',
  precision: 2,
  format: '%v %s' // %s is the symbol and %v is the value
})}</Td>
                    <Td>{spend.door}</Td>
                    <Td>{spend.section}</Td>

                    <Td>{spend.entrance}</Td>
                    <Td>{spend.taxpayer}</Td>
                    <Td>{spend.concerned}</Td>
                    <Td>{spend.description}</Td>

                    <Td>
                      <HStack>
                        <DeleteIncome Spenddata={spend} />
                        <UpdateIncome Spendid={spend.id} />
                        <Show data={spend}/>
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

export default Spendingtable;
