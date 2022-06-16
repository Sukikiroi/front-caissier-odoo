import React,{useState} from 'react'
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
import { useSelector } from 'react-redux';
import { FcPrint } from 'react-icons/fc';
const Printmodal = ({time,date,balance,operation,customer,paperone,papertwo,papertree,paperfour,coinone,cointwo,cointree,coinsix}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

const [totalsold, settotalsold] = useState(0)

    const resultData = useSelector(state => state.settings.resultData);
  const handlprint=()=>{
    onOpen()
    let totalsold=0
    for (let i = 0; i < resultData.length; i++) {
      totalsold=resultData[i].sold+totalsold
    } 

    settotalsold(totalsold)
  }
  return (
    <>
      <Button onClick={handlprint}   leftIcon={<FcPrint />}
                     bg={'#2C9BC8'}>
         طباعة
          
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={ '5xl'}>
 
        <ModalContent  >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Center size={ '5xl'}>

             
          <PDFViewer style={{ width: '900px', height: '600px' }}>
                  <Template time={time} date={date} totalsold={totalsold} />
                </PDFViewer>
                </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={handlprint}>Print</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Printmodal