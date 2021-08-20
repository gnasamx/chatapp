import { Button, Heading, HStack } from '@chakra-ui/react';
import { RiChatSmile2Line } from 'react-icons/ri';

function SidebarHeader({ handleOnClick }) {
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
      <Button leftIcon={<RiChatSmile2Line size={20} />} onClick={handleOnClick}>
        New Conversation
      </Button>
    </HStack>
  );
}
export default SidebarHeader;
