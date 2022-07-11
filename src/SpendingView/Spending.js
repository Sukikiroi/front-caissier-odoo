import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
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
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';

import IncomeFilter from './IncomeFilter';
import NewIncome from './NewIncome';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { updateData ,updatespendingData} from '../redux/slices';
import IncomeTablefilter from './incomeTablefilter';
import { FaHome } from 'react-icons/fa';
import { FcPrint } from 'react-icons/fc';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { BiRefresh } from 'react-icons/bi';

import Spendingtable from './Table';
import Printmodal from '../print/Printmodal';
import PdfTemplate from './PdfTemplate';
import Printingmodal from './Printingmodal';
import Tabel from "./Table"


import { Select } from '@chakra-ui/react'
const Income = () => {
   
  const spendingrealData = useSelector(state => state.settings.spendingrealData);

  const spendingFilteredData = useSelector(state => state.settings.spendingFilteredData);
  const searchactivate = useSelector(state => state.settings.searchactivate);
  const dispatch = useDispatch();

  const [dataincome, setdataincome] = React.useState([]);

  useEffect(() => {
    const username=JSON.parse(localStorage.getItem('log')).username
    const password=JSON.parse(localStorage.getItem('log')).password
    const company_id= JSON.parse(localStorage.getItem('company_id'))
    const user={username:username,password:password,company_id:company_id}
   
      axios.post(`http://localhost:3004/spending`,user).then(res => {
        setdataincome(res.data);
  
        dispatch(updatespendingData(res.data));
      });
  },[dispatch]);

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
      
      if(company_id==1)localStorage.setItem('company',"Sidi Harb")
      if(company_id==2)localStorage.setItem('company',"IFri")
      if(company_id==3)localStorage.setItem('company',"EL Bouni")
       }
  return (
    <>
      <Box bg="white" h={'100%'} p={4} color="white">
        <VStack>
          <Box w={'100%'} h={50} color={'#2C9BC8'} pr={30}>
            <Center w={'100%'} h={50}>
              <Link to="/home">
              <Heading>المصاريف</Heading>

           
              </Link>

              <Spacer />
           
              <Button
                rightIcon={<FaHome />}
                colorScheme="#2C9BC8"
                variant="outline"
              >
                قائمة
              </Button>
            </Center>
          </Box>

          <Box w={'100%'} h={500}>
            <VStack>
              <Box w={'100%'} mt={30} mb={100}>
                <HStack>
             

            
         

<Printingmodal  data={dataincome}/>
    
                  
                  <IncomeFilter />

                  <NewIncome />
                  { localStorage.getItem('role')==1 ? 
                     <Flex alignItems={"center"} w={400}>

                    
                     <Text w={150} color="black"> { localStorage.getItem('company')} </Text> 
                     <Select color="black" placeholder="Select Company" onChange={(e)=>changecompany(e.target.value)}>
                        <option value="1">Sidi Harb </option>
                        <option value="2">IFri</option>
                        <option value="3">EL Bouni</option>
                      </Select>
                      </Flex>
                      :
                     <Text color="black"> { localStorage.getItem('company')} </Text> 
                      }
                </HStack>
              </Box>
            
                {searchactivate ? (
                <IncomeTablefilter data={spendingFilteredData}/>
                ) : (
                  <Tabel data={spendingrealData} />
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
