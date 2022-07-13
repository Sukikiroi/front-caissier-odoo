import React, { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Input,
  Flex,
  TagLabel,
  Text,
} from '@chakra-ui/react';
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
import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons';
import currencyFormatter from "currency-formatter"
import {
  Tag,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react';
import axios from 'axios';
import { Label } from '@mui/icons-material';
import { Divider } from '@chakra-ui/react';
const UpdateIncome = ({ incomedata }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setdata] = useState();
  const [door, setdoor] = useState('');
  const [entrance, setentrance] = useState('');
  const [section, setsection] = useState('');
  const [concerned, setconcerned] = useState('');
  const [taxpayer, settaxpayer] = useState('');
  const [sold, setsold] = useState('');

  return (
    <>
      <Button onClick={onOpen} bg={'white'}>
        <EditIcon color={'green.400'} w={19} h={19} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>تحديث </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={600} h={900} color="black">
              <Flex w={400} justifyContent={'space-between'} mb={5}>
                <Text w={100} fontSize={'2xl'} mr={5}>
                  المبلغ
                </Text>
                <Input
                  w={300}
                  variant="filled"
                  bg="blue.50"
                  placeholder="Filled"
                  value={incomedata.balance}
                  onChange={e => setconcerned(e.target.value)}
                />
              </Flex>
              <Flex w={400} justifyContent={'space-between'} mb={5}>
                <Text w={200} fontSize={'2xl'} mr={5}>
                  رقم العملية
                </Text>
                <Input
                  w={300}
                  variant="filled"
                  bg="blue.50"
                  placeholder="Filled"
                  value={incomedata.operation_code}
                  onChange={e => setdoor(e.target.value)}
                />
              </Flex>
              <Flex w={400} justifyContent={'space-between'} mb={5}>
                <Text w={200} fontSize={'2xl'} mr={5}>
                  رقم الزبون
                </Text>
                <Input
                  w={300}
                  variant="filled"
                  bg="blue.50"
                  placeholder="Filled"
                  value={incomedata.client_code}
                  onChange={e => setentrance(e.target.value)}
                />
              </Flex>
              <Flex
                w="600"
                h={100}
                border=""
                shadow={'md'}
                rounded={'md'}
                justifyContent="space-between"
              >
                <Divider orientation="vertical" />
                g
                <Divider orientation="vertical" />
                g
                <Divider orientation="vertical" />g
              </Flex>

              <TableContainer>
                <Table variant="simple">
                  <TableCaption>
                    Imperial to metric conversion factors
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th> الفئة </Th>
                      <Th>العدد</Th>
                      <Th isNumeric> المجموع الجزئي </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>2000 دج </Td>
                      <Td>8</Td>
                      <Td>   {currencyFormatter.format(8 * 2000, {
                          symbol: 'دج',
                          decimal: '.',
                          thousand: ',',
                          precision: 2,
                          format: '%v %s', // %s is the symbol and %v is the value
                        })}{' '}</Td>
                    </Tr>
                    <Tr>
                      <Td>1000 دج </Td>

                      <Td>3</Td>
                    </Tr>
                    <Tr>
                      <Td>500 دج </Td>

                      <Td>1</Td>
                    </Tr>
                    <Tr>
                      <Td>200 دج </Td>

                      <Td>3</Td>
                    </Tr>
                    <Tr>
                      <Td>100 دج </Td>

                      <Td>3</Td>
                    </Tr>
                    <Tr>
                      <Td>50 دج </Td>

                      <Td>3</Td>
                    </Tr>
                    <Tr>
                      <Td>20 دج </Td>

                      <Td>3</Td>
                    </Tr>
                    <Tr>
                      <Td>10 دج </Td>

                      <Td>3</Td>
                    </Tr>
                    <Tr>
                      <Td>5 دج </Td>

                      <Td>3</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              الغاء
            </Button>
            <Button variant="outline" mr={20}>
              {' '}
              تغيير
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateIncome;
