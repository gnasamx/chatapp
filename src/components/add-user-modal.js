import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useUi } from '../contexts/ui-context';
import { useConversations } from '../use-persisted-state';
import UserListItem from './user-list-item';

function AddUserModal({ isOpen, onClose }) {
  const searchRef = useRef();
  const { ctxUsers, ctxCurrentuser } = useUi();
  const [selectedUser, setSelectedUser] = useState();
  const [filteredUsers, setFilteredUsers] = useState();

  const [conversations, setConversations] = useConversations();

  useEffect(() => {
    setFilteredUsers(ctxUsers);
  }, [ctxUsers]);

  const handleStartConversation = () => {
    setConversations({
      ...conversations,
      [ctxCurrentuser]: {
        ...conversations?.[ctxCurrentuser],
        [selectedUser]: [],
      },
      [selectedUser]: {
        ...conversations?.[selectedUser],
        [ctxCurrentuser]: [],
      },
    });

    onClose();
    reset();
  };

  const handleUserSelection = id => {
    setSelectedUser(id);
  };

  const handleUserFilterChange = e => {
    if (!searchRef.current.value) setFilteredUsers(ctxUsers);
    else {
      setFilteredUsers(
        [...ctxUsers].filter(user =>
          user.name
            .toLowerCase()
            .includes(searchRef.current.value.toLowerCase())
        )
      );
    }
  };

  const reset = () => {
    setSelectedUser(undefined);
    searchRef.current.value = '';
    setFilteredUsers(ctxUsers);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      closeOnOverlayClick={false}
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
              placeholder="Search a name"
              borderRadius="full"
              ref={searchRef}
              onChange={handleUserFilterChange}
            />
          </InputGroup>
        </ModalHeader>
        <ModalBody>
          <VStack alignItems="flex-start" width="full" spacing={1}>
            {filteredUsers?.map(user => (
              <UserListItem
                key={user.id}
                {...user}
                handleUserSelection={handleUserSelection}
                selectedUser={selectedUser}
              />
            ))}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="ghost"
            mr={3}
            onClick={() => {
              reset();
              onClose();
            }}
          >
            Close
          </Button>
          <Button
            colorScheme={filteredUsers?.length === 0 ? 'gray' : 'green'}
            onClick={
              filteredUsers?.length === 0 ? reset : handleStartConversation
            }
          >
            {filteredUsers?.length === 0
              ? 'Reset search'
              : 'Start conversation'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddUserModal;
