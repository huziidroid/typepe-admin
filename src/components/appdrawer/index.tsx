import React, {PropsWithChildren, useState} from 'react';
import {Box, Divider, Drawer, IconButton} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import DrawerListItem from './components/DrawerListItem';
import AppHeader from '../appHeader';
import {DrawerHeader, MainContentContainer} from './styles';
import {AppLogo} from '@/assets';
import {DRAWER_WIDTH, DrawerItems, getCurrentPath} from '@/utils';

export const withDrawer = <T extends PropsWithChildren>(WrappedComponent: React.ComponentType<T>) => {
  const ComponentWithDrawer = (props: T) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const currentPath = useLocation();

    const toggleDrawer = () => setOpen(!open);

    return (
      <Box>
        <AppHeader onClickMenuIcon={toggleDrawer} isDrawerOpen={open} />

        <Drawer onClose={() => setOpen(false)} variant='persistent' open={open} sx={{width: DRAWER_WIDTH, flexShrink: 0, ['& .MuiDrawer-paper']: {width: DRAWER_WIDTH, boxSizing: 'border-box'}}}>
          <DrawerHeader>
            <AppLogo width={130} height={110} />
            <IconButton onClick={() => setOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />

          {DrawerItems.map((drawerItem, index) => {
            const isActive = getCurrentPath(currentPath.pathname) === drawerItem.route;

            return <DrawerListItem key={drawerItem.label + index.toString()} isActive={isActive} navigateTo={() => navigate(drawerItem.route)} {...drawerItem} />;
          })}
        </Drawer>

        <MainContentContainer open={open} onClick={() => open && setOpen(false)}>
          <WrappedComponent {...props} />
        </MainContentContainer>
      </Box>
    );
  };
  return ComponentWithDrawer;
};
