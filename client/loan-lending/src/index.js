import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import ChatProvider from './context/ChatProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChatProvider>
    <ChakraProvider>
    <BrowserRouter>
    
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </ChakraProvider>
  </ChatProvider>
  
);