import {useState} from 'react';
import {Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Typography} from '@mui/material';
import {Logout, NotificationImportant, PersonAdd} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

import {CustomAppBar, HeaderToolbar} from './styles';

import {useLogout} from '@/services';

interface IAppHeaderProps {
  isDrawerOpen?: boolean;
  onClickMenuIcon?: React.MouseEventHandler<HTMLButtonElement>;
}

const AppHeader = (props: IAppHeaderProps) => {
  const {onClickMenuIcon, isDrawerOpen} = props;
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
      <CustomAppBar position='fixed' open={isDrawerOpen}>
        <HeaderToolbar>
          <IconButton onClick={onClickMenuIcon} edge='start' sx={{mr: 2, ...(isDrawerOpen && {display: 'none'})}}>
            <MenuIcon sx={{color: 'white'}} />
          </IconButton>

          <Typography variant='h5' fontWeight={700}>
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
      </CustomAppBar>

      <Menu id='basic-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd />
          </ListItemIcon>
          Profile
        </MenuItem>
        <Divider />
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
