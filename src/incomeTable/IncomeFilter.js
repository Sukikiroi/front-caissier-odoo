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
  Flex,
  Text,
} from '@chakra-ui/react';
import Fuse from 'fuse.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateData,
  actiavtesearch,
  deactiavtesearch,
  updateincomeFiltedData,
} from '../redux/slices';
import axios from 'axios';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
 

 
 
import { ChakraProvider, Box, Heading, Link } from '@chakra-ui/react';
import { ClearOutlined } from '@mui/icons-material';

const IncomeFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const incomerealData = useSelector(state => state.settings.incomerealData);
  const dispatch = useDispatch();
  const [datefilter, setdatefilter] = useState('');
  const [customernumber, setcustomernumber] = useState(0);
  const [operationnumber, setoperationnumber] = useState('');
  const [time, settime] = useState('');
  const [value, onChange] = useState([new Date(), new Date()]);
  const dofilter = () => {
    console.log(incomerealData);
    const fuse = new Fuse(incomerealData, {
      keys: ['date'],
      useExtendedSearch: true,
    });

    console.log( value);
    dispatch(
      updateincomeFiltedData(fuse.search({ $or: [{ date: "="+datefilter }] }))
    );
    dispatch(actiavtesearch());
  };

  const clearfilter = () => {
   
      dispatch(deactiavtesearch());
    
  };
  return (
    <>
      <Button ref={btnRef} onClick={onOpen} bg={'#2C9BC8'}>
        بحت{' '}
      </Button>
      <ChakraProvider>
        <Drawer
          size={'xl'}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader mr={20}>   البحت حسب</DrawerHeader>

            <DrawerBody>
            <Input
                placeholder=" التاريخ"
                mb={30}
                onChange={e => setdatefilter(e.target.value)}
              />
              <Input
                placeholder="رقم الزبون"
                mb={30}
                onChange={e => setcustomernumber(e.target.value)}
              />
              <Input placeholder=" أمين الصندوق" mb={30} />
          

<Input
                placeholder=" رمز العملية"
                mb={30}
                onChange={e => settime(e.target.value)}
              />
                <Input
                placeholder="  المبلغ"
                mb={30}
                onChange={e => settime(e.target.value)}
              />
            <Box w="100%" mb={10}>
              <Input
                placeholder=" الفترة"
                mb={30}
                onChange={e => setdatefilter(e.target.value)}
              />
              <DateRangePicker name="from to" onChange={onChange} value={value} style={{width:"100%",height:"50"}}  clearIcon={<ClearOutlined/>}/>
 

              </Box>



            

             
              
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                الغاء
              </Button>
              <Button colorScheme="blue" onClick={clearfilter} mr={3}>
                مسح
              </Button>
              <Button colorScheme="blue" onClick={dofilter} mr={3}>
                بحت
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ChakraProvider>
    </>
  );
};

export default IncomeFilter;
