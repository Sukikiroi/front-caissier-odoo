import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure,Button,Input
  } from '@chakra-ui/react'
  import Fuse from 'fuse.js'
  import { useSelector, useDispatch } from 'react-redux'
import { updateData,actiavtesearch } from '../redux/slices'
const IncomeFilter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const incomedata = useSelector((state) => state.settings.resultData)
const dispatch=useDispatch()

console.log(incomedata)
    const dofilter=()=>{
      // 2. Set up the Fuse instance
const fuse = new Fuse(incomedata, {
  keys: ['date']
})

// 3. Now search!
dispatch(updateData(fuse.search('=2022-05-11')))
dispatch(actiavtesearch())
    }
  return (
    <>
  

    <Button   ref={btnRef} onClick={onOpen} bg={'#2C9BC8'}>
فيلتر 
      </Button>
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>القيام ببعض التصفية</DrawerHeader>

        <DrawerBody>
          <Input placeholder='رقم الزبون'  mb={30}/>
          <Input placeholder='عميل الصندوق'  mb={30}/>
          <Input placeholder=' التاريخ'  mb={30}/>
          <Input placeholder=' الساعة'  mb={30}/>
          <Input placeholder='Type here...'  mb={30}/>
          <Input placeholder='Type here...'  mb={30}/>
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            الغاء
          </Button>
          <Button colorScheme='blue' onClick={dofilter}>فيلتر</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default IncomeFilter