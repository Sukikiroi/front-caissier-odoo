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
import SelectSearch from 'react-select'
import axios from 'axios';
import { updateData } from '../redux/slices';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


import supabase from '../supabase.config';
const NewIncome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();
  const [customernumber, setcustomernumber] = useState(0);
  const [operationnumber, setoperationnumber] = useState(0);
  const [desable, setdesable] = useState(false);
  const [balance, setbalance] = useState(0);
  const [caisseuser, setcaisseuser] = useState('');
 
const [paperone, setpaperone] = useState(0)
const [papertwo, setpapertwo] = useState(0)
const [papertree, setpapertree] = useState(0)
const [paperfour, setpaperfour] = useState(0)
const [coinone, setcoinone] = useState(0)
const [cointwo, setcointwo] = useState(0)
const [cointree, setcointree] = useState(0)
const [coinfour, setcoinfour] = useState(0)
const [coinfive, setcoinfive] = useState(0)
 const [customers, setcustomers] = useState([])

 var sold=0;
 sold= paperone*200+papertwo*500+papertree*1000+paperfour*2000+coinone*10+cointwo*20+cointree*50+coinfour*100+coinfive*200
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
     
  };

  const sendIncome = () => {
    console.log(newIncome);
    axios
      .post(`http://localhost:3004/income/newincome`, newIncome)
      .then(res => {
        setdesable(true);
        axios.get(`http://localhost:3004/income`).then(res => {
          dispatch(updateData(res.data));
        });
        onClose()
      });

    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    setdesable(true);

    setTimeout(() => {
      setdesable(false);
    }, "1000")
  };
   
  
  const closeme = () => {
    axios.get(`http://localhost:3004/income`).then(res => {
      dispatch(updateData(res.data.reverse()));
    });
    setdesable(false);
    onClose();
  };
const getcustomer=async()=>{
  const { data, error } = await supabase
  .from('customers')
  .select()
  console.log(data)

 
}
getcustomer()


const options = [
  { value: 'chocolate', label: 'محمد' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
  return (
    <>
      <Button onClick={onOpen} bg={'#2C9BC8'} align="right">
        <Box align="left" width={'100%'}>
          جديد
        </Box>
      </Button>
      <Modal isOpen={isOpen} onClose={closeme} size="4xl" height={700}>
        <ModalOverlay />
        <ModalContent>
          <br></br>
          <ModalHeader align="left">
            <Box align="right" width={'100%'}>
              جديد
            </Box>{' '}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={'100%'} h={300} bg={'white'}>
              <VStack>
                <HStack w={'100%'}>
                 
                  {operationnumber!=="3" ? (
                    <Box w={'50%'}>
                      <SelectSearch
                        isRtl={true}
                        placeholder="الزبون"
                        styles={{ width: '100%' }}
                        options={options}
                      />
                    </Box>
                  ) : (
                    ''
                  )}

                  <Select
                    w={'50%'}
                    placeholder=" العملية"
                    onChange={e => setoperationnumber(e.target.value)}
                  >
                    <option value="1">المخالصة</option>
                    <option value="2">قسط</option>
                    <option value="3">أخرى</option>
                  </Select>
                </HStack>
                <Flex w={'100%'}>
                  <Spacer />
                  <Input
                    onChange={e => setbalance(e.target.value)}
                    placeholder=" 
                                   المبلغ"
                                   value={sold}
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>
                <Flex w={'100%'}>
                  <Spacer />
                  <Input
                    onChange={e => setcaisseuser(e.target.value)}
                    placeholder="                اسم أمين الصندوق"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>
              </VStack>

              <Box w="100%" h={150} bg="white" mt={10}>
              <Tabs direction="rtl" >
  <TabList>
    <Tab>ورق </Tab>
    <Tab>معدن </Tab>
   </TabList>

  <TabPanels>
    <TabPanel>
     <Flex>
     <Input placeholder='200 دج' onChange={e => setpaperone(e.target.value)}/>
     <Input placeholder='500 دج 'onChange={e => setpapertwo(e.target.value)} />
     <Input placeholder='1000 دج 'onChange={e => setpapertree(e.target.value)} />
     <Input placeholder='2000 دج 'onChange={e => setpaperfour(e.target.value)} />
        </Flex>
    </TabPanel>
    <TabPanel>
      <Flex>
      <Input placeholder=' 10 دج'onChange={e => setcoinone(e.target.value)} />
    <Input placeholder=' 20 دج'onChange={e => setcointwo(e.target.value)} />
    <Input placeholder='50 دج ' onChange={e => setcointree(e.target.value)}/>
    <Input placeholder=' 100 دج ' onChange={e => setcoinfour(e.target.value)}/>
    <Input placeholder='200 دج'onChange={e => setcoinfive(e.target.value)} />

        </Flex>
   


    </TabPanel>
    
  </TabPanels>
</Tabs>

 
              </Box>
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
