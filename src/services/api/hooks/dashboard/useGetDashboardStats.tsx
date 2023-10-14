import {useAppQuery} from '../../baseQueries';
import {axiosInstance} from '../../config';
import {ROUTES} from '../../routes';
import {TDashboardFilterParams, TDashboardStats, TShowLoading} from '@/types';

export const useGetDashboardStats = ({showLoading, endDate, startDate}: TDashboardFilterParams & TShowLoading) => {
  return useAppQuery<TDashboardStats>({queryKey: ['DASHBOARD_STATS', endDate, startDate], queryFn: () => axiosInstance.get(ROUTES.DASHBOARD, {params: {endDate, startDate}}), showLoading});
};
