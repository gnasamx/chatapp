import { Box, Center, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import SidebarConversation from '../components/sidebar-conversation';
import SidebarHeader from '../components/sidebar-header';
import SidebarSearch from '../components/sidebar-search';
import { useUi } from '../contexts/ui-context';

function Sidebar() {
  const { users } = useUi();

  return (
    <VStack alignItems="flex-start" height="100vh" width="30%" spacing={0}>
      <SidebarHeader />
      <SidebarSearch />

      {users.length === 0 ? (
        <Box padding={3} width="full">
          <Center>
            <Text>Add friends to chat</Text>
          </Center>
        </Box>
      ) : (
        users?.map(user => <SidebarConversation key={user.id} {...user} />)
      )}

      {/* <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bubblegum">Bubblegum</Link>
        </li>
        <li>
          <Link to="/shoelaces">Shoelaces</Link>
        </li>
      </ul> */}
    </VStack>
  );
}
export default Sidebar;
