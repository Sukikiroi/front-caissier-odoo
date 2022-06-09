import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
  import { Select } from '@chakra-ui/react'
const ChangeCompany = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button onClick={onOpen}> تغيير الشركة</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader align={'left'}> تغيير الشركة</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Select placeholder='Select option'>
  <option value='option1'> افري</option>
  <option value='option2'>جملة</option>
  <option value='option3'>تجزئة</option>
</Select>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            الغاء
          </Button>
          <Button variant='ghost'>حفظ</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default ChangeCompany