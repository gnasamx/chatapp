import { Avatar, Box, HStack, Text } from '@chakra-ui/react';

function SidebarConversation() {
  return (
    <HStack padding={3} width="full" alignItems="flex-start">
      <Avatar name="Georges Durverger" />
      <Box overflow="hidden" flexGrow={1}>
        <Text fontWeight="semibold">Georges Duverger</Text>
        <Text color="gray.600" isTruncated>
          For example, if
        </Text>
      </Box>
      <Box flexShrink={0}>
        <Text color="gray.600">Jul 26</Text>
      </Box>
    </HStack>
  );
}
export default SidebarConversation;
