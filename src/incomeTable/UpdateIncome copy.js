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
  Box,
  Input,
  Flex,
  TagLabel,
  Text,
} from '@chakra-ui/react';

import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons';

import axios from "axios"
import { Label } from '@mui/icons-material';


const UpdateIncome = ({Spendid}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
const [data, setdata] = useState()
const [door, setdoor] = useState("")
const [entrance, setentrance] = useState("")
const [section, setsection] = useState("")
const [concerned, setconcerned] = useState("")
const [taxpayer, settaxpayer] = useState("")
const [sold, setsold] = useState("")
  const getdata=()=>{
    axios.post(`http://localhost:3004/spending/id`,{id:Spendid})
    .then(res => {
      setdata(res.data[0])
      setdoor(res.data[0].door)
      settaxpayer(res.data[0].taxpayer)
      setconcerned(res.data[0].concerned)
      setsection(res.data[0].section)
      setentrance(res.data[0].entrance)
      setsold(res.data[0].sold)
     
    })
    onOpen()
    console.log(data)
  }

  return (
    <>
      <Button onClick={getdata} bg={'white'}>
        <EditIcon color={'green.400'} w={19} h={19} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>تحديث  </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
 
 <Box w={400} h={400} color="black">
 <Flex w={400} justifyContent={'space-between'} mb={5}>
 <Text  w={100}fontSize={"2xl"} mr={5}>المعني</Text>
 <Input  w={300} variant='filled'bg='blue.100' placeholder='Filled' value={concerned} onChange={(e)=>setconcerned(e.target.value)} />
 
 </Flex>
 <Flex w={400} justifyContent={'space-between'} mb={5}>
 <Text  w={100} fontSize={"2xl"} mr={5}>الباب</Text>
 <Input w={300} variant='filled'  bg='blue.100'placeholder='Filled' value={door} onChange={(e)=>setdoor(e.target.value)} />
 
 </Flex>
 <Flex w={400} justifyContent={'space-between'} mb={5}>
 <Text   w={100}fontSize={"2xl"} mr={5}>المدخل</Text>
 <Input w={300} variant='filled' bg='blue.100' placeholder='Filled' value={entrance} onChange={(e)=>setentrance(e.target.value)} />
 
 </Flex>
 <Flex w={400} justifyContent={'space-between'} mb={5}>
 <Text   w={100}fontSize={"2xl"} mr={5}>القسم</Text>
 <Input w={300}  variant='filled' bg='blue.100' placeholder='Filled' value={section} onChange={(e)=>setsection(e.target.value)} />
 
 </Flex>

 <Flex w={400} justifyContent={'space-between'} mb={5}>
 <Text  w={100}fontSize={"2xl"} mr={5}>المبلغ</Text>
 <Input w={300}  variant='filled' bg='blue.100' placeholder='Filled' value={sold}  onChange={(e)=>setsold(e.target.value)}/>
 
 </Flex>

 
 
 </Box>

 

 

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              الغاء
            </Button>
            <Button variant='outline'> تغيير</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateIncome;
