export {default as StorageService} from './storageService';

export {ROUTES} from './api/routes';
export {axiosInstance, queryClient} from './api/config';
export {useAppInfineQuery, useAppMutation, useAppQuery} from './api/baseQueries';

// auth hooks

export {useLogin} from './api/hooks/auth/useLogin';
export {useGetProfile} from './api/hooks/auth/useGetProfile';
export {useLogout} from './api/hooks/auth/useLogout';

// customers
export {useGetCustomers} from './api/hooks/customer/useGetCustomers';
