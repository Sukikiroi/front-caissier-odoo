import React ,{useState}from 'react';
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
  HStack,
  Input,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux'
import { addcoins } from '../redux/slices'
const IncomeCoin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch()


  const [coinone, setcoinone] = useState(0)
const [cointwo, setcointwo] = useState(0)
const [cointree, setcointree] = useState(0)
const [coinfour, setcoinfour] = useState(0)
const [coinfive, setcoinfive] = useState(0)
const [coinsix, setcoinsix] = useState(0)  



return (
    <>
      <Button onClick={onOpen} ml={60} bg={'#2C9BC8'} color={'white'}>
         معدنية
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>عملة معدنية </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Input placeholder="5" onChange={(e)=>setcoinone(e.target.value)}/>

              <Input placeholder="10"onChange={(e)=>setcointwo(e.target.value)} />
              <Input placeholder="20"  onChange={(e)=>setcointree(e.target.value)}/>
              <Input placeholder="50" onChange={(e)=>setcoinfour(e.target.value)} />
              <Input placeholder="100"  onChange={(e)=>setcoinfive(e.target.value)}/>
              <Input placeholder="200"  onChange={(e)=>setcoinsix(e.target.value)}/>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={()=>dispatch(addcoins({coinone,cointwo,cointree,coinfour,coinfive,coinsix}))}
            >
              حفظ
            </Button>
            <Button variant="ghost">الغاء </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IncomeCoin;
