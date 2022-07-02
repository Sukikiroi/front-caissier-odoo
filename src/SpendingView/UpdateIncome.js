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
  useToast
} from '@chakra-ui/react';

import { DeleteIcon, EditIcon, WarningIcon } from '@chakra-ui/icons';

import axios from "axios"
import { Label } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { updateData } from '../redux/slices';


const UpdateIncome = ({Spendid}) => {
  const dispatch=useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
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
   
  }
 

const updatespending=()=>{
  console.log(Spendid) 
  axios.post('http://localhost:3004/spending/update', {
    id: Spendid,
    door:door,
    entrance:entrance,
    section:section,
    concerned:concerned,
    taxpayer:taxpayer,
    sold:sold,
  })
  .then(function (response) {
    console.log(response);
    axios.get(`http://localhost:3004/spending`).then(res => {
      dispatch(updateData(res.data));
    });
    onClose()
    toast({
      title: '  تحديث',
      description: " تمت  تحديث بنجاح",
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
   

  })
  .catch(function (error) {
    console.log(error);
  });


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
            <Button variant='outline' onClick={updatespending}> تغيير</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateIncome;
