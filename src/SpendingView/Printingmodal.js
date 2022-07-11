import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,useDisclosure,Text, Box, Center,
  } from '@chakra-ui/react'
import App from "../printLib/App"
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
  import "./styles.css";
  import Pdf from "react-to-pdf";
 



const Printingmodal = ({data}) => {
    const ref = React.createRef();
    const { isOpen, onOpen, onClose } = useDisclosure()
   
const printme=()=>{
  window.print()
}
  return (
 
<>
   
      <Button onClick={onOpen} bg='blue.300'>طباعة </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       
       <App/>
     

 
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={printme } color='white'>
              الغاء
            </Button>
            <Button bg='green.400' color='white'>أطبع</Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
  )
}

export default Printingmodal