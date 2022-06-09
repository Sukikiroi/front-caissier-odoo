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
    Center,
  } from '@chakra-ui/react'
  import {HiOutlinePrinter} from "react-icons/hi"
  import { PDFViewer } from '@react-pdf/renderer';
import Template from './Template';
const Printmodal = ({time,date,balance,operation,customer,paperone,papertwo,papertree,paperfour,coinone,cointwo,cointree,coinsix}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>
          <HiOutlinePrinter color={'blue.300'}/>
          
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={ '5xl'}>
 
        <ModalContent  >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Center size={ '5xl'}>

             
          <PDFViewer style={{ width: '900px', height: '600px' }}>
                  <Template time={time} date={date} />
                </PDFViewer>
                </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Printmodal