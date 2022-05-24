import React from 'react';
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
import IncomePaper from './IncomePaper';
import IncomeCoin from './IncomeCoin';
import { useToast } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
const NewIncome = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const dispatch = useDispatch()

  return (
    <>
      <Button onClick={onOpen} bg={'#2C9BC8'}>
        جديد
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>جديد </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w={400} h={300} bg={'white'}>
              <VStack>
                <HStack>
                  <Input
                    placeholder="رقم الزبون"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                  <Input
                    placeholder="رقم العملية"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </HStack>
                <Flex w={400}>
                  <Spacer />
                  <Input
                    placeholder="                الرصيد"
                    _placeholder={{ opacity: 1, color: 'black' }}
                  />
                </Flex>
                <Flex w={400}>
                  <Spacer />
                  <Input
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
              onClick={() =>
                toast({
                  title: 'Account created.',
                  description: "We've created your account for you.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
              }
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
