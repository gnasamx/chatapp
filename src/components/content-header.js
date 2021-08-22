import { Avatar, Heading, HStack, IconButton } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

function ContentHeader({ recipient }) {
  return (
    <HStack width="full" padding={3}>
      <HStack flexGrow={1}>
        <Avatar name={recipient?.name} size="sm" />
        <Heading as="h4" size="md">
          {recipient?.name}
        </Heading>
      </HStack>
      <IconButton icon={<FiInfo size={20} />} isRound variant="ghost" />
    </HStack>
  );
}

export default ContentHeader;
