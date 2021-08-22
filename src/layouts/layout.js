import { Divider, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateAccount from '../components/cretate-account';
import { ChatProvider } from '../contexts/chat-context';
import { useUi } from '../contexts/ui-context';
import useCurrentuser from '../hooks/use-currentuser';
import Content from './content';
import Sidebar from './sidebar';

function ChatLayout() {
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
  const [currentuser, setCurrentuser] = useCurrentuser();
  const { setCtxCurrentuser } = useUi();

  useEffect(() => {
    console.log('Layout currentuser: ', currentuser);
    setCtxCurrentuser(currentuser);
  }, [currentuser]);

  return (
    <HStack width="full" height="100vh" spacing={0}>
      {!!currentuser ? (
        <ChatLayout users={[]} />
      ) : (
        <CreateAccount setCurrentuser={setCurrentuser} />
      )}
    </HStack>
  );
}
export default Layout;
