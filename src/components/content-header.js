import {
  Avatar,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useConversations } from '../use-persisted-state';

function ContentHeader({ recipient, ctxCurrentuser }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const [conversations, setConversations] = useConversations();

  const history = useHistory();

  const handleDeleteConversion = () => {
    const conversationsCopy = { ...conversations };
    delete conversationsCopy?.[ctxCurrentuser]?.[recipient?.id];
    setConversations(conversationsCopy);
    history.replace('/');
    onClose();
  };

  return (
    <HStack width="full" padding={3}>
      <HStack flexGrow={1}>
        <Avatar name={recipient?.name} size="sm" />
        <Heading as="h4" size="md">
          {recipient?.name}
        </Heading>
      </HStack>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FiInfo size={20} />}
          variant="ghost"
          isRound
        />
        <MenuList>
          <MenuItem onClick={() => setIsOpen(true)}>
            Delete conversation
          </MenuItem>
        </MenuList>
      </Menu>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete conversation
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteConversion} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </HStack>
  );
}

export default ContentHeader;
