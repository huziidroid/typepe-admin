import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {When} from 'react-if';
import {ThemeProvider} from '@mui/material';

import './App.css';
import {AUTHENTICATED_ROUTER, UNAUTHENTICATED_ROUTER} from './routes';
import {AppHeader} from './components';
import {AppTheme} from './assets/theme';

function App() {
  const isLoggedIn = true;
  const router = isLoggedIn ? AUTHENTICATED_ROUTER : UNAUTHENTICATED_ROUTER;

  return (
    <React.Fragment>
      <ThemeProvider theme={AppTheme}>
        <When condition={isLoggedIn}>
          <AppHeader />
        </When>

        <RouterProvider router={router} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
