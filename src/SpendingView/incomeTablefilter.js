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
  console.log('filter')
  console.log(data)
  return (
    <Container bg="black.600"  maxW={'1200px'}  color="black">
      <TableContainer border={'4px solid #2C9BC8'} borderRadius={'5'}>
        <Table variant="simple">
        <PerfectScrollbar>
        <Thead bg={'#2C9BC8'} w="100%">
              <Tr color={'white'}>
                <Th color={'white'}>الساعة</Th>
                <Th color={'white'}>التاريخ</Th>
                <Th color={'white'}>المبلغ </Th>
                <Th color={'white'}>الباب </Th>
                <Th color={'white'}> القسم</Th>
                <Th color={'white'}> المدخل</Th>
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
                  <Td>{spend.item?.time}</Td>
                  
                    <Td>{spend.item?.create_date}</Td>
                    <Td>{spend.item?.sold}  دج</Td>
                    <Td>{spend.item?.door}</Td>
                    <Td>{spend.item?.section}</Td>

                    <Td>{spend.item?.entrance}</Td>
                    <Td>{spend.item?.taxpayer}</Td>
                    <Td>{spend.item?.concerned}</Td>
                    <Td>{spend.item?.description}</Td>
                  <Td>
                    {/* <HStack>
                      <DeleteIncome Spenddata={income.item}/>
                      <UpdateIncome Spendid={income.item?.id} />
                    </HStack> */}
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
