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
import { updatespendingData, actiavtesearch, deactiavtesearch, updatespedningFiltedData } from '../redux/slices';
import axios from 'axios';

const IncomeFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const spendingrealData = useSelector(
    state => state.settings.spendingrealData
  );
  const dispatch = useDispatch();
  const [datefilter, setdatefilter] = useState('');
  const [customernumber, setcustomernumber] = useState(0);
  const [operationnumber, setoperationnumber] = useState('');
  const [sold, setsold] = useState(0)
  const [time, settime] = useState('');
  const [door, setdoor] = useState('');
  const [entrance, setentrance] = useState('');
  const [section, setsection] = useState('');

  const dofilter = () => {
    // 3. Now search!
    const fuse = new Fuse(spendingrealData, {
      keys: ['door', 'date','entrance','section','sold'],
      useExtendedSearch: true,
    });

    console.log(entrance);
    //2022-06-02
    let resultat = fuse.search({
      $or: [{ sold:"<"+sold },{ door:"="+door }, { date:"="+datefilter }, { entrance:entrance }, { section:section }]
    });

    console.log(resultat);
   dispatch(updatespedningFiltedData(resultat))
  dispatch(actiavtesearch())
  onClose()
  };

  const clearfilter = () => {
    axios.get(`http://localhost:3004/spending`).then(res => {
      dispatch(updatespendingData(res.data));
      dispatch(deactiavtesearch());
    });
  };
  return (
    <>
      <Button ref={btnRef} onClick={onOpen} bg={'#2C9BC8'}>
        بحت
      </Button>
      <Drawer
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
              placeholder=" الباب"
              mb={30}
              onChange={e => setdoor(e.target.value)}
            />
            <Input
              placeholder=" القسم"
              mb={30}
              onChange={e => setsection(e.target.value)}
            />
            <Input
              placeholder=" المدخل"
              mb={30}
              onChange={e => setentrance(e.target.value)}
            />
            <Input
              placeholder="المبلغ"
              mb={30}
              onChange={e => setsold(e.target.value)}
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
    </>
  );
};

export default IncomeFilter;
