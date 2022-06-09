import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import ChangeCompany from './ChangeCompany';

const Settings = () => {
  return (
    <Box w={'100%'} h={1000}   display={'block'} p={30}>
      <Box w={'100%'} h={200} align={'right'} pr={10}>
        <Button>المستخدمين</Button>
      </Box>
      <Box w={'100%'} h={200} align={'right'} pr={10}>
        <Button>الزبائن</Button>
      </Box>
      <Box align={'right'} w={'100%'} h={200} pr={10}>
        <ChangeCompany />
      </Box>
      <Box w={'100%'} h={200} align={'right'} pr={10}>
        <Button>Customer</Button>
      </Box>
      <Box w={'100%'} h={200} align={'right'} pr={10}>
        <Button>Customer</Button>
      </Box>
      <Box w={'100%'} h={200} align={'right'} pr={10}>
        <Button>Customer</Button>
      </Box>
    </Box>
  );
};

export default Settings;
