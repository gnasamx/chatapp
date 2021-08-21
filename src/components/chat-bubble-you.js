import { Box, Text } from '@chakra-ui/react';

function ChatBubbleYou({ children }) {
  return (
    <Box maxWidth="60%" alignSelf="flex-start">
      <Box
        backgroundColor="gray.200"
        paddingX={4}
        paddingY={3}
        borderRightRadius="2xl"
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

export default ChatBubbleYou;
