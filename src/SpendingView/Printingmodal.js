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
   

  return (
    <div className="App">

   
      <Button onClick={onOpen} bg='blue.300'>طباعة </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
       
 
          <div ref={ref}>
       الباب
        <br></br>
        <h2>Start editing to see some magic happen!</h2>
      </div>
 
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} color='white'>
              الغاء
            </Button>
             
            <Pdf targetRef={ref} filename="spending.pdf" align='right' lang='ar'>
      {({ toPdf }) => <Button bg='green.400' color='white' onClick={toPdf}>أطبع</Button>}
    </Pdf>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
  )
}

export default Printingmodal