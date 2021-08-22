import { Divider, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateAccount from '../components/cretate-account';
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
          <Content />
        </Route>
      </Switch>
    </>
  );
}

function Layout() {
  const [currentuser, setCurrentuser] = useCurrentuser();
  const { setCtxCurrentuser } = useUi();

  useEffect(() => {
    setCtxCurrentuser(currentuser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
