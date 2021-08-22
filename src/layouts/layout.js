import { Divider, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateAccount from '../components/cretate-account';
import { ChatProvider } from '../contexts/chat-context';
import { useUi } from '../contexts/ui-context';
import useWindowName from '../hooks/use-window-name';
import { useUsers } from '../use-persisted-state';
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
  const [windowName, setWindowName] = useWindowName(
    () => (window.name && window.name !== 'undefined' && window.name) || ''
  );

  useEffect(() => {
    console.log({ windowName });
  }, [windowName]);

  return (
    <HStack width="full" height="100vh" spacing={0}>
      {!!windowName ? (
        <ChatLayout users={users} />
      ) : (
        <CreateAccount setWindowName={setWindowName} />
      )}
    </HStack>
  );
}
export default Layout;
