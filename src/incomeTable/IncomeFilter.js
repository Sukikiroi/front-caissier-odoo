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
import {
  updateData,
  actiavtesearch,
  deactiavtesearch,
  updateincomeFiltedData,
} from '../redux/slices';
import axios from 'axios';

import { useDatePicker } from '@react-aria/datepicker';

import { DateRangePicker } from '../datelib/DateRangePicker';
import { DatePicker } from '../datelib/DatePicker';
import { today, now, getLocalTimeZone } from '@internationalized/date';
import { OverlayContainer, OverlayProvider } from '@react-aria/overlays';
import { ChakraProvider, Box, Heading, Link } from '@chakra-ui/react';

const IncomeFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const incomerealData = useSelector(state => state.settings.incomerealData);
  const dispatch = useDispatch();
  const [datefilter, setdatefilter] = useState('');
  const [customernumber, setcustomernumber] = useState(0);
  const [operationnumber, setoperationnumber] = useState('');
  const [time, settime] = useState('');

  const dofilter = () => {
    console.log(incomerealData);
    const fuse = new Fuse(incomerealData, {
      keys: ['date'],
      useExtendedSearch: true,
    });

    console.log(fuse.search({ $or: [{ date: datefilter }] }));
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
              <Button colorScheme="blue" onClick={clearfilter} mr={3}>
                مسح
              </Button>
              <Button colorScheme="blue" onClick={dofilter}>
                فيلتر
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ChakraProvider>
    </>
  );
};

export default IncomeFilter;
