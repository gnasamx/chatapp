import { Divider, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatBubbleMe from '../components/chat-bubble-me';
import ChatBubbleYou from '../components/chat-bubble-you';
import ContentHeader from '../components/content-header';
import ContentMessages from '../components/content-messages';
import InoutMessageBox from '../components/input-message-box';
import { useUi } from '../contexts/ui-context';
import { useConversations } from '../use-persisted-state';

function Content() {
  const { userId } = useParams();
  const { ctxUsers, ctxCurrentuser } = useUi();
  const [recipient, setRecipient] = useState();
  const [conversations] = useConversations();

  useEffect(() => {
    const recipient = ctxUsers?.find(user => user.id === userId);
    setRecipient(recipient);
  }, [ctxUsers, userId]);

  return (
    <VStack width="full" height="full" alignItems="flex-start" spacing={0}>
      <ContentHeader recipient={recipient} ctxCurrentuser={ctxCurrentuser} />
      <Divider />
      <ContentMessages>
        {conversations?.[ctxCurrentuser]?.[recipient?.id]?.map(message => {
          if (message.me === ctxCurrentuser) {
            return <ChatBubbleMe key={message?.sentAt} {...message} />;
          } else {
            return <ChatBubbleYou key={message?.sentAt} {...message} />;
          }
        })}
      </ContentMessages>
      <InoutMessageBox ctxCurrentuser={ctxCurrentuser} recipient={recipient} />
    </VStack>
  );
}

export default Content;
