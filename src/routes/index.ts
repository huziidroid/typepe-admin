import {createBrowserRouter} from 'react-router-dom';
import {AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES} from './config';

export const AUTHENTICATED_ROUTER = createBrowserRouter(AUTHENTICATED_ROUTES);
export const UNAUTHENTICATED_ROUTER = createBrowserRouter(UNAUTHENTICATED_ROUTES);
