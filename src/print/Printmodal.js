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
import Invoice from './components/reports/Invoice';
import invoice from "./data/invoice"



const Printmodal = ({data}) => {
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

             
              <PDFViewer width="1000" height="600" className="app" >
                <Invoice invoice={data}/>
            </PDFViewer>
                </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              الغاء
            </Button>
            <Button variant='ghost' onClick={handlprint}>طباعة</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Printmodal