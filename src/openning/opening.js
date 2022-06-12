import React from 'react';
import OpenningModal from './openningModal';
import OpenningTable from './openningTable';
import Navbar from '../navbar';
import { Box, Button, Image } from '@chakra-ui/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
const Openning = () => {
  const opencaisse = () => {
    localStorage.setItem('openning', '1');
    console.log(typeof localStorage.getItem('openning'))
  };
  const closecaisse = () => {
    localStorage.setItem('openning', '0');

    console.log(typeof localStorage.getItem('openning'))
  };
  return (
    <Box w={'100%'} h={500} bg="white" p={30} align={'right'} display="block">
      {(localStorage.getItem('openning')!=='1') ? 
      <>
        <Button onClick={opencaisse}>الافتتاح</Button>
        <br></br>
      </>
      
       : 
       <>
        <Button onClick={closecaisse}>الغلق</Button>
        <br></br>
       </>

       
      }

      {(localStorage.getItem('openning')=='0') ?
      <>
   
       <br></br>
        <Alert
        status="warning"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
الصندوق مغلق
        </AlertTitle>
        <AlertDescription maxWidth="sm"></AlertDescription>
      </Alert>
      </>
      : 
      <>
    <br></br>
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            لقد تم الافتتاح
          </AlertTitle>
          <AlertDescription maxWidth="sm"></AlertDescription>
        </Alert>
        </>
      }
    </Box>
  );
};

export default Openning;
