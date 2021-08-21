import { Box, Divider, VStack } from '@chakra-ui/react';
import ChatBubbleMe from '../components/chat-bubble-me';
import ChatBubbleYou from '../components/chat-bubble-you';
import ContentHeader from '../components/content-header';
import ContentMessages from '../components/content-messages';
import InoutMessageBox from '../components/input-message-box';

function Content() {
  return (
    <VStack width="full" height="full" alignItems="flex-start" spacing={0}>
      <ContentHeader />
      <Divider />
      <ContentMessages />
      <Box padding={3} height="full" overflowY="scroll">
        <VStack>
          <ChatBubbleMe>
            and then move step by step and improve the application e.g. error
            handling etc. read up on the documentation of the nodejs client API
            and ensure you cover the edge cases
          </ChatBubbleMe>
          <ChatBubbleMe>and then</ChatBubbleMe>
          <ChatBubbleMe>
            and then move step by step and improve the application e.g. error
          </ChatBubbleMe>
          <ChatBubbleYou>
            documentation of the nodejs client API and ensure you cover the edge
            cases
          </ChatBubbleYou>
          <ChatBubbleMe>
            and then move step by step and improve the application e.g. error
            handling etc. read up on the documentation of the nodejs client API
            and ensure you cover the edge cases and then move step by step and
            improve the application e.g. error handling etc. read up on the
            documentation of the nodejs client API and ensure you cover the edge
            cases
          </ChatBubbleMe>
          <ChatBubbleYou>
            and then move step by step and improve the application e.g. error
            handling etc. read up on the documentation of the nodejs client API
            and ensure you cover the edge cases and then move step by step and
            improve the application e.g. error handling etc. read up on the
            documentation of the nodejs client API and ensure you cover the edge
            cases
          </ChatBubbleYou>
          <ChatBubbleYou>
            handling etc. read up on the documentation of the nodejs client API
            and ensure you cover the edge cases and then move step by step and
            documentation of the nodejs client API and ensure you cover the edge
            cases
          </ChatBubbleYou>
        </VStack>
      </Box>
      {/* </Switch> */}
      <InoutMessageBox />
    </VStack>
  );
}

export default Content;
