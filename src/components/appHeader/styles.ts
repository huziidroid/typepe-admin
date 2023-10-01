import {DRAWER_WIDTH} from '@/utils';
import {AppBar, AppBarProps, Toolbar} from '@mui/material';
import {styled} from '@mui/material/styles';

interface CustomAppBarProps extends AppBarProps {
  open?: boolean;
}

export const HeaderToolbar = styled(Toolbar)(() => ({display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}));

export const CustomAppBar = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<CustomAppBarProps>(({theme, open}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
