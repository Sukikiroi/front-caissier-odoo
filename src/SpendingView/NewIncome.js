import React, { useState } from 'react';
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
  HStack,
  Input,
  VStack,
  Spacer,
  Flex,
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import IncomePaper from './IncomePaper';
import IncomeCoin from './IncomeCoin';
import { useToast } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Textarea } from '@chakra-ui/react';
import axios from 'axios';
import { updateData } from '../redux/slices';

const NewIncome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();
 
const [sold, setsold] = useState()
const [entrance, setentrance] = useState()
const [door, setdoor] = useState()
const [section, setsection] = useState()
const [concerned, setconcerned] = useState()
const [taxpayer, settaxpayer] = useState()
const [description, setdescription] = useState()
const [desable, setdesable] = useState(false)



  const newspending = {
    entrance: entrance,
    door: door,
    section: section,
    description: description,
    sold: sold,
    concerned: concerned,
    taxpayer: taxpayer,
 
  };

  const sendIncome = () => {
    console.log(newspending);
    axios
      .post(`http://localhost:3004/spending/new`, newspending)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    setdesable(true);
  };

  const closeme = () => {
    axios.get(`http://localhost:3004/spending`).then(res => {
      dispatch(updateData(res.data.reverse()));
    });
    setdesable(false);
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} bg={'#2C9BC8'}>
        جديد
      </Button>
      <Modal isOpen={isOpen} onClose={closeme}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> مصروف جديد </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box h={450} bg={'white'}>

              <Box display={'flex'} justifyContent={'flex-end'}>
              <Button onClick={onOpen} bg={'#2C9BC8'} color={'white'}>
        اشعار المسؤل
      </Button>  
              </Box>
         
      <br></br> 
      <br></br> 
      <br></br> 
              <VStack>
                <HStack>
                  <Select
                    w={'50%'}
                    placeholder=" القسم"
                    onChange={e => setsection(e.target.value)}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>

                  <Select
                    w={'50%'}
                    placeholder=" الباب"
                    onChange={e => setdoor(e.target.value)}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </HStack>
                <Select
                  w={'100%'}
                  placeholder=" المدخل"
                  onChange={e => setentrance(e.target.value)}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Flex>
                  <Spacer />
                  <Input
                    onChange={e => setsold(e.target.value)}
                    placeholder="                الرصيد"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                  <Input
                    onChange={e => setconcerned(e.target.value)}
                    placeholder="                المعني"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>
                <Flex>
                  <Input
                    onChange={e => settaxpayer(e.target.value)}
                    placeholder="                المكلف"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                  <Spacer />
                  <Input
                  
                    placeholder="                اسم أمين الصندوق"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>

                <Box w={'100%'} bg={''} h={'30'}>
                  <Textarea placeholder=" ملاحظة"    onChange={e => setdescription(e.target.value)}  />
                </Box>
              </VStack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" bg={'red.300'} color={'white'} mr={3}>
              الغاء
            </Button>

            <Button
              bg={'green.200'}
              color={'white'}
              mr={3}
              onClick={sendIncome}
              isDisabled={desable}
            >
              حفظ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewIncome;
