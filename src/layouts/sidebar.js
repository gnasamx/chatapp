import { Button, Heading, HStack, VStack } from '@chakra-ui/react';
import { RiChatSmile2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import SidebarConversation from '../components/sidebar-conversation';
import SidebarHeader from '../components/sidebar-header';
import SidebarSearch from '../components/sidebar-search';
import { useUi } from '../contexts/ui-context';

function Sidebar() {
  const { state, startANewConversation } = useUi();
  const handleOnClick = () => {
    startANewConversation({ name: 'Ganesh', thumbnail: 'apple/animoji' });
  };
  console.log({ state });

  return (
    <VStack alignItems="flex-start" height="100vh" width="sm" spacing={0}>
      <SidebarHeader handleOnClic={handleOnClick} />
      <SidebarSearch />
      <SidebarConversation />
      <SidebarConversation />
      <SidebarConversation />
      <SidebarConversation />
      <SidebarConversation />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bubblegum">Bubblegum</Link>
        </li>
        <li>
          <Link to="/shoelaces">Shoelaces</Link>
        </li>
      </ul>
    </VStack>
  );
}
export default Sidebar;
