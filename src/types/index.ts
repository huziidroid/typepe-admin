import {SnackbarOrigin} from '@mui/material';

// pagination table Types
export type TCellVariant = 'checkbox' | 'button' | 'avatar' | 'text' | 'switch' | 'custom';

export type TCellAction<T> = {type?: TCellVariant; callback?: (args: T) => void; component?: (args: T) => React.ReactElement};

export type TableDataType<T> = Array<{[K in keyof T]: T[K]}>;
export type TableColumns<T> = Array<keyof T>;

// Drawer types

export type TDrawerItem = {
  label: string;
  icon: React.ReactNode;
  focusedIcon: React.ReactNode;
  route: string;
};

// snackbar
export type AlertType = 'error' | 'info' | 'success' | 'warning' | undefined;
export type SnackBarType = {
  autoHideDuration?: number;
  anchorOrigin?: SnackbarOrigin;
  type: AlertType;
  message: string;
};

// generics
export type TStandardObject = {
  label: string;
  value: string | number;
};

export type TSvgIconProps = {
  height?: string | number;
  width?: string | number;
  color?: string;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  type: string;
};

export type TShowLoading = {
  showLoading: boolean;
};

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TDashboardFilterParams = {startDate: number | null; endDate: number | null};
