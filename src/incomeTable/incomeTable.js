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
import Printmodal from '../incomeTable/PrintModal';
import InfoIcon from '@mui/icons-material/Info';
import currencyFormatter from "currency-formatter"
import Show from './Show';
import { FcPrint } from 'react-icons/fc';
import PrintModal from '../incomeTable/PrintModal';
import Print from './Print';
const IncomeTable = ({ data }) => {
  return (
    <Container maxW="1050" mt={50} bg="black.600" color="black">
      <TableContainer border={'4px solid #2C9BC8'} borderRadius={'5'} shadow="lg">
        <Table variant="simple">
          <PerfectScrollbar>
            <Thead bg={'#2C9BC8'} w="800">
              <Tr color={'white'}>
                <Th color={'white'}>الساعة</Th>
                <Th color={'white'}>التاريخ</Th>
                <Th color={'white'}> المبلغ</Th>
                <Th color={'white'}>رقم التسلسلي</Th>

                <Th color={'white'}>رمز العملية</Th>

                <Th color={'white'} > رقم الزبون</Th>
                <Th color={'white'} >الاجرأت</Th>
                <Th color={'white'} > </Th>
                <Th color={'white'} ></Th>
                <Th color={'white'} ></Th>
               
              
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((income, key) => {
                return (
                  <Tr key={key}>
                    <Td>{income.time}</Td>
                    <Td>{income.date}</Td>
                    <Td>
                      {currencyFormatter.format(income.balance, {
                        symbol: 'دج',
                        decimal: '.',
                        thousand: ',',
                        precision: 2,
                        format: '%v %s', // %s is the symbol and %v is the value
                      })}
                    </Td>
                    <Td>{income.id}</Td>
                    <Td>{income.operation_code}</Td>
                    <Td>{income.client_code}</Td>

 

                    <Td>
                      <HStack>
                        {localStorage.getItem('role') == 1 ? (
                          <DeleteIncome Incomeid={income.id} />
                        ) : (
                          ''
                        )}

                        <UpdateIncome incomedata={income} />
                      <Print data={income}/>
                        <Show data={income}/>
                   
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
