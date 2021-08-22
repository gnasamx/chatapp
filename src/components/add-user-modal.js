import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useUi } from '../contexts/ui-context';
import { uuid } from '../utils/uuid';
import UserListItem from './user-list-item';

function AddUserModal({ isOpen, onClose }) {
  const searchRef = useRef();
  const { ctxUsers } = useUi();
  const [selectedUser, setSelectedUser] = useState();

  const handleClick = () => {
    const timestamp = dayjs().format();
    const id = uuid(timestamp);
    onClose();
  };

  const handleUserSelection = id => {
    setSelectedUser(id);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      initialFocusRef={searchRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Add new user
          <InputGroup marginTop={3}>
            <InputLeftElement
              pointerEvents="none"
              children={<BiSearch color="gray.200" size={20} />}
            />
            <Input
              placeholder="Search a user"
              borderRadius="full"
              ref={searchRef}
            />
          </InputGroup>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems="flex-start" width="full" spacing={1}>
            {ctxUsers?.map(user => (
              <UserListItem
                {...user}
                handleUserSelection={handleUserSelection}
                selectedUser={selectedUser}
              />
            ))}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="green" onClick={handleClick}>
            Start conversation
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddUserModal;
