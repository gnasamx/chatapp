import { Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';

function ChatBubbleMe({ text, sentAt }) {
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
        {text}
      </Box>
      <Text fontSize="sm" color="gray.600">
        {dayjs(sentAt).format('MMM DD, hh:mm A')}
      </Text>
    </Box>
  );
}

export default ChatBubbleMe;
