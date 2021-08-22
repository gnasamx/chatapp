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
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useUi } from '../contexts/ui-context';
import { uuid } from '../utils/uuid';
import UserListItem from './user-list-item';

function AddUserModal({ isOpen, onClose }) {
  const searchRef = useRef();
  const { ctxUsers } = useUi();
  const [selectedUser, setSelectedUser] = useState();
  const [filteredUsers, setFilteredUsers] = useState();

  useEffect(() => {
    setFilteredUsers(ctxUsers);
  }, [ctxUsers]);

  const handleStartConversation = () => {
    console.log('handleStartConversation');
    const timestamp = dayjs().format();
    const id = uuid(timestamp);
    onClose();
    reset();
  };

  console.log({ ctxUsers, filteredUsers });

  const handleUserSelection = id => {
    setSelectedUser(id);
  };

  const handleUserFilterChange = e => {
    console.log(e.target.value);
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
    console.log('reset');
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
