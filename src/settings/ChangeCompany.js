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
import { useDispatch } from 'react-redux'
import { changecompany } from '../redux/slices'
import {BsBuilding} from "react-icons/bs"
const ChangeCompany = () => {
const dispatch=useDispatch()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const changeCompany=(company)=>{
      if(company=='1'){
      dispatch(changecompany("افري"))
        localStorage.setItem('company',JSON.stringify({companyid:company,companyname:"افري"}))}
     if (company=='2'){
      dispatch(changecompany("جملة")) 
      localStorage.setItem('company',JSON.stringify({companyid:company,companyname:"جملة"}))}
     if (company=='3'){
      dispatch(changecompany("تجزئة"))
      localStorage.setItem('company',JSON.stringify({companyid:company,companyname:"تجزئة"}))}
    }
  return (
    <>
    <Button onClick={onOpen} leftIcon={<BsBuilding/>}> تغيير الشركة</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader align={'left'}> تغيير الشركة</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Select placeholder='تغيير الشركة ' onChange={(e)=>changeCompany(e.target.value)}>
  <option value='1'> افري</option>
  <option value='2'>جملة</option>
  <option value='3'>تجزئة</option>
</Select>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            الغاء
          </Button>
          <Button variant='ghost' onClick={onClose}>حفظ</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default ChangeCompany