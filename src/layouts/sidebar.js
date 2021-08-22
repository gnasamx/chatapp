import { Box, Center, Text, VStack } from '@chakra-ui/react';
import SidebarConversation from '../components/sidebar-conversation';
import SidebarHeader from '../components/sidebar-header';
import SidebarSearch from '../components/sidebar-search';
import { useUi } from '../contexts/ui-context';

function Sidebar() {
  const { ctxUsers } = useUi();

  return (
    <VStack alignItems="flex-start" height="100vh" width="30%" spacing={0}>
      <SidebarHeader />
      <SidebarSearch />

      {ctxUsers?.length === 0 ? (
        <Box padding={3} width="full">
          <Center>
            <Text>Add friends to chat</Text>
          </Center>
        </Box>
      ) : (
        ctxUsers?.map(user => <SidebarConversation key={user.id} {...user} />)
      )}
    </VStack>
  );
}
export default Sidebar;
