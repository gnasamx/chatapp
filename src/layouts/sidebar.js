import { VStack } from '@chakra-ui/react';
import SidebarHeader from '../components/sidebar-header';
import SidebarSearch from '../components/sidebar-search';

function Sidebar() {
  return (
    <VStack alignItems="flex-start" height="100vh" width="30%" spacing={0}>
      <SidebarHeader />
      <SidebarSearch />

      {/* {ctxUsers?.length === 0 ? (
        <Box padding={3} width="full">
          <Center>
            <Text>Add friends to chat</Text>
          </Center>
        </Box>
      ) : (
        ctxUsers?.map(user => <SidebarConversation key={user.id} {...user} />)
      )} */}
    </VStack>
  );
}
export default Sidebar;
