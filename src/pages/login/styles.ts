import {Stack} from '@mui/material';
import {styled} from '@mui/material/styles';

export const BrandLogoContainer = styled(Stack)(({theme}: CustomThemeType) => ({
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: theme?.palette.primaryContainer.main,
}));

export const FieldStack = styled(Stack)(() => ({
  minHeight: '100vh',
  justifyContent: 'center',
  padding: '0px 40px 0px 40px',
}));
