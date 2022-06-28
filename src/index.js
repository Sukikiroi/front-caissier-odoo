import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

 


import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import theme from './theme'
import Sidebar from './Sidebar'
const queryClient = new QueryClient()
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    
  

   
      <App />
   
    
    </BrowserRouter>

  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
