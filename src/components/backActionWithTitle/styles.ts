import {withAttrs} from '@/styles';
import {ChevronLeft} from '@mui/icons-material';
import {Paper} from '@mui/material';
import {styled} from '@mui/material/styles';

export const HeaderBar = styled(Paper)(() => ({
  display: 'flex',
  alignItems: 'center',
  height: '65px',
}));

export const ChevronLeftIcon = withAttrs(
  styled(ChevronLeft)(({theme}) => ({color: theme.palette.text.primary})),
  {fontSize: 'large'},
);
