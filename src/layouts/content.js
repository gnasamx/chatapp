import { Box, Divider, VStack } from '@chakra-ui/react';
import ContentHeader from '../components/content-header';
import ContentMessages from '../components/content-messages';
import InoutMessageBox from '../components/input-message-box';
import SidebarConversation from '../components/sidebar-conversation';

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
      <Box
        flexGrow={1}
        padding={3}
        height="full"
        width="full"
        overflowY="scroll"
      ></Box>
      {/* </Switch> */}
      <InoutMessageBox />
    </VStack>
  );
}

export default Content;
