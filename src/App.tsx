import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {ThemeProvider} from '@mui/material';

import './App.css';
import {AUTHENTICATED_ROUTER, UNAUTHENTICATED_ROUTER} from './routes';
import {AppTheme} from './assets/theme';
import {closeToaster, selectLoading, selectToast, selectUser, useAppDispatch, useAppSelector} from './store';
import {AppLoader, AppSnackbar} from './components';
import {isEmptyOrNil} from './utils';
import {useGetProfile} from './services';

function App() {
  useGetProfile({showLoading: true});

  const isLoading = useAppSelector(selectLoading);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const toasterState = useAppSelector(selectToast).snackBarState;

  const isLoggedIn = !isEmptyOrNil(user?._id);
  const router = isLoggedIn ? AUTHENTICATED_ROUTER : UNAUTHENTICATED_ROUTER;

  return (
    <ThemeProvider theme={AppTheme}>
      {toasterState && <AppSnackbar onClose={() => dispatch(closeToaster())} state={toasterState} />}
      <AppLoader isLoading={isLoading} />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
