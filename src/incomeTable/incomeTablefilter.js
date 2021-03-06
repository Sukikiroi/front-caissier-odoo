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
import PerfectScrollbar from 'react-perfect-scrollbar'
import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons';





const IncomeTablefilter = ({ data }) => {
  return (
    <Container maxW="900" maxH={400} bg="black.600" color="black">
        
      <TableContainer   maxH={600} border={'4px solid #2C9BC8'} borderRadius={'5'}>
        <Table variant="simple">
        <PerfectScrollbar>
          <Thead bg={'#2C9BC8'} >
            <Tr color={'white'}>
              <Th color={'white'}>الساعة</Th>
              <Th color={'white'}>التاريخ</Th>
              <Th color={'white'}>الرصيد المدخول</Th>
              <Th color={'white'}>رقم العملية</Th>
              <Th color={'white'}>رقم العميل</Th>
              <Th color={'white'}> أجراءات</Th>
              <Th color={'white'}> </Th>
              <Th color={'white'}> </Th>
              <Th color={'white'}> </Th>
           

            </Tr>
          </Thead>
          <Tbody>
      

            {data?.map((income, key) => {
              return (
                <Tr key={key}>
                  <Td>{income.item?.time}</Td>
                  <Td>{income.item?.date}</Td>
                  <Td>{income.item?.balance}</Td>
                  <Td>{income.item?.operation_code}</Td>
                  <Td>{income.item?.client_code}</Td>
                
                  <Td>
                    <HStack>
                      <DeleteIncome Incomeid={income.item}/>
                      <UpdateIncome incomedata={income.item} />
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

export default IncomeTablefilter;
