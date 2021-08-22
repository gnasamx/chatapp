import { Divider, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatBubbleMe from '../components/chat-bubble-me';
import ChatBubbleYou from '../components/chat-bubble-you';
import ContentHeader from '../components/content-header';
import ContentMessages from '../components/content-messages';
import InoutMessageBox from '../components/input-message-box';
import { useUi } from '../contexts/ui-context';
import { useUsers } from '../use-persisted-state';

function Content() {
  const { userId } = useParams();
  const { ctxUsers, ctxCurrentuser } = useUi();
  const [recipient, setRecipient] = useState();
  // const [users] = useUsers();

  useEffect(() => {
    const recipient = ctxUsers.find(user => user.id === userId);
    setRecipient(recipient);
    // const me = users.find(user => user.id === ctxCurrentuser);
  }, [ctxUsers, userId]);

  return (
    <VStack width="full" height="full" alignItems="flex-start" spacing={0}>
      <ContentHeader recipient={recipient} />
      <Divider />
      <ContentMessages>{/* Append messages */}</ContentMessages>
      <InoutMessageBox ctxCurrentuser={ctxCurrentuser} recipient={recipient} />
    </VStack>
  );
}

export default Content;
