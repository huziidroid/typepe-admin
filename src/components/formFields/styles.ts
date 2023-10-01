import {FormControl, FormLabel, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

export const StyledFormControl = styled(FormControl)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

export const StyledFormLabel = styled(FormLabel)(({theme}) => ({
  marginBottom: 5,
  fontWeight: 600,
  textTransform: 'uppercase',

  '& span': {
    fontStyle: 'italic',
    fontWeight: 'normal',
    textTransform: 'none',
    color: theme?.palette?.text?.primary,
  },
}));

export const StyledErrorText = styled(Typography)(({theme}: CustomThemeType) => ({
  marginTop: 8,
  color: theme?.palette?.error?.main,
  height: 20,
}));
