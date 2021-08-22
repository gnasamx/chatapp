import { Divider, HStack } from '@chakra-ui/react';
import { Route, Switch } from 'react-router-dom';
import CreateAccount from '../components/cretate-account';
import { ChatProvider } from '../contexts/chat-context';
import { useUi } from '../contexts/ui-context';
import { isEmptyObject } from '../utils/checks';
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

function Layout() {
  const { me, users } = useUi();

  return (
    <HStack width="full" height="100vh" spacing={0}>
      {isEmptyObject(me) ? <CreateAccount /> : <ChatLayout users={users} />}
    </HStack>
  );
}
export default Layout;
