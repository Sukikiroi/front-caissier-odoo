import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Tag,
    Button,
  } from '@chakra-ui/react'
const OpenningModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}> الافتتاح</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>الافتتاح على الرصيد اليومي</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Tag bg='green.100'>
                الرصيد   
  
                0,00
                </Tag>
           
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                افتتاح
              </Button>
              <Button variant='ghost' onClick={onClose}>إلغاء</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default OpenningModal