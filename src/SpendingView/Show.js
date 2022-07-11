import React from 'react'
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
  } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import currencyFormatter from "currency-formatter"
const Show = ({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log(data)
  return (
    <>
    <Button onClick={onOpen}> <ViewIcon/></Button>

    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mr={30}> عرض مصروف  </ModalHeader>
        <ModalCloseButton />
        <ModalBody >
         <Box h={300} w={400}>
الساعة          {data.time}<br></br>
    التاريخ         {data.create_date}<br></br>
القسم       {data.door}<br></br>
المدخل       {data.entrance}<br></br>
   الباب    {data.section}<br></br>
{data.taxpayer}<br></br>
{data.concerned}<br></br>
    { currencyFormatter.format(data.sold, {
                            symbol: 'دج',
                            decimal: '.',
                            thousand: ',',
                            precision: 2,
                            format: '%v %s', // %s is the symbol and %v is the value
                          })}<br></br>
         </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
             غلق
          </Button>
   
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default Show