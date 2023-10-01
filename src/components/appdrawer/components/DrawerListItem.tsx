import {TDrawerItem} from '@/types';

import {ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';

export interface IDrawerListItemProps extends TDrawerItem {
  navigateTo: () => void;
  isActive: boolean;
}

const DrawerListItem = (props: IDrawerListItemProps) => {
  const {icon, focusedIcon, label, navigateTo, isActive} = props;

  return (
    <ListItem>
      <ListItemButton onClick={navigateTo} sx={{borderRadius: 2}}>
        <ListItemIcon>{isActive ? focusedIcon : icon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography variant='body1' fontWeight={isActive ? 700 : 400}>
              {label}
            </Typography>
          }
        >
          {label}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerListItem;
