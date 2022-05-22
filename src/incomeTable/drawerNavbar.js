import React from 'react';
import { Box } from '@chakra-ui/react';
import MenuDrawer from './menuDrawer';
const Drawernavbar = () => {
  return (
    <div>
      <Box bg="teal.50" w="100%" p={4} color="white" pl={"1600"} >
       
       <MenuDrawer/>
      </Box>
    </div>
  );
};

export default Drawernavbar;
