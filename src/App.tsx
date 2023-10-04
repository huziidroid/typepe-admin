import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {ThemeProvider} from '@mui/material';

import './App.css';
import {AUTHENTICATED_ROUTER, UNAUTHENTICATED_ROUTER} from './routes';
import {AppTheme} from './assets/theme';
import {closeToaster, selectLoading, selectToast, useAppDispatch, useAppSelector} from './store';
import {AppLoader, AppSnackbar} from './components';
import {isEmptyOrNil} from './utils';
import {useGetProfile} from './services';

function App() {
  const {data: user} = useGetProfile({showLoading: true});
  const isLoggedIn = !isEmptyOrNil(user?._id);

  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();
  const toasterState = useAppSelector(selectToast).snackBarState;
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
