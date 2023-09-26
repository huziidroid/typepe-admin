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

// export const PhoneInputContainer = styled(Box)(({theme, error}: CustomThemeType & {error: 0 | 1}) => ({
//   display: 'flex',
//   alignItems: 'center',
//   width: '100%',
//   borderWidth: 1,
//   borderColor: error === 1 ? theme?.palette?.error?.main : theme?.palette?.border,
//   borderStyle: 'solid',
//   borderRadius: 8,
// }));

// export const StaticField = styled(Typography)(({theme}: CustomThemeType) => ({
//   padding: '15px 15px',
//   fontWeight: 400,
//   color: theme?.palette.text.secondary,
//   borderRightWidth: 1,
//   borderRightColor: theme?.palette.border,
//   borderRightStyle: 'solid',
// }));

// export const NumberField = styled(TextField)(() => ({
//   paddingLeft: 15,
//   '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
//     display: 'none',
//   },
//   '& input[type=number]': {
//     MozAppearance: 'textfield',
//   },
// }));

// export const DateWrapper = styled(Box)(() => ({
//   width: '100%',
// }));

// export const CustomChipStyled = styled(Box)(() => ({
//   marginRight: '10px',
//   minWidth: 'fit-content',
// }));
