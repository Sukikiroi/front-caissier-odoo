import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Tag,
  Heading,
  Center,
  HStack,
} from '@chakra-ui/react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';

import { Button, ButtonGroup } from '@chakra-ui/react';

import IncomeFilter from './IncomeFilter';
import NewIncome from './NewIncome';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { updateData } from '../redux/slices';
import IncomeTablefilter from './incomeTablefilter';
import { FaHome } from 'react-icons/fa';
import { FcPrint } from 'react-icons/fc';

import { BiRefresh } from 'react-icons/bi';

import Spendingtable from './Table';
import Printmodal from '../print/Printmodal';
import PdfTemplate from './PdfTemplate';
import Printingmodal from './Printingmodal';

const Income = () => {
   
  const resultData = useSelector(state => state.settings.resultData);
  const searchactivate = useSelector(state => state.settings.searchactivate);
  const dispatch = useDispatch();

  const [dataincome, setdataincome] = React.useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3004/spending`).then(res => {
      setdataincome(res.data);

      dispatch(updateData(res.data.reverse()));
    });
  }, [dispatch]);

  if (!dataincome)
    return (
      <Box w={'100%'} h={600}>
        <Center w={'100%'} h={600}>
          Loading ...
        </Center>
      </Box>
    );

  const reloaddata = () => {
    axios.get(`http://localhost:3004/spending`).then(res => {
      console.log('reloadme');
      console.log(res.data.reverse());
      dispatch(updateData(res.data));
    });
  };
  return (
    <>
      <Box bg="white" h={'100%'} p={4} color="white">
        <VStack>
          <Box w={'100%'} h={50} color={'#2C9BC8'} pr={30}>
            <Center w={'100%'} h={50}>
              <Button
                rightIcon={<FaHome />}
                colorScheme="#2C9BC8"
                variant="outline"
              >
                قائمة
              </Button>

              <Spacer />
              <Heading>المصاريف</Heading>
            </Center>
          </Box>

          <Box w={'100%'} h={500}>
            <VStack>
              <Box w={'100%'} mt={30}>
                <HStack>
                  <Spacer />

            
         

<Printingmodal  data={dataincome}/>
    
                  
                  <IncomeFilter />

                  <NewIncome />
                </HStack>
              </Box>
            
                {searchactivate ? (
                  <IncomeTablefilter data={resultData} />
                ) : (
                  <Spendingtable data={resultData} />
                 // <Spendingtable />
                )}
           
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Income;
