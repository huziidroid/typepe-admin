import {AppBar, Avatar, Box, IconButton, Typography} from '@mui/material';
import {Menu} from '@mui/icons-material';

import {HeaderToolbar} from './styles';

const AppHeader = () => {
  return (
    <Box>
      <AppBar>
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
    </Box>
  );
};

export default AppHeader;
