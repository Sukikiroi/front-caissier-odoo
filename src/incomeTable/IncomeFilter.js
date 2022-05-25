import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react';
import Fuse from 'fuse.js';
import { useSelector, useDispatch } from 'react-redux';
import { updateData, actiavtesearch,deactiavtesearch } from '../redux/slices';
import axios from 'axios'







const IncomeFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const incomedata = useSelector(state => state.settings.resultData);
  const dispatch = useDispatch();
  const [datefilter, setdatefilter] = useState('');
  const [customernumber, setcustomernumber] = useState(0);
  const [operationnumber, setoperationnumber] = useState('');
  const [time, settime] = useState('');
  const dofilter = () => {
    

    // 3. Now search!
    if (datefilter !== '') {
      const fuse = new Fuse(incomedata, {
        keys: ['date'],
        useExtendedSearch: true,
      });
      dispatch(updateData(fuse.search('=' + datefilter)));
    }
   else if (customernumber !== 0) {
    const fuse = new Fuse(incomedata, {
      keys: ['client_code'],
      useExtendedSearch: true,
    });
    
      dispatch(updateData(fuse.search('=' + customernumber)));
    }
    dispatch(actiavtesearch());
  };


  const clearfilter =()=>{
    axios.get(`http://localhost:3004/income`)
    .then(res => {
      dispatch(updateData(res.data));
      dispatch(deactiavtesearch());
    })

  }
  return (
    <>
      <Button ref={btnRef} onClick={onOpen} bg={'#2C9BC8'}>
        فيلتر
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>القيام ببعض التصفية</DrawerHeader>

          <DrawerBody>
            <Input
              placeholder="رقم الزبون"
              mb={30}
              onChange={e => setcustomernumber(e.target.value)}
            />
            <Input placeholder="عميل الصندوق" mb={30} />
            <Input
              placeholder=" التاريخ"
              mb={30}
              onChange={e => setdatefilter(e.target.value)}
            />
            <Input
              placeholder=" الساعة"
              mb={30}
              onChange={e => settime(e.target.value)}
            />
            <Input
              placeholder="Type here..."
              mb={30}
              onChange={e => setoperationnumber(e.target.value)}
            />
            <Input placeholder="Type here..." mb={30} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              الغاء
            </Button>
            <Button colorScheme="blue" onClick={clearfilter} mr={3} >
            مسح
            </Button>
            <Button colorScheme="blue" onClick={dofilter}>
              فيلتر
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default IncomeFilter;
