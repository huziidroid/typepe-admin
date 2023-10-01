import {Box, Card, CardActions, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import {withAttrs} from '@/styles';

export const IconContainer = styled(Box)(({theme}) => ({
  height: '4.5rem',
  width: '4.5rem',
  borderRadius: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.secondary.main,
}));

export const ViewResourceText = styled(Typography)(({theme}) => ({
  color: theme.palette.info.main,
  fontSize: 14,
  fontWeight: '600',
}));

export const CustomCardActions = styled(CardActions)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default,
}));

export const Main = withAttrs(
  styled(Card)({
    width: 340,
    height: 160,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }),
  {variant: 'elevation'},
);
