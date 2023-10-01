import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {When} from 'react-if';
import {Box, ThemeProvider, Toolbar} from '@mui/material';

import './App.css';
import {AUTHENTICATED_ROUTER, UNAUTHENTICATED_ROUTER} from './routes';

import {AppTheme} from './assets/theme';
// import {DrawerItems} from './utils';

function App() {
  const isLoggedIn = true;
  const router = isLoggedIn ? AUTHENTICATED_ROUTER : UNAUTHENTICATED_ROUTER;

  return (
    <Box display='flex'>
      <ThemeProvider theme={AppTheme}>
        <When condition={isLoggedIn}>{/* <AppDrawer items={DrawerItems} /> */}</When>
        <Box flexGrow={1} component='main'>
          {isLoggedIn && <Toolbar />}
          <RouterProvider router={router} />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
