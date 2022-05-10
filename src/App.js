import React from 'react';
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
} from '@chakra-ui/react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'


import { Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import useSWR from 'swr';
import IncomeTable from './incomeTable/incomeTable';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Routes ,Route } from 'react-router-dom';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'

import Closing from "./closing/closing"
import Navbar from "./navbar"
import Income from './incomeTable/Income';
import Spending from './spending/spending'
import Openning from './openning/opening'
import Reporting from './reporting/reporting'
ChartJS.register(...registerables);
function App() {


  
  return (
    <ChakraProvider theme={theme}>
        <Navbar/>       
      <Routes>
        <Route path="/income" element={<Income />} />
        <Route path="/closing" element={<Closing />} />
        <Route path="/spending" element={<Spending />} />
        <Route path="/openning" element={<Openning />} />
        <Route path="/reporting" element={<Reporting />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;







 


 
//  const Income = () => {
//   const fetcher = (...args) => fetch(...args).then(res => res.json());
//   const { data: total } = useSWR('http://localhost:3004/income', fetcher);
//   const [dataincome, setdataincome] = React.useState(total);

//   const { data: today } = useSWR('http://localhost:3004/income/today', fetcher);

//   const gettotalincome = () => {
//     setdataincome(total);
//   };

//   const gettodayincome = () => {
//     setdataincome(today.todayincome);
//     console.log(today);
//   };
//   if (!total || !today) return <div>loading...</div>;
//    return (
//     <Box bg="white" w="100%" p={4} color="white" flex="start">
//     <Flex>
//       <Box p="4">
//         <Tag> 30000 الرصيد العام</Tag>
//       </Box>
//       <Spacer />
//       <Box p="4">
//         <Tag>{today.todaBbalance} رصيد اليوم</Tag>
//       </Box>
//     </Flex>
//     <ColorModeSwitcher />
//     <Spacer />
//     <Button
//       onClick={() => gettotalincome()}
//       colorScheme="teal"
//       variant="outline"
//     >
//       المداخيل العامة
//     </Button>
//     <Button
//       onClick={() => gettodayincome()}
//       colorScheme="teal"
//       variant="outline"
//     >
//       مداخيل اليوم
//     </Button>
//     <IncomeTable data={dataincome} />
//   </Box>

//    )
//  }
 
 