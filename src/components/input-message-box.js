import { Box, Input } from '@chakra-ui/react';

function InoutMessageBox() {
  return (
    <Box
      borderBottomColor="gray.200"
      borderBottomWidth={1}
      width="full"
      padding={3}
    >
      <Input placeholder="Start a new conversation" borderRadius="full" />
    </Box>
  );
}
export default InoutMessageBox;
