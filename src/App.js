import React from 'react';

import {
  Button,
  ButtonGroup,
  ChakraProvider,
  Center,
  Box,
} from '@chakra-ui/react';
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

import { store } from './redux/store';
import { Provider } from 'react-redux';

import { PDFViewer } from '@react-pdf/renderer';
import Settings from './settings/Settings';
import Sidebar from './Sidebar';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Routes>
          <Route
            path="/income"
            element={
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '',
                  display: 'flex',
                }}
              >
                  <Sidebar />
                <div style={{ flexGrow: '1', backgroundColor: 'white' }}>
                  <Income />
                </div>
              
              </div>
            }
          />
          <Route path="/closing" element={ 
        
        <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '',
          display: 'flex',
        }}
      >
            <Sidebar />
        <div style={{ flexGrow: '1', backgroundColor: 'white' }}>
          <Closing />
        </div>
    
      </div>
        
        } />
          <Route path="/spending" element={ 
           <div
           style={{
             width: '100%',
             height: '100%',
             backgroundColor: '',
             display: 'flex',
           }}
         >
             <Sidebar />
           <div style={{ flexGrow: '1', backgroundColor: 'white' }}>
             <Spending />
           </div>
         
         </div>
        
        
        } />
          <Route path="/openning" element={ 
           <div
           style={{
             width: '100%',
             height: '100%',
             backgroundColor: '',
             display: 'flex',
           }}
         >
                <Sidebar />
           <div style={{ flexGrow: '1', backgroundColor: 'white' }}>
             <Openning />
           </div>
      
         </div>
        
        
        
        
        
        
        
        
        
        } />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={
              <Box w={'100%'} h={'1400px'} bg="white">
                <Login />
              </Box>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/settings" element={
          
          
          <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '',
            display: 'flex',
          }}
        >
            <Sidebar />
          <div style={{ flexGrow: '1', backgroundColor: 'white' }}>
          <Settings />
          </div>
        
        </div>
          
          
          
          
       
          
          
          
          } />
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
