import { Box, Button, Flex } from '@chakra-ui/react';
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
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { AddIcon, PhoneIcon } from '@chakra-ui/icons';
import supabase from '../supabase.config';

const Customer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [address, setaddress] = useState('');
  const [phone, setphone] = useState('');
  const [number, setnumber] = useState('');

  const insertcustomer = async () => {
    const { data, error } = await supabase
      .from('customers')
      .insert([
        {
          first_name: first_name,
          last_name: last_name,
          address: address,
          phone: phone,
          number: number,
        },
      ]);
    console.log(error);
  };
  return (
    <>
    
      <Button  onClick={onOpen}   bg={'#2C9BC8'} color="white" leftIcon={<AddIcon/>} variant='solid'>
    زبون جديد
  </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> زبون </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={'100%'} h={500} bg="white" display={'block'}>
              <Flex w={'100%'} mb={10} justifyContent="space-between">
                <Input
                  onChange={e => setfirst_name(e.target.value)}
                  placeholder="الاسم"
                  w="45%"
                  h={'55px'}
                  _placeholder={{
                    color: 'black',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                />
                <Input
                  onChange={e => setlast_name(e.target.value)}
                  placeholder="اللقب "
                  w="45%"
                  h={'55px'}
                  _placeholder={{
                    color: 'black',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                />
              </Flex>

              <Flex w={'100%'} mb={10} justifyContent="space-between">
                <InputGroup w="45%" size="lg">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="blue.300" />}
                  />
                  <Input
                    onChange={e => setphone(e.target.value)}
                    type="tel"
                    placeholder="الهاتف  "
                    _placeholder={{
                      color: 'black',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  />
                </InputGroup>
                <Input
                  onChange={e => setnumber(e.target.value)}
                  placeholder=" رقم الزبون  "
                  w="45%"
                  h={'55px'}
                  _placeholder={{
                    color: 'black',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                />
              </Flex>

              <Input
                onChange={e => setaddress(e.target.value)}
                placeholder="العنوان"
                h={'65px'}
                _placeholder={{
                  color: 'black',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              الغاء
            </Button>
            <Button variant="ghost" onClick={insertcustomer}>
              حفظ{' '}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Customer;
