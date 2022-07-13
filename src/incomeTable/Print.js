import React from 'react';
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
  Flex,
  Center,
} from '@chakra-ui/react';
import currencyFormatter from "currency-formatter"

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
  } from '@chakra-ui/react'


import { FcPrint } from 'react-icons/fc';

import Pdf from 'react-to-pdf';
const Print = ({data}) => {
  const ref = React.createRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} leftIcon={<FcPrint />}></Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl"  >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mr={30}>طبع مدخول</ModalHeader>
          <ModalCloseButton />
          <ModalBody>






<Center w={800} h={700} ref={ref}>

<Box h={600} w={600}>
 
              <Flex w="100%" justifyContent="space-between">
                Date:{data.date} Compagnie :MMG Ref:kk
              </Flex>
              <TableContainer>
                <Table variant="simple">
                  <TableCaption>
                    Total Sold{' '}
                    {currencyFormatter.format(data.balance, {
                      symbol: 'دج',
                      decimal: '.',
                      thousand: ',',
                      precision: 2,
                      format: '%v %s', // %s is the symbol and %v is the value
                    })}
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>SOLD</Th>
                      <Th>QTY</Th>
                      <Th isNumeric>الصنف </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr bg="green.100" color="white" fontWeight={"bold"}>
                      <Td>
                        {currencyFormatter.format(data.first_qty * 2000, {
                          symbol: 'دج',
                          decimal: '.',
                          thousand: ',',
                          precision: 2,
                          format: '%v %s', // %s is the symbol and %v is the value
                        })}{' '}
                      </Td>
                      <Td> {data.first_qty}</Td>
                      <Td isNumeric>Billets de 2000 DA</Td>
                    </Tr>
                    <Tr bg="green.100" color="white">
                      <Td>
                        {currencyFormatter.format(data.first_qty * 1000, {
                          symbol: 'دج',
                          decimal: '.',
                          thousand: ',',
                          precision: 2,
                          format: '%v %s', // %s is the symbol and %v is the value
                        })}{' '}
                      </Td>
                      <Td> {data.first_qty}</Td>
                      <Td isNumeric>Billets de 1000 DA</Td>
                    </Tr>
                    <Tr bg="green.100" color="white" fontWeight={"bold"}>
                      <Td>
                        {currencyFormatter.format(data.first_qty * 500, {
                          symbol: 'دج',
                          decimal: '.',
                          thousand: ',',
                          precision: 2,
                          format: '%v %s', // %s is the symbol and %v is the value
                        })}{' '}
                      </Td>
                      <Td> {data.first_qty}</Td>
                      <Td isNumeric>Billets de 500 DA</Td>
                    </Tr>
                    <Tr bg="green.100" color="white">
                      <Td>
                        {currencyFormatter.format(data.first_qty * 200, {
                          symbol: 'دج',
                          decimal: '.',
                          thousand: ',',
                          precision: 2,
                          format: '%v %s', // %s is the symbol and %v is the value
                        })}{' '}
                      </Td>
                      <Td> {data.first_qty}</Td>
                      <Td isNumeric>Billets de 200 DA</Td>
                    </Tr>
                    <Tr bg="blue.100" color="white" fontWeight={"bold"}>
                      <Td>
                        {currencyFormatter.format(data.first_qty * 200, {
                          symbol: 'دج',
                          decimal: '.',
                          thousand: ',',
                          precision: 2,
                          format: '%v %s', // %s is the symbol and %v is the value
                        })}{' '}
                      </Td>
                      <Td> {data.first_qty}</Td>
                      <Td isNumeric>Pièces de 200 DA</Td>
                    </Tr>
                    <Tr bg="blue.100" color="white" fontWeight={"bold"}>
                      <Td>
                        {currencyFormatter.format(data.first_qty * 100, {
                          symbol: 'دج',
                          decimal: '.',
                          thousand: ',',
                          precision: 2,
                          format: '%v %s', // %s is the symbol and %v is the value
                        })}{' '}
                      </Td>
                      <Td> {data.first_qty}</Td>
                      <Td isNumeric>Pièces de 100 DA</Td>
                    </Tr>
                    <Tr bg="blue.100" color="white" fontWeight={"bold"}>
                      <Td>
                        {currencyFormatter.format(data.first_qty * 50, {
                          symbol: 'دج',
                          decimal: '.',
                          thousand: ',',
                          precision: 2,
                          format: '%v %s', // %s is the symbol and %v is the value
                        })}{' '}
                      </Td>
                      <Td> {data.first_qty}</Td>
                      <Td isNumeric>Pièces de 50 DA</Td>
                    </Tr>
                  </Tbody>

                  <Tr bg="blue.100" color="white" fontWeight={"bold"}>
                    <Td>
                      {currencyFormatter.format(data.first_qty * 20, {
                        symbol: 'دج',
                        decimal: '.',
                        thousand: ',',
                        precision: 2,
                        format: '%v %s', // %s is the symbol and %v is the value
                      })}{' '}
                    </Td>
                    <Td> {data.first_qty}</Td>
                    <Td isNumeric>Pièces de 20 DA</Td>
                  </Tr>

                  <Tr bg="blue.100" color="white" fontWeight={"bold"}>
                    <Td>
                      {currencyFormatter.format(data.first_qty * 10, {
                        symbol: 'دج',
                        decimal: '.',
                        thousand: ',',
                        precision: 2,
                        format: '%v %s', // %s is the symbol and %v is the value
                      })}{' '}
                    </Td>
                    <Td> {data.first_qty}</Td>
                    <Td isNumeric>Pièces de 10 DA</Td>
                  </Tr>

                  <Tr bg="blue.100" color="white"fontWeight={"bold"}>
                    <Td>
                      {currencyFormatter.format(data.first_qty * 5, {
                        symbol: 'دج',
                        decimal: '.',
                        thousand: ',',
                        precision: 2,
                        format: '%v %s', // %s is the symbol and %v is the value
                      })}{' '}
                    </Td>
                    <Td> {data.first_qty}</Td>
                    <Td isNumeric>Pièces de 5 DA</Td>
                  </Tr>
                </Table>
              </TableContainer>
              </Box>
            </Center>










          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              الغاء
            </Button>
            <Pdf targetRef={ref} filename="code-example.pdf" scale={100}>
              {({ toPdf }) => (
                <Button variant="outline" onClick={toPdf}>
                  طبع
                </Button>
              )}
            </Pdf>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Print;
