import React ,{useState} from 'react';

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
} from '@chakra-ui/react';

import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons';

import axios from "axios"


const UpdateIncome = ({Incomeid}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
const [data, setdata] = useState()


  const getdata=()=>{
    axios.post(`http://localhost:3004/income/id`,{id:Incomeid})
    .then(res => {
      setdata(res.data[0])
    })
    onOpen()
    console.log(data)
  }

  return (
    <>
      <Button onClick={getdata} bg={'white'}>
        <EditIcon color={'green.400'} w={19} h={19} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
 
 {data?.time}
  

 {data?.write_date}
 {data?.operation_code}
 

 

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateIncome;
