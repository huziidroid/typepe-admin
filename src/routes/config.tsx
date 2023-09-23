import {Navigate, RouteObject} from 'react-router-dom';

import {DashboardPage, LoginPage} from '@/pages';
import {ROUTES_NAMES} from '@/utils';

export const AUTHENTICATED_ROUTES: RouteObject[] = [
  {
    path: '/*',
    children: [
      {element: <Navigate to={ROUTES_NAMES.DASHBOARD} replace />, path: '*'},
      {element: <DashboardPage />, path: ROUTES_NAMES.DASHBOARD, caseSensitive: true},
    ],
  },
];

export const UNAUTHENTICATED_ROUTES: RouteObject[] = [
  {
    path: '/*',
    children: [
      {element: <Navigate to={ROUTES_NAMES.LOGIN} replace />, path: '*'},
      {element: <LoginPage />, path: ROUTES_NAMES.LOGIN, caseSensitive: true},
    ],
  },
];
