import {SnackbarOrigin} from '@mui/material';

// pagination table Types
export type TCellVariant = 'checkbox' | 'button' | 'avatar' | 'text' | 'switch' | 'custom';

export type TCellAction<T> = {type?: TCellVariant; callback?: (args: T) => void; component?: (args: T) => React.ReactElement};

export type TActionOnRow<T> = {action: string} & T;

export type TableDataType<T> = Array<{[K in keyof T]: T[K]}>;
export type TableColumns<T> = Array<keyof T>;

// Drawer types

export type TUserLanguage = 'english' | 'hindi';
export type UserType = 'customer' | 'official';
export type OfficialType = 'patent' | 'verifier';

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

export type TProductFormSchema = Record<string, string[]>;

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

export type TDashboardStats = {
  customers: number;
  draftingProducts: number;
  patentOfficals: number;
  verifierOfficials: number;
};

export type TCustomerListItem = {
  _id: string;
  customerId: string;
  email: string;
  name: string;
  phoneNumber: string;
  govtId: string;
  address: string;
  profileImage: string;
};

export type TCustomer = {
  _id: string;
  email: string;
  password: string;
  userType: UserType;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  signatureImage: string;
  language: TUserLanguage;
  profileImage: string;
  address: string;
  govtId: string;
  customerId: string;
};

export type TCustomerListItemWithAction = TActionOnRow<TCustomerListItem>;

export type TOfficialListItem = {
  _id: string;
  officialId: string;
  name: string;
  govtId: string;
  designation: string;
  profileImage: string;
  verified: boolean;
};

export type TOfficial = {
  _id: string;
  email: string;
  password: string;
  userType: UserType;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  signatureImage: string;
  language: TUserLanguage;
  profileImage: string;
  address: string;
  govtId: string;
  isOfficialVerified: boolean;
  officialId: string;
  designation: string;
  officialType: OfficialType;
};

export type TOfficialListItemWithAction = TActionOnRow<TOfficialListItem>;

export type TDraftingProductListItem = {
  _id: string;
  productId: string;
  title: string;
  numberOfParties: number;
  productPrice: number;
  discountPercentage: number;
};

export type TDraftingProductListItemWithAction = TActionOnRow<TDraftingProductListItem>;
