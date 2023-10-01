import React, {PropsWithChildren} from 'react';
import {Box, Divider, Toolbar} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';

import DrawerListItem from './components/DrawerListItem';
import AppHeader from '../appHeader';
import {CustomDrawer, DrawerHeader, MainPageContent} from './styles';
import {AppLogo} from '@/assets';
import {DrawerItems, getCurrentPath} from '@/utils';

export const withDrawer = <T extends PropsWithChildren>(WrappedComponent: React.ComponentType<T>) => {
  const ComponentWithDrawer = (props: T) => {
    const navigate = useNavigate();
    const currentPath = useLocation();

    return (
      <Box>
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

        <MainPageContent>
          <WrappedComponent {...props} />
        </MainPageContent>
      </Box>
    );
  };
  return ComponentWithDrawer;
};
