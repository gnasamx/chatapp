import {
  Box,
  Heading,
  HStack,
  IconButton,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import { RiChatSmile2Line } from 'react-icons/ri';
import useCurrentUser from '../hooks/use-currentuser';
import AddUserModal from './add-user-modal';

function SidebarHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line no-unused-vars
  const [_, setCurrentuser] = useCurrentUser();

  const handleSignOut = () => {
    setCurrentuser('');
  };

  return (
    <HStack
      borderBottomColor="gray.200"
      borderBottomWidth={1}
      justifyContent="space-between"
      width="full"
      padding={3}
    >
      <Heading as="h3" size="md">
        Messages
      </Heading>
      <Box>
        <IconButton
          icon={<RiChatSmile2Line size={20} />}
          mr={3}
          onClick={onOpen}
        />
        <Tooltip label="Sign out">
          <IconButton icon={<FiLogOut size={20} />} onClick={handleSignOut} />
        </Tooltip>
      </Box>
      <AddUserModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
}
export default SidebarHeader;
