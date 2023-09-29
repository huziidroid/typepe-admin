import styled from '@emotion/styled';
import {TableCell} from '@mui/material';

export const HeaderCell = styled(TableCell)(({theme}: CustomThemeType) => ({
  fontSize: 14,
  fontWeight: 600,
  color: theme?.palette.text.disabled,
}));

export const RowCell = styled(TableCell)(({theme}: CustomThemeType) => ({
  fontSize: 16,
  fontWeight: 400,
  color: theme?.palette.text.primary,
}));
