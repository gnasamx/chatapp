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
import { useUi } from '../contexts/ui-context';
import { uuid } from '../utils/uuid';

function CreateAccount() {
  const nameRef = useRef();
  const contactNumberRef = useRef();
  const { createAccount } = useUi();

  const handleCreateAccount = () => {
    const timestamp = dayjs().format();
    const id = uuid(timestamp);

    createAccount({
      id: id,
      name: nameRef.current.value,
      contactNumber: contactNumberRef.current.value,
      createdAt: timestamp,
      url: id,
    });
  };

  return (
    <Box width="full">
      <VStack maxWidth="sm" margin="0 auto" spacing={10}>
        <Box textAlign="center">
          <Heading marginBottom={3}>Create Account</Heading>
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
              defaultValue="Ganesh Pawar"
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
              defaultValue="9988776655"
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
