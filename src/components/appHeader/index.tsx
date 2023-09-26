import {AppBar, Avatar, IconButton, Typography} from '@mui/material';
import {Menu} from '@mui/icons-material';

import {HeaderToolbar} from './styles';

const AppHeader = () => {
  return (
    <AppBar position='sticky'>
      <HeaderToolbar>
        <IconButton>
          <Menu sx={{color: 'white'}} />
        </IconButton>
        <Typography variant='h5' fontWeight={700}>
          Typepe Admin
        </Typography>

        {/* Avatar */}
        <IconButton>
          <Avatar alt='profile' />
        </IconButton>
      </HeaderToolbar>
    </AppBar>
  );
};

export default AppHeader;
