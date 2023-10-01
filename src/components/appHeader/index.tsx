import {useState} from 'react';
import {AppBar, Avatar, Box, IconButton, ListItemIcon, Menu, MenuItem, Typography} from '@mui/material';
import {Logout, NotificationImportant} from '@mui/icons-material';

import {HeaderToolbar} from './styles';
import {useLogout} from '@/services';

const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const {mutate} = useLogout({showLoading: true});

  const open = Boolean(anchorEl);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const onLogout = () => {
    mutate();
    handleClose();
  };

  return (
    <>
      <AppBar position='fixed' sx={{zIndex: theme => theme.zIndex.drawer + 1}}>
        <HeaderToolbar>
          <Typography variant='h4' fontWeight={700}>
            Typepe.in
          </Typography>

          {/* Avatar */}
          <Box>
            <IconButton>
              <NotificationImportant sx={{color: 'white'}} />
            </IconButton>

            <IconButton onClick={openMenu}>
              <Avatar alt='profile' />
            </IconButton>
          </Box>
        </HeaderToolbar>
      </AppBar>

      <Menu id='basic-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={onLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AppHeader;
