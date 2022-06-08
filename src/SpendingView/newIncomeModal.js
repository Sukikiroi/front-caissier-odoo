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
const NewIncomeModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const format = (val) => `$` + val
    const parse = (val) => val.replace(/^\$/, '')
  
    const [value, setValue] = React.useState('1.53')


  return (
    <>

      <Button
        onClick={onOpen}
        colorScheme="green"
        variant="solid"      >
            +
       دخل جديد
      </Button>
      <div style={{width:'600px'}}>
      <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>دخل جديد</ModalHeader>
          <ModalCloseButton />
          <ModalBody  >
          <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='10' >
  <Input focusBorderColor='lime' placeholder=' رقم العميل'  _placeholder={{ opacity: 1, color: 'gray.900' }}/>
  </GridItem>
 

  <GridItem w='100%' h='10' >
  <Input focusBorderColor='lime' placeholder='Hرقم العملية'  _placeholder={{ opacity: 1, color: 'gray.900' }}/>
  </GridItem>


  <GridItem w='100%' h='10' >
  <Input focusBorderColor='lime' placeholder='المدخول المحسوب'  _placeholder={{ opacity: 1, color: 'gray.900' }}/>
  </GridItem>


</Grid>

<Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='10' >
  <Input focusBorderColor='lime' placeholder='صنف 2000 دج' _placeholder={{ opacity: 1, color: 'gray.900' }} />
  </GridItem>
 

  <GridItem w='100%' h='10' >
  <Input focusBorderColor='lime' placeholder='صنف 1000 دج '  _placeholder={{ opacity: 1, color: 'gray.900' }}/>
  </GridItem>


  <GridItem w='100%' h='10' >
  <Input focusBorderColor='lime' placeholder='صنف 500 دج '   _placeholder={{ opacity: 1, color: 'gray.900' }} />
  </GridItem>

  <GridItem w='100%' h='10' >
  <Input focusBorderColor='lime' placeholder='صنف 200 دج' _placeholder={{ opacity: 1, color: 'gray.900' }} />
  </GridItem>


</Grid>
         
<Box bg={"green.100"}  w='100%' mt={10} p={4} color='gray.900' _placeholder={{ opacity: 1, color: 'gray.900' }}>
 الأوراق الغير القابلة للتداول
 <Spacer/>
 <div style={{width:'100%',display:'flex',justifyContent:'flex-end',backgroundColor:"transparent"}}>

 <Button
        onClick={onOpen}
        colorScheme="green"
        variant="solid"      >
            +
       ورقة جديدة
      </Button>
      </div>
</Box>

<Box bg={"green.100"} w='100%' mt={10} p={4} color='gray.900' _placeholder={{ opacity: 1, color: 'gray.900' }}>
    الأوراق المزورة
    <Spacer/>
    <div style={{width:'100%',display:'flex',justifyContent:'flex-end',backgroundColor:"transparent"}}>

 <Button
        onClick={onOpen}
        colorScheme="green"
        variant="solid"      >
            +
       ورقة جديدة
      </Button>
      </div>
</Box>
          </ModalBody>














          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              الغاء
            </Button>
            <Button variant='ghost'> حفظ</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    </>
  )
}

export default NewIncomeModal