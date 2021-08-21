import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UiProvider } from './contexts/ui-context';
import Layout from './layouts/layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UiProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </UiProvider>
    </ChakraProvider>
  );
}

export default App;
