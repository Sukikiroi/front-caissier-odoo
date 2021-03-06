import React, { useState, useEffect } from 'react';
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
import SelectSearch from 'react-select';
import axios from 'axios';
import { updateData, updateincomeData } from '../redux/slices';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import NewCustomer from './NewCustomer';
import supabase from '../supabase.config';
import { AddIcon } from '@chakra-ui/icons';
const NewIncome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();
 
  const [customernumber, setcustomernumber] = useState(0);
  const [operationnumber, setoperationnumber] = useState(0);
  const [desable, setdesable] = useState(false);
  const [balance, setbalance] = useState(0);
  const [caisseuser, setcaisseuser] = useState('');

  const [paperone, setpaperone] = useState(0);
  const [papertwo, setpapertwo] = useState(0);
  const [papertree, setpapertree] = useState(0);
  const [paperfour, setpaperfour] = useState(0);
  const [coinone, setcoinone] = useState(0);
  const [cointwo, setcointwo] = useState(0);
  const [cointree, setcointree] = useState(0);
  const [coinfour, setcoinfour] = useState(0);
  const [coinfive, setcoinfive] = useState(0);
  const [customers, setcustomers] = useState([]);

  var sold = 0;
  sold =
    paperone * 200 +
    papertwo * 500 +
    papertree * 1000 +
    paperfour * 2000 +
    coinone * 10 +
    cointwo * 20 +
    cointree * 50 +
    coinfour * 100 +
    coinfive * 200;
  const newIncome = {
    customer: customernumber,
    operation: operationnumber,
    balance: sold,
    caisseuser: caisseuser,
    paperone: Number(paperone),
    papertwo: Number(papertwo),
    papertree: Number(papertree),
    paperfour:Number(paperfour),
    coinone: Number(coinone),
    cointwo: Number(cointwo),
    cointree: Number(cointree),
    coinfour: Number(coinfour),
    coinfive: Number(coinfive),
    company_id: JSON.parse(localStorage.getItem('company_id')),
  };

  const sendIncome = () => {
    console.log(newIncome);

    axios
      .post(`http://localhost:3004/income/newincome`, newIncome)
      .then(res => {
        setdesable(true);
        const username=JSON.parse(localStorage.getItem('log')).username
        const password=JSON.parse(localStorage.getItem('log')).password
        const company_id= JSON.parse(localStorage.getItem('company_id'))
        const user={username:username,password:password,company_id:company_id}
        axios.post(`http://localhost:3004/income`,user).then(res => {
          dispatch(updateincomeData(res.data));
        });
        onClose();
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
    }, '1000');
  };

  const closeme = () => {
    axios.get(`http://localhost:3004/income`).then(res => {
      dispatch(updateData(res.data.reverse()));
    });
    setdesable(false);
    onClose();
  };
 
  let customerdata = [
    { label: 'aziz', number: '12',address:"annaba" },
    { label: 'Burhan', number: '12',address:"annaba" },
    { label: 'Ifri', number: '12',address:"annaba" },
  ];

 
  useEffect(() => {
  
    const getcustomers = async () => {
      const { data, error } = await supabase.from('customers').select();
     setcustomers(data)  
     console.log(data)
      
    };
    getcustomers()
    
    
     
   
  }, []);

 
  return (
    <>
      <Button onClick={onOpen} bg={'#2C9BC8'} align="right">
        <Box align="left" width={'100%'}>
          ????????
        </Box>
      </Button>
      <Modal isOpen={isOpen} onClose={closeme} size="4xl" height={700}>
        <ModalOverlay />
        <ModalContent>
          <br></br>
          <ModalHeader align="left">
            <Box align="right" mr={30} width={'100%'}>
              ????????
            </Box>{' '}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={'100%'} h={300} bg={'white'}>
              <VStack>
                <HStack w={'100%'}>
                  <NewCustomer />
                  {operationnumber !== '3' ? (
                    <Box w={'40%'}>
                      <SelectSearch
                        isRtl={true}
                        placeholder="?????? ????????????"
                        styles={{ width: '100%' }}
                        options={customerdata}
                      />
                    </Box>
                  ) : (
                    ''
                  )}

                  <Select
                   mr={50}
                    w={'45%'}
                   
                    placeholder="                 ??????????????        "
                    onChange={e => setoperationnumber(e.target.value)}
                  >
                    <option value="    ????????????           ">????????????????</option>
                    <option value="02????">??????</option>
                    <option value="03????">????????</option>
                  </Select>
                </HStack>
                <Flex w={'100%'}>
                  <Spacer />
                  <Input
                    onChange={e => setbalance(e.target.value)}
                    placeholder=" 
                                   ????????????"
                    value={sold}
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>
                <Flex w={'100%'}>
                  <Spacer />
                  <Input
                    onChange={e => setcaisseuser(e.target.value)}
                    placeholder="                ?????? ???????? ??????????????"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>
              </VStack>

              <Box w="100%" h={150} bg="white" mt={10}>
                <Tabs direction="rtl">
                  <TabList>
                    <Tab>?????? </Tab>
                    <Tab>???????? </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Flex>
                      <Input
                          placeholder="2000 ???? "
                          onChange={e => setpaperfour(e.target.value)}
                        />
                           <Input
                          placeholder="1000 ???? "
                          onChange={e => setpapertree(e.target.value)}
                        />
                          <Input
                          placeholder="500 ???? "
                          onChange={e => setpapertwo(e.target.value)}
                        />
                        <Input
                          placeholder="200 ????"
                          onChange={e => setpaperone(e.target.value)}
                        />
                      
                     
                      
                      </Flex>
                    </TabPanel>
                    <TabPanel>
                      <Flex>
                      <Input
                          placeholder="200 ????"
                          onChange={e => setcoinfive(e.target.value)}
                        />
                         <Input
                          placeholder=" 100 ???? "
                          onChange={e => setcoinfour(e.target.value)}
                        />
                          <Input
                          placeholder="50 ???? "
                          onChange={e => setcointree(e.target.value)}
                        />
                          <Input
                          placeholder=" 20 ????"
                          onChange={e => setcointwo(e.target.value)}
                        />
                        <Input
                          placeholder=" 10 ????"
                          onChange={e => setcoinone(e.target.value)}
                        />
                      
                      
                       
                      
                      </Flex>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" bg={'red.300'} color={'white'} mr={3}>
              ??????????
            </Button>

            <Button
              bg={'green.200'}
              color={'white'}
              mr={3}
              onClick={sendIncome}
              isDisabled={desable}
            >
              ??????
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewIncome;
