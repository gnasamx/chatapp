import { Box, HStack, IconButton, Input } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRef } from 'react';
import { BiSend } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { useChat } from '../contexts/chat-context';

function InoutMessageBox() {
  const { sendANewMessage } = useChat();
  const messageRef = useRef();
  const { userId } = useParams();

  const handleMessageSend = () => {
    const text = messageRef.current.value;
    if (text) {
      sendANewMessage({
        type: 'text',
        text: messageRef.current.value,
        sentAt: dayjs().format(),
        userId,
      });
    }
  };

  return (
    <Box borderTopColor="gray.200" borderTopWidth={1} width="full" padding={3}>
      <HStack>
        <Input
          placeholder="Start a new conversation"
          borderRadius="full"
          ref={messageRef}
        />
        <IconButton
          isRound
          colorScheme="green"
          icon={<BiSend size={20} />}
          onClick={handleMessageSend}
        />
      </HStack>
    </Box>
  );
}
export default InoutMessageBox;
