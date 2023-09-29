import styled from '@emotion/styled';
import {Box} from '@mui/material';

/* eslint-disable react/display-name */
export const withAttrs =
  <P extends object>(Component: React.ComponentType<P>, attrs: Partial<P>) =>
  (props: P) => <Component {...attrs} {...props} />;

export const RowBetween = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const Row = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));
