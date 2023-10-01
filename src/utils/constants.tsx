import {Dashboard} from '@mui/icons-material';

import {AppTheme, PatentIcon, ProductIcon, VerifierIcon} from '@/assets';
import {TDrawerItem} from '@/types';

export enum ROUTES_NAMES {
  LOGIN = '/login',
  DASHBOARD = '/dashboard',
  VERIFIER_OFFICIAL = '/verifier-official',
  PRODUCTS = '/product',
  STAMPS = '/stamp',
  PATENT_OFFICIAL = '/patent-official',
}

export const DrawerItems: TDrawerItem[] = [
  {
    label: 'Dashboard',
    focusedIcon: <Dashboard color='primary' />,
    icon: <Dashboard color='disabled' />,
    route: ROUTES_NAMES.DASHBOARD,
  },
  {
    label: 'Products',
    focusedIcon: <ProductIcon />,
    icon: <ProductIcon color={AppTheme.palette.text.disabled} />,
    route: ROUTES_NAMES.PRODUCTS,
  },
  {
    label: 'Verifier Official',
    focusedIcon: <VerifierIcon />,
    icon: <VerifierIcon color={AppTheme.palette.text.disabled} />,
    route: ROUTES_NAMES.VERIFIER_OFFICIAL,
  },
  {
    label: 'Patent Official',
    icon: <PatentIcon color={AppTheme.palette.text.disabled} />,
    focusedIcon: <PatentIcon />,
    route: ROUTES_NAMES.PATENT_OFFICIAL,
  },
  {
    label: 'Stamps',
    icon: <PatentIcon color={AppTheme.palette.text.disabled} />,
    focusedIcon: <PatentIcon />,
    route: ROUTES_NAMES.STAMPS,
  },
];

export const DRAWER_WIDTH = 300;
