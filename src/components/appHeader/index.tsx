import {Avatar, Box, IconButton, Typography} from '@mui/material';
import {Menu, NotificationImportant} from '@mui/icons-material';

import {CustomAppBar, HeaderToolbar} from './styles';

interface IAppHeaderProps {
  isDrawerOpen?: boolean;
  onClickMenuIcon?: React.MouseEventHandler<HTMLButtonElement>;
}

const AppHeader = (props: IAppHeaderProps) => {
  const {onClickMenuIcon, isDrawerOpen} = props;

  return (
    <CustomAppBar position='fixed' open={isDrawerOpen}>
      <HeaderToolbar>
        <IconButton onClick={onClickMenuIcon} edge='start' sx={{mr: 2, ...(isDrawerOpen && {display: 'none'})}}>
          <Menu sx={{color: 'white'}} />
        </IconButton>

        <Typography variant='h5' fontWeight={700}>
          Typepe.in
        </Typography>

        {/* Avatar */}
        <Box>
          <IconButton>
            <NotificationImportant sx={{color: 'white'}} />
          </IconButton>

          <IconButton>
            <Avatar alt='profile' />
          </IconButton>
        </Box>
      </HeaderToolbar>
    </CustomAppBar>
  );
};

export default AppHeader;
