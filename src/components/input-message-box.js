import { Box, HStack, IconButton, Input } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRef } from 'react';
import { BiSend } from 'react-icons/bi';
import { useConversations } from '../use-persisted-state';

function InoutMessageBox({ ctxCurrentuser, recipient }) {
  const messageRef = useRef();
  const [conversations, setConversations] = useConversations();

  const handleMessageSend = () => {
    const text = messageRef.current.value;
    const selectedUser = recipient.id;
    if (text) {
      const message = {
        type: 'text',
        text: messageRef.current.value,
        sentAt: dayjs().format(),
        me: ctxCurrentuser,
        recipient: recipient.id,
      };

      setConversations({
        ...conversations,
        [ctxCurrentuser]: {
          ...conversations?.[ctxCurrentuser],
          [selectedUser]: [
            ...conversations?.[ctxCurrentuser]?.[selectedUser],
            message,
          ],
        },
        [selectedUser]: {
          ...conversations?.[selectedUser],
          [ctxCurrentuser]: [
            ...conversations?.[selectedUser]?.[ctxCurrentuser],
            message,
          ],
        },
      });
      messageRef.current.value = '';
    }
  };

  console.log({ conversations });

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
