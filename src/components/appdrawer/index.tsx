import React, {PropsWithChildren} from 'react';
import {Box, Divider, Toolbar} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';

import DrawerListItem from './components/DrawerListItem';
import AppHeader from '../appHeader';
import {CustomDrawer, DrawerHeader} from './styles';
import {AppLogo} from '@/assets';
import {DrawerItems, getCurrentPath} from '@/utils';

export const withDrawer = <T extends PropsWithChildren>(WrappedComponent: React.ComponentType<T>) => {
  const ComponentWithDrawer = (props: T) => {
    const navigate = useNavigate();
    const currentPath = useLocation();

    return (
      <Box display='flex' height='100%'>
        <AppHeader />
        <CustomDrawer>
          <Toolbar />

          <DrawerHeader>
            <AppLogo width={130} height={110} />
          </DrawerHeader>
          <Divider />

          {DrawerItems.map((drawerItem, index) => {
            const isActive = getCurrentPath(currentPath.pathname) === drawerItem.route;
            return <DrawerListItem key={drawerItem.label + index.toString()} isActive={isActive} navigateTo={() => navigate(drawerItem.route)} {...drawerItem} />;
          })}
        </CustomDrawer>

        <Box sx={{flexGrow: 1, p: 7, height: 'calc(100%-7px)', backgroundColor: theme => theme.palette.grey.A100}}>
          <Toolbar />
          <WrappedComponent {...props} />
        </Box>
      </Box>
    );
  };
  return ComponentWithDrawer;
};
