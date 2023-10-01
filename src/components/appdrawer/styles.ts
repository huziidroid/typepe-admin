import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';

import {DRAWER_WIDTH} from '@/utils';

export const MainContentContainer = styled('main', {shouldForwardProp: prop => prop !== 'open'})<{
  open?: boolean;
}>(({theme, open}) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${DRAWER_WIDTH}px`,
  }),
}));

export const DrawerHeader = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'flex-start',
  padding: theme.spacing(2, 1.6),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
  height: 170,
}));
