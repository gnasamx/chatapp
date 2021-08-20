import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useUi } from '../contexts/ui-context';

function Sidebar() {
  const { state, startANewConversation } = useUi();
  const handleOnClick = () => {
    startANewConversation({ name: 'Ganesh', thumbnail: 'apple/animoji' });
  };
  console.log({ state });
  return (
    <div
      style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0',
      }}
    >
      <Button onClick={handleOnClick}>Add a new conversation</Button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bubblegum">Bubblegum</Link>
        </li>
        <li>
          <Link to="/shoelaces">Shoelaces</Link>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
