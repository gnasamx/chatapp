import {
  Box,
  Heading,
  HStack,
  IconButton,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { RiChatSmile2Line } from 'react-icons/ri';
import AddUserModal from './add-user-modal';
import SidebarOptions from './sidebar-options';

function SidebarHeader({ ctxCurrentuser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Tooltip hasArrow label="New conversation">
          <IconButton
            icon={<RiChatSmile2Line size={20} />}
            mr={3}
            onClick={onOpen}
          />
        </Tooltip>
        <SidebarOptions ctxCurrentuser={ctxCurrentuser} />
      </Box>
      <AddUserModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
}
export default SidebarHeader;
