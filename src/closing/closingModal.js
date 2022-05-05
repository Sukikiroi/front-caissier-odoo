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
const ClosingModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}> الغلق</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>الغلق على الرصيد اليومي</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Tag bg='green.100'>
                الرصيد اليومي 
  
                313233
                </Tag>
           
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                غلق
              </Button>
              <Button variant='ghost' onClick={onClose}>إلغاء</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default ClosingModal