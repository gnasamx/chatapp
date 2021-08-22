import { Box, VStack } from '@chakra-ui/react';

function ContentMessages({ children }) {
  return (
    <Box padding={3} height="full" width="full" overflowY="scroll">
      <VStack>{children}</VStack>
    </Box>
  );
}

export default ContentMessages;
