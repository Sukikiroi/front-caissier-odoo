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

import axios from 'axios';
import { updateData } from '../redux/slices';

const NewIncome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();
  const [customernumber, setcustomernumber] = useState(0);
  const [operationnumber, setoperationnumber] = useState(0);
  const [desable, setdesable] = useState(false);
  const [balance, setbalance] = useState(0);
  const [caisseuser, setcaisseuser] = useState('');
  const paperone = useSelector(state => state.settings.paperone);
  const papertwo = useSelector(state => state.settings.papertwo);
  const papertree = useSelector(state => state.settings.papertree);
  const coinone = useSelector(state => state.settings.coinone);
  const cointwo = useSelector(state => state.settings.cointwo);
  const cointree = useSelector(state => state.settings.cointree);
  const coinfour = useSelector(state => state.settings.coinfour);
  const coinfive = useSelector(state => state.settings.coinfive);
  const coinsix = useSelector(state => state.settings.coinsix);

  const newIncome = {
    customer: customernumber,
    operation: operationnumber,
    balance: balance,
    caisseuser: caisseuser,
    paperone: paperone,
    papertwo: papertwo,
    papertree: papertree,
    coinone: coinone,
    cointwo: cointwo,
    cointree: cointree,
    coinfour: coinfour,
    coinfive: coinfive,
    coinsix: coinsix,
  };

  const sendIncome = () => {
    console.log(newIncome);
    axios
      .post(`http://localhost:3004/income/newincome`, newIncome)
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
    axios.get(`http://localhost:3004/income`).then(res => {
      dispatch(updateData(res.data.reverse()));
    });
    setdesable(false);
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} bg={'#2C9BC8'}align='right'>
        <Box align='left' width={'100%'}>
        جديد
        </Box>
                                            
      </Button>
      <Modal isOpen={isOpen} onClose={closeme}>
        <ModalOverlay />
        <ModalContent>
          <br></br>
          <ModalHeader align='left'> 
          <Box align='right' width={'100%'}>
        جديد
        </Box> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={400} h={300} bg={'white'}>
              <VStack>
                <HStack w={400}>
                  <Select
                    w={'50%'}
                    placeholder=" الزبون"
                    onChange={e => setcustomernumber(e.target.value)}
                  >
                    <option value="option1">المخالصة</option>
                    <option value="option2">قسط</option>
                    <option value="option3">أخرى</option>
                  </Select>

                  <Select
                    w={'50%'}
                    placeholder=" العملية"
                    onChange={e => setoperationnumber(e.target.value)}
                  >
                     <option value="option1">المخالصة</option>
                    <option value="option2">قسط</option>
                    <option value="option3">أخرى</option>
                  </Select>
                </HStack>
                <Flex w={400}>
                  <Spacer />
                  <Input
                    onChange={e => setbalance(e.target.value)}
                    placeholder="                المبلغ"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>
                <Flex w={400}>
                  <Spacer />
                  <Input
                    onChange={e => setcaisseuser(e.target.value)}
                    placeholder="                اسم أمين الصندوق"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>

                <Flex w={'100%'}>
                  <Spacer />
                  <IncomePaper />
                </Flex>
                <Box w={'100%'} bg={'white'} h={'30'}></Box>

                <Flex w={'100%'}>
                  <Spacer />
                  <IncomeCoin />
                </Flex>
                <Box w={'100%'} bg={'white'} h={'30'}></Box>
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
