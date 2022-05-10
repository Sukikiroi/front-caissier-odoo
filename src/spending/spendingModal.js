import React from 'react'
import { Button, ButtonGroup, Spacer } from '@chakra-ui/react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'


  import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
  import { Box } from '@chakra-ui/react'
  import { Grid, GridItem } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'
  import { Select } from '@chakra-ui/react'
const SpendingModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, '')
  
    const [value, setValue] = React.useState('1.53')
const entry =['الراتب','الخدمات والأجرة']
const section =['الشركة',' المنزل' ,'الشريك', 'الاستتمار' ,' عيسى بلعابد' ,'الأسرة الكبيرة' , 'الميراث']
  return (
    <>
      <Button onClick={onOpen} colorScheme="green" variant="solid">
        + مصروف جديد
      </Button>
      <div style={{ width: '600px' }}>
        <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>مصروف جديد</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <GridItem w="100%" h="10">
                  <Select placeholder="  القسم">
                    {section.map((section ,key)=> (
                      <option key={key} value={section}>
                       {section}
                      </option>
                    ))}
                  </Select>
                </GridItem>

                <GridItem w="100%" h="10">
                  <Select placeholder="  المدخل">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </GridItem>

                <GridItem w="100%" h="10">
                  <Select placeholder="  الباب">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </GridItem>
              </Grid>

              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <GridItem w="100%" h="10">
                  <Input
                    focusBorderColor="lime"
                    placeholder= "المعني"
                    _placeholder={{ opacity: 1, color: 'gray.900' }}
                  />
                </GridItem>

                <GridItem w="100%" h="10">
                  <Input
                    focusBorderColor="lime"
                    placeholder="المكلف"
                    _placeholder={{ opacity: 1, color: 'gray.900' }}
                  />
                </GridItem>

                <GridItem w="100%" h="10">
                  <Input
                    focusBorderColor="lime"
                    placeholder="القيمة"
                    _placeholder={{ opacity: 1, color: 'gray.900' }}
                  />
                </GridItem>

                <GridItem w="100%" h="10">
                
                </GridItem>
              </Grid>

              {/* <Box
                bg={'green.100'}
                w="100%"
                mt={10}
                p={4}
                color="gray.900"
                _placeholder={{ opacity: 1, color: 'gray.900' }}
              >
                الأوراق الغير القابلة للتداول
                <Spacer />
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backgroundColor: 'transparent',
                  }}
                >
                  <Button onClick={onOpen} colorScheme="green" variant="solid">
                    + ورقة جديدة
                  </Button>
                </div>
              </Box>

              <Box
                bg={'green.100'}
                w="100%"
                mt={10}
                p={4}
                color="gray.900"
                _placeholder={{ opacity: 1, color: 'gray.900' }}
              >
                الأوراق المزورة
                <Spacer />
                <Button onClick={onOpen} colorScheme="green" variant="solid">
                  + ورقة جديدة
                </Button>
              </Box> */}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                الغاء
              </Button>
              <Button variant="ghost"> حفظ</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default SpendingModal