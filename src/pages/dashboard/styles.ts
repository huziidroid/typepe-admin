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

export const ViewResourceText = styled(Typography)(({theme}) => ({color: theme.palette.primary.contrastText, fontSize: 14, fontWeight: '600'}));

export const RowContainer = styled(Box)(() => ({display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}));

export const CustomCardActions = styled(CardActions)(({theme}) => ({display: 'flex', justifyContent: 'space-between', backgroundColor: theme.palette.grey[700]}));

export const Main = withAttrs(
  styled(Card)({
    width: 300,
    height: 160,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }),
  {variant: 'elevation'},
);

export const CardContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: 20,
  rowGap: 20,
  flexBasis: '40%',
  flexWrap: 'wrap',
}));
