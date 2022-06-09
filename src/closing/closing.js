import React from 'react';
import ClosingModal from './closingModal';
import ClosingTable from './closingTabel';
import Navbar from "../navbar"
import { Box ,Button} from '@chakra-ui/react';
const Closing = () => {
  return (
  
   <Box w={'100%'} h={500} bg='teal.200' p={30} align={'right'}>
<Button>CLose</Button>
   </Box>

  );
};

export default Closing;
