import { Box, Text } from '@chakra-ui/react';

function ChatBubbleMe({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignSelf="flex-end"
      maxWidth="60%"
      alignItems="flex-end"
    >
      <Box
        backgroundColor="green.500"
        color="white"
        paddingX={4}
        paddingY={3}
        borderLeftRadius="2xl"
        borderTopRadius="2xl"
      >
        {children}
      </Box>
      <Text fontSize="sm" color="gray.600">
        Feb 12, 7.51 AM
      </Text>
    </Box>
  );
}

export default ChatBubbleMe;
