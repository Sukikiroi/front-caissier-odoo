import { Box, Button, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ChangeCompany from './ChangeCompany';
import { useSelector, useDispatch } from 'react-redux';
import { BsBuilding } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import Customer from './Customer';
import Users from './Users';
import Company from './Company';

const Settings = () => {
  const companyname = useSelector(state => state.settings.company);

  return (
    <Center w={'100%'} h={1000} p={30}>
      <Box w={500} h={500} display="flex" justifyContent="space-between">
        <Customer />
        <Users />
        <Company/>
      </Box>
    </Center>
  );
};

export default Settings;
