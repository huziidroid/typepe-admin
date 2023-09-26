import {Stack, styled} from '@mui/material';

export const ImageContainer = styled(Stack)(({theme}: CustomThemeType) => ({
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: theme?.palette.primaryContainer.main,
}));

export const FieldStack = styled(Stack)(() => ({
  minHeight: '100vh',
  justifyContent: 'center',
  padding: '0px 16px 0px 16px',
  margin: '0px 30px 0px 30px',
}));
