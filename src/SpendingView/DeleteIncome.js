import React ,{useEffect} from 'react';

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
  Stack,
  Text
} from '@chakra-ui/react';


import axios from "axios"
import { DeleteIcon, CloseIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { updateData } from '../redux/slices';

const DeleteIncome = ({Spenddata}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch=useDispatch()
const deleteone=()=>{
  axios.post('http://localhost:3004/spending/delete', {
    id: Spenddata.id,
  })
  .then(function (response) {
    axios.get(`http://localhost:3004/spending`).then(res => {
      

      dispatch(updateData(res.data));
      console.log(res.data)
    });

    onClose()
  })
  .catch(function (error) {
    console.log(error);
  });
}
 
 
 
  return (
    <>
      <Button onClick={onOpen} bg={'white'}>
        <DeleteIcon color={'tomato'} w={19} h={19} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> هل أنت متأكد</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w="100%" h={200} display="block">
               <Box>
                 <Text>  المكلف   :{Spenddata.taxpayer}  </Text>
                 <Text>  الباب  :{Spenddata.door} </Text>
                 <Text>  المدخل   :{Spenddata.entrance} </Text>
                 <Text>   القسم   :  {Spenddata.section} </Text>
                 <Text>  المبلغ   : {Spenddata.sold} </Text>             
               </Box>
              <Box alignItems={'center'} justifyContent="center">
                <Stack direction="row" spacing={4}>
                  <Button
                  onClick={deleteone}
                    leftIcon={<DeleteIcon />}
                    bg="green.100"
                    variant="solid"
                  >
                    مسح 
                  </Button>
                  <Button
                    rightIcon={<CloseIcon />}
                    bg="red.100"
                    variant="outline"
                  >
                    الغاء
                  </Button>
                </Stack>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteIncome;
