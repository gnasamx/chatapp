import { ChakraProvider, Divider, HStack, theme } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './layouts/content';
import Sidebar from './layouts/sidebar';
import { UiProvider } from './contexts/ui-context';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UiProvider>
        <BrowserRouter>
          <HStack height="100vh" width="full" spacing={0}>
            <Sidebar />
            <Divider orientation="vertical" />
            <Content />
          </HStack>
        </BrowserRouter>
      </UiProvider>
    </ChakraProvider>
  );
}

export default App;
