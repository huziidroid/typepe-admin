import {Alert, Slide, SlideProps, Snackbar, SnackbarOrigin} from '@mui/material';
import {equals, propOr} from 'ramda';
import React from 'react';

import {AlertType, SnackBarType} from '@/types';

interface IAppSnackbarProps {
  state: SnackBarType | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose: (args: any) => void;
}

const defaultAnchorOrigin: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'right',
};

// function to handle the slider animation in the Toasts
const TransitionLeft = (props: SlideProps) => {
  return <Slide {...props} direction='left' />;
};

const AppSnackbar = (props: IAppSnackbarProps) => {
  const {state, onClose} = props;

  const isVisible = !equals(state, null); // will be visible only if state is not null
  const type: AlertType = propOr('info', 'type', state);
  const anchorOrigin: SnackbarOrigin = propOr(defaultAnchorOrigin, 'anchorOrigin', state);
  const message: string = propOr('', 'message', state);
  const autoHideDuration: number | null | undefined = propOr(5000, 'autoHideDuration', state);

  return (
    <Snackbar open={isVisible} autoHideDuration={autoHideDuration} anchorOrigin={anchorOrigin} onClose={onClose} TransitionComponent={TransitionLeft}>
      <Alert color={type} onClose={onClose} sx={{fontSize: '15px'}} closeText={'Close'}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
