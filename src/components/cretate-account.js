import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRef } from 'react';
import { useUsers } from '../use-persisted-state';
import { uuid } from '../utils/uuid';

function CreateAccount({ setCurrentuser }) {
  const nameRef = useRef();
  const contactNumberRef = useRef();
  const [users, setUsers] = useUsers();

  const handleCreateAccount = e => {
    e.preventDefault();

    const id = uuid(contactNumberRef.current.value);

    const user = {
      id: id,
      name: nameRef.current.value,
      contactNumber: contactNumberRef.current.value,
      createdAt: dayjs().format(),
      url: id,
    };

    const userIsAlreadyRegistered = !!users?.find(user => user.id === id);

    console.log({ userIsAlreadyRegistered });

    if (!userIsAlreadyRegistered) {
      const updatedUsers =
        Array.isArray(users) && users.length ? users.concat(user) : [user];

      setUsers(updatedUsers);
      setCurrentuser(id);
    } else if (userIsAlreadyRegistered) {
      setCurrentuser(id);
    } else {
      console.log('Clear cache, Reopen widnow and try again!');
    }
  };

  return (
    <Box width="full">
      <VStack maxWidth="sm" margin="0 auto" spacing={10}>
        <Box textAlign="center">
          <Heading marginBottom={3}>Welcome</Heading>
          <Text fontSize="sm" color="gray.600">
            Don't worry, All your conversations are stored in your system.
          </Text>
        </Box>
        <Box as="form" onSubmit={handleCreateAccount} textAlign="center">
          <FormControl isRequired>
            <FormLabel htmlFor="fullname">Full name</FormLabel>
            <Input
              type="text"
              ref={nameRef}
              placeholder="John Doe"
              name="fullname"
            />
            <FormHelperText>
              Set your name - however you'd like people to refer to you.
            </FormHelperText>
          </FormControl>
          <FormControl marginTop={4} isRequired>
            <FormLabel htmlFor="contactNumber">Contact number</FormLabel>
            <Input
              type="tel"
              ref={contactNumberRef}
              placeholder="9988776655"
              name="contactNumber"
            />
          </FormControl>
          <Button colorScheme="green" marginTop={10} type="submit">
            Get Started
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default CreateAccount;
