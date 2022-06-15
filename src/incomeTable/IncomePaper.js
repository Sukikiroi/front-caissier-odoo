import React,{useState}from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Button, HStack,Input
  } from '@chakra-ui/react'
  import { useSelector, useDispatch } from 'react-redux'
  import { addpapers } from '../redux/slices'
const IncomePaper = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()

    const [paperone, setpaperone] = useState(0)
const [papertwo, setpapertwo] = useState(0)
const [papertree, setpapertree] = useState(0)
  return (
    <>
 
    <Button onClick={onOpen} ml={70} bg={'#2C9BC8'} color={'white'}>
                     ورقية
                  </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>عملة ورقية </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack>
          <Input placeholder='500' onChange={(e)=>setpaperone(e.target.value)}/>

          <Input placeholder='1000' onChange={(e)=>setpapertwo(e.target.value)}/>
          <Input placeholder='2000'onChange={(e)=>setpapertree(e.target.value)} />
        
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={()=>dispatch(addpapers({paperone,papertwo,papertree}))}>
          حفظ
          </Button>
          <Button variant='ghost'>الغاء  </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default IncomePaper