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
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import useSWR from 'swr';
import IncomeTable from './incomeTable';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import NewIncomeModal from './newIncomeModal';
import Navbar from '../navbar';
import Drawernavbar from './drawerNavbar';
import IncomeFilter from './IncomeFilter';
import NewIncome from './NewIncome';
import Fuse from 'fuse.js';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { updateData } from '../redux/slices';
import IncomeTablefilter from './incomeTablefilter';
import { FaHome } from 'react-icons/fa';
import {BiRefresh} from 'react-icons/bi'
import Printmodal from '../print/Printmodal';


const Income = () => {
  const resultData = useSelector(state => state.settings.resultData);
  const searchactivate = useSelector(state => state.settings.searchactivate);
  const dispatch = useDispatch();

  const [dataincome, setdataincome] = React.useState([]);

  useEffect(() => {
    const username=JSON.parse(localStorage.getItem('log')).username
    const password=JSON.parse(localStorage.getItem('log')).password
    const user={username:username,password:password}
    axios.post(`http://localhost:3004/income`,user).then(res => {
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

    const reloaddata=()=>{
      const user={username:"",password:"lll"}
      axios.post(`http://localhost:3004/income`,user).then(res => {
    
  console.log('reloadme')
  console.log(res.data.reverse())
        dispatch(updateData(res.data));
      });
    }
  return (
    <>
      <Box bg="white" h={'100%'} p={4} color="white">
        <VStack>
          <Flex w={'100%'} h={50}   color={'#2C9BC8'} pr={30} justifyContent={"flex-start"}>
            <Center w={'100%'} h={50}>
            <Heading>المداخيل</Heading>

             

            
            </Center>
          </Flex>

          <Box w={'100%'} h={500}>
            <VStack>
              <Flex w={'100%'} mt={30}   justifyContent={"flex-start"}>
                <HStack>
               
                  <Spacer />
                

                 
                  <IncomeFilter />

                  <NewIncome />
                </HStack>
              </Flex>
              <Box bg={'white'} w={'100%'}>
                {searchactivate ? (
                  <IncomeTablefilter data={resultData} />
                ) : (
                  <IncomeTable data={resultData} />
                )}
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Income;