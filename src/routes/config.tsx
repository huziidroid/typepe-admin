import {Navigate, RouteObject} from 'react-router-dom';

import {CustomerDetailsPage, CustomersPage, DashboardPage, LoginPage, PatentOfficialPage, ProductsPage, StampPage, VerifierOfficialPage} from '@/pages';

export const AUTHENTICATED_ROUTES: RouteObject[] = [
  {
    path: '/*',
    children: [
      {element: <Navigate to='dashboard' replace />, path: '*'},
      {element: <DashboardPage />, path: 'dashboard', caseSensitive: true},
      {element: <VerifierOfficialPage />, path: 'verifier-official', caseSensitive: true},
      {element: <PatentOfficialPage />, path: 'patent-official', caseSensitive: true},
      {element: <CustomersPage />, path: 'customer', caseSensitive: true},
      {element: <CustomerDetailsPage />, path: 'customer/:_id', caseSensitive: true},
      {element: <ProductsPage />, path: 'product', caseSensitive: true},
      {element: <StampPage />, path: 'stamp', caseSensitive: true},
    ],
  },
];

export const UNAUTHENTICATED_ROUTES: RouteObject[] = [
  {
    path: '/*',
    children: [
      {element: <Navigate to='login' replace />, path: '*'},
      {element: <LoginPage />, path: 'login', caseSensitive: true},
    ],
  },
];
