import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRef } from 'react';
import { useUi } from '../contexts/ui-context';
import { uuid } from '../utils/uuid';

function AddUserModal({ isOpen, onClose }) {
  const { startANewConversation } = useUi();
  const nameRef = useRef();

  const handleClick = () => {
    const timestamp = dayjs().format();
    const id = uuid(timestamp);

    startANewConversation({
      id: id,
      name: nameRef.current.value,
      createdAt: timestamp,
      url: id,
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new user</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="email">
            <FormLabel>Name</FormLabel>
            <Input type="text" ref={nameRef} />
          </FormControl>
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
