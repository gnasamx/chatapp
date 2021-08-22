import { Box, Center, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import SidebarConversation from '../components/sidebar-conversation';
import SidebarHeader from '../components/sidebar-header';
import SidebarSearch from '../components/sidebar-search';
import { useUi } from '../contexts/ui-context';
import { useConversations } from '../use-persisted-state';

function Sidebar() {
  const [conversations] = useConversations();
  const { ctxCurrentuser, ctxUsers } = useUi();
  const [usersList, setUsersList] = useState([]);

  console.log('conversations:', conversations?.[ctxCurrentuser]);

  useEffect(() => {
    const usersList = Object.keys(conversations?.[ctxCurrentuser] || {}).map(
      userId => ctxUsers.find(user => user.id === userId)
    );
    setUsersList(usersList);
  }, [conversations, ctxCurrentuser, ctxUsers]);

  return (
    <VStack alignItems="flex-start" height="100vh" width="md" spacing={0}>
      <SidebarHeader ctxCurrentuser={ctxCurrentuser} />
      <SidebarSearch />

      {usersList?.length === 0 ? (
        <Box padding={3} width="full">
          <Center>
            <Text>Add friends to chat</Text>
          </Center>
        </Box>
      ) : (
        usersList?.map(user => <SidebarConversation key={user.id} {...user} />)
      )}
    </VStack>
  );
}
export default Sidebar;
