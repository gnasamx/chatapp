import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ChatProvider } from '../contexts/chat-context';
import { useUi } from '../contexts/ui-context';
import { isEmptyObject } from '../utils/checks';
import { uuid } from '../utils/uuid';
import Content from './content';
import Sidebar from './sidebar';

function ChatLayout({ users }) {
  return (
    <>
      <Sidebar />
      <Divider orientation="vertical" />
      <Switch>
        <Route exact path="/:userId">
          <ChatProvider>
            <Content />
          </ChatProvider>
        </Route>
      </Switch>
    </>
  );
}

function CreateAccount() {
  const nameRef = useRef();
  const { createAccount } = useUi();

  const handleCreateAccount = () => {
    const timestamp = dayjs().format();
    const id = uuid(timestamp);

    createAccount({
      id: id,
      name: nameRef.current.value,
      createdAt: timestamp,
      url: id,
    });
  };

  return (
    <Box width="full">
      <VStack maxWidth="sm" margin="0 auto" spacing={10}>
        <Box textAlign="center">
          <Heading marginBottom={3}>Create Account</Heading>
          <Text fontSize="sm" color="gray.600">
            Don't worry, All your conversations are stored in your system.
          </Text>
        </Box>
        <FormControl id="me">
          <FormLabel>Full Name</FormLabel>
          <Input type="text" ref={nameRef} placeholder="John Doe" />
          <FormHelperText>
            Set your name - however you'd like people to refer to you.
          </FormHelperText>
        </FormControl>
        <Button
          colorScheme="green"
          marginBottom={3}
          onClick={handleCreateAccount}
        >
          Get Started
        </Button>
      </VStack>
    </Box>
  );
}

function Layout() {
  const { me, users } = useUi();

  return (
    <HStack width="full" height="100vh" spacing={0}>
      {isEmptyObject(me) ? <CreateAccount /> : <ChatLayout users={users} />}
    </HStack>
  );
}
export default Layout;
