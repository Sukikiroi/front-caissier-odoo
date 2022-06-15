import React from 'react';


import { Button, ButtonGroup, ChakraProvider ,Center} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Closing from './closing/closing';
import Income from './incomeTable/Income';
import Spending from './SpendingView/Spending';
import Openning from './openning/opening';
import Reporting from './reporting/reporting';
import Home from './home/home';
import Login from './login/login';
import Template from './print/Template';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/changa/700.css';

import theme from './theme';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { PDFViewer } from '@react-pdf/renderer';
import Settings from './settings/Settings';
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
          <Route path="/" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/print"
            element={
              <Center w={'100%'}>
                <PDFViewer style={{ width: '900px', height: '600px' }}>
                  <Template />
                </PDFViewer>
              </Center>
            }
          />
        </Routes>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
