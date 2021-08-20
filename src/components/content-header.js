import { Avatar, Heading, HStack, IconButton } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

function ContentHeader() {
  return (
    <HStack width="full" padding={3}>
      <HStack flexGrow={1}>
        <Avatar name="Georges Duverger" size="sm" />
        <Heading as="h3" size="md">
          Georges Duverger
        </Heading>
      </HStack>
      <IconButton icon={<FiInfo size={20} />} isRound variant="ghost" />
    </HStack>
  );
}

export default ContentHeader;
