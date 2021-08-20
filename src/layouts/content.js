import { Box, Divider } from '@chakra-ui/react';
import { Switch } from 'react-router-dom';
import ContentHeader from '../components/content-header';
import ContentMessages from '../components/content-messages';

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
    <Box width="full" height='100vh'>
      <ContentHeader />
      <Divider />
      <ContentMessages />
      <Switch>
        {/* {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))} */}
      </Switch>
    </Box>
  );
}

export default Content;
