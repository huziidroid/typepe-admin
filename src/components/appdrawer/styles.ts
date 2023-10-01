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
  styled(Drawer)(() => ({
    width: DRAWER_WIDTH,
    ['& .MuiDrawer-paper']: {width: DRAWER_WIDTH, boxSizing: 'border-box', borderWidth: 0.5},
  })),
  {variant: 'permanent'},
);
