import { Box } from '@chakra-ui/react';

function ChatBubbleMe({ children }) {
  return (
    <Box
      backgroundColor="green.500"
      color="white"
      padding={3}
      borderLeftRadius={10}
      borderTopRadius={10}
      marginBottom={2}
      // width="max-content"
      maxWidth="60%"
      alignSelf="flex-end"
    >
      {children}
    </Box>
  );
}

export default ChatBubbleMe;
