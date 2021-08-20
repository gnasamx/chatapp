import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout';
import Sidebar from './components/sidebar';
import { UiProvider } from './contexts/ui-context';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UiProvider>
        <Router>
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <Layout />
          </div>
        </Router>
      </UiProvider>
    </ChakraProvider>
  );
}

export default App;
