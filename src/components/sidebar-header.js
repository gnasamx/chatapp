import { Heading, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { RiChatSmile2Line } from 'react-icons/ri';
import AddUserModal from './add-user-modal';

function SidebarHeader() {
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
      <IconButton icon={<RiChatSmile2Line size={20} />} onClick={onOpen} />
      <AddUserModal isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
}
export default SidebarHeader;
