import { Box, Input } from '@chakra-ui/react';

function SidebarSearch() {
  return (
    <Box
      borderBottomColor="gray.200"
      borderBottomWidth={1}
      width="full"
      padding={3}
    >
      <Input placeholder="Search for people" borderRadius="full" />
    </Box>
  );
}
export default SidebarSearch;
