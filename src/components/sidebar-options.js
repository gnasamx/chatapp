import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CgOptions } from 'react-icons/cg';
import useCurrentUser from '../hooks/use-currentuser';
import { useUsers } from '../use-persisted-state';

function SidebarOptions({ ctxCurrentuser }) {
  const [users] = useUsers();
  const [currentuserDetails, setCurrentuserDetails] = useState();
  // eslint-disable-next-line no-unused-vars
  const [_, setCurrentuser] = useCurrentUser();

  const handleSignOut = () => {
    setCurrentuser('');
    window.location.reload();
  };

  useEffect(() => {
    setCurrentuserDetails(
      users?.filter(user => user.id === ctxCurrentuser)?.[0]
    );
  }, [ctxCurrentuser, users]);

  console.log({ currentuserDetails, ctxCurrentuser, users });
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<CgOptions size={20} />} />
      <MenuList>
        <MenuItem>
          {currentuserDetails?.name} ({currentuserDetails?.contactNumber})
        </MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
export default SidebarOptions;
