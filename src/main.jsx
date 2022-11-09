import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from "../src/theme"
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
     <App />
  </ChakraProvider>
    
  
)
