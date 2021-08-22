import {
  Avatar,
  Box,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
function SidebarConversation({ name, url, lastMessage }) {
  return (
    <LinkBox as={HStack} padding={3} width="full" alignItems="flex-start">
      <Avatar name={name} />
      <Box overflow="hidden" flexGrow={1}>
        <LinkOverlay as={Link} to={url}>
          <Text fontWeight="semibold">{name}</Text>
        </LinkOverlay>
        <Text color="gray.600" isTruncated>
          {lastMessage?.text}
        </Text>
      </Box>
      <Box flexShrink={0}>
        <Text color="gray.600">
          {dayjs(lastMessage?.sentAt).format('hh:mm A')}
        </Text>
      </Box>
    </LinkBox>
  );
}
export default SidebarConversation;
