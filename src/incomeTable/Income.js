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
 
 import Pagination from "./pagination"
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { updateData, updateincomeData } from '../redux/slices';
import IncomeTablefilter from './incomeTablefilter';
import { FaHome } from 'react-icons/fa';
import {BiRefresh} from 'react-icons/bi'
import Printmodal from '../print/Printmodal';


import { Select } from '@chakra-ui/react'

import {useDatePicker} from '@react-aria/datepicker'
 
import { DateRangePicker } from "../datelib/DateRangePicker";
import { DatePicker } from "../datelib/DatePicker";
import { today, now, getLocalTimeZone } from "@internationalized/date";
import { OverlayContainer , OverlayProvider} from "@react-aria/overlays";
import BasicPagination from './pagination';
 
const Income = () => {
  const incomerealData = useSelector(state => state.settings.incomerealData);
  const resultData = useSelector(state => state.settings.resultData);
  
  const incomeFilteredData = useSelector(state => state.settings.incomeFilteredData);
  const searchactivate = useSelector(state => state.settings.searchactivate);
  const pageSize = useSelector(state => state.settings.pageSize);
  const dispatch = useDispatch();

  const [dataincome, setdataincome] = React.useState([]);
console.log(JSON.parse(localStorage.getItem("log")).company)
  useEffect(() => {
    const username=JSON.parse(localStorage.getItem('log')).username
    const password=JSON.parse(localStorage.getItem('log')).password
    const company_id= JSON.parse(localStorage.getItem('company_id'))
    const user={username:username,password:password,company_id:company_id}
    axios.post(`http://localhost:3004/income`,user).then(res => {
      setdataincome(res.data);

      dispatch(updateincomeData(res.data.reverse()));
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
 const changecompany=(company_id)=>{ 
console.log(company_id)
localStorage.setItem("company_id",company_id)

if(company_id==1)localStorage.setItem('company',"MMG")
if(company_id==2)localStorage.setItem('company',"IFri")
if(company_id==3)localStorage.setItem('company',"EL Bouni")
 }
  return (
    <>
      <Box bg="white" h={'100%'} p={4} color="white">
        <VStack>
          <Flex
            w={'100%'}
            h={50}
            color={'#2C9BC8'}
            pr={30}
            justifyContent={'flex-start'}
          >
            <Center w={'100%'} h={50}>
              <Heading> المداخيل</Heading>
            </Center>
          </Flex>

          <Box w={'100%'} h={500} mb={100}>
            <VStack>
              <Flex w={'100%'} mt={30} justifyContent={'flex-start'}>
                <HStack>
                  <Spacer />

                  <ChakraProvider>
                    <IncomeFilter />
                  </ChakraProvider>

                  <NewIncome />

                  {localStorage.getItem('role') == 1 ? (
                    <Flex alignItems={'center'} w={400} justifyContent="space-between">
                      <Button   color="white"  pr={30} rounded="md" bg="blue.100" align={"center"}>
                       
                        {localStorage.getItem('company')}{' '}
                      </Button>
                      <Select pr={30}
                        color="black"
                        placeholder="  الشركة  "
                        onChange={e => changecompany(e.target.value)}
                      >
                        <option value="1">MMG </option>
                        <option value="2">IFri</option>
                        <option value="3">EL Bouni</option>
                      </Select>
                    </Flex>
                  ) : (
                    <Text color="black">
                      {' '}
                      {localStorage.getItem('company')}{' '}
                    </Text>
                  )}
                </HStack>
              </Flex>
              <Box bg={'white'} w={'100%'}>
                {searchactivate ? (
                  <IncomeTablefilter data={incomeFilteredData} />
                ) : (
                  <IncomeTable data={incomerealData} />
                )}
              </Box>
              <Flex
                w={'100%'}
                h={400}
                alignItems="center"
                justifyContent={'center'}
              >
               
              </Flex>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Income;