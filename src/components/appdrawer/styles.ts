import {Box, Drawer} from '@mui/material';
import {styled} from '@mui/material/styles';

import {DRAWER_WIDTH} from '@/utils';
import {withAttrs} from '@/styles';

export const DrawerHeader = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  height: 170,
}));

export const MainPageContent = styled(Box)({marginLeft: `${DRAWER_WIDTH}px`});

export const CustomDrawer = withAttrs(
  styled(Drawer)(({theme}) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ['& .MuiDrawer-paper']: {width: DRAWER_WIDTH, boxSizing: 'border-box', borderWidth: 0.5, backgroundColor: theme.palette.background.default},
  })),
  {variant: 'permanent'},
);
