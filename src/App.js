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
} from '@chakra-ui/react';

import { Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import useSWR from 'swr';
import IncomeTable from './incomeTable/incomeTable';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';

import Closing from './closing/closing';
import Navbar from './navbar';
import Income from './incomeTable/Income';
import Spending from "./SpendingView/Spending"
import Openning from './openning/opening';
import Reporting from './reporting/reporting';
import Home from './home/home';
import Login from './login/login';



import { store } from './redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Routes>
          <Route path="/income" element={<Income />} />
          <Route path="/closing" element={<Closing />} />
          <Route path="/spending" element={<Spending />} />
          <Route path="/openning" element={<Openning />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </ChakraProvider>
  );
}

export default App;

 
