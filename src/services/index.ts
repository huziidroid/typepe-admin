export {default as StorageService} from './storageService';

export {ROUTES} from './api/routes';
export {axiosInstance, queryClient} from './api/config';
export {useAppInfineQuery, useAppMutation, useAppQuery} from './api/baseQueries';

// auth hooks
export {useLogin} from './api/hooks/auth/useLogin';
export {useGetProfile} from './api/hooks/auth/useGetProfile';
export {useLogout} from './api/hooks/auth/useLogout';

// dashboard
export {useGetDashboardStats} from './api/hooks/dashboard/useGetDashboardStats';

// customers
export {useGetCustomers} from './api/hooks/customer/useGetCustomers';
export {useGetCustomerDetails} from './api/hooks/customer/useGetCustomerDetails';

// official
export {useGetOfficials} from './api/hooks/official/useGetOfficials';
export {useUpdateOfficialVerificationStatus} from './api/hooks/official/useUpdateOfficialVerificationStatus';
export {useGetOfficialDetails} from './api/hooks/official/useGetOfficialDetails';
