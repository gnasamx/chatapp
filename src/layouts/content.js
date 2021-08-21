import { Box, Divider, VStack } from '@chakra-ui/react';
import ChatBubbleMe from '../components/chat-bubble-me';
import ContentHeader from '../components/content-header';
import ContentMessages from '../components/content-messages';
import InoutMessageBox from '../components/input-message-box';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>,
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];

function Content() {
  return (
    <VStack width="full" height="full" alignItems="flex-start" spacing={0}>
      <ContentHeader />
      <Divider />
      <ContentMessages />
      {/* <Switch> */}
      {/* {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))} */}
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
          <ChatBubbleMe>
            and then move step by step and improve the application e.g. error
            handling etc. read up on the documentation of the nodejs client API
            and ensure you cover the edge cases and then move step by step and
            improve the application e.g. error handling etc. read up on the
            documentation of the nodejs client API and ensure you cover the edge
            cases
          </ChatBubbleMe>
        </VStack>
      </Box>
      {/* </Switch> */}
      <InoutMessageBox />
    </VStack>
  );
}

export default Content;
