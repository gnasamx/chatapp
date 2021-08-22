import { Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';

function ChatBubbleYou({ text, sentAt }) {
  return (
    <Box maxWidth="60%" alignSelf="flex-start">
      <Box
        backgroundColor="gray.200"
        paddingX={4}
        paddingY={3}
        borderRightRadius="2xl"
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

export default ChatBubbleYou;
