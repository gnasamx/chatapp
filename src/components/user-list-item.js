import { Box, Text } from '@chakra-ui/react';

function UserListItem({
  id,
  name,
  contactNumber,
  handleUserSelection,
  selectedUser,
}) {
  return (
    <Box
      as="button"
      textAlign="left"
      width="full"
      paddingX={4}
      paddingY={3}
      borderRadius="lg"
      borderWidth={1}
      borderColor={selectedUser === id ? 'green.400' : 'white'}
      _hover={{
        backgroundColor: 'gray.50',
        transitionProperty: 'background-color',
        transitionDuration: '0.5s',
      }}
      onClick={() => handleUserSelection(id)}
    >
      <Text fontWeight="semibold">{name}</Text>
      <Text color="gray.600" fontSize="sm">
        {contactNumber}
      </Text>
    </Box>
  );
}
export default UserListItem;
