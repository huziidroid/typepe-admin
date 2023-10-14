/* eslint-disable @typescript-eslint/no-unused-vars */
import {Description, Group} from '@mui/icons-material';
import {useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {Dayjs} from 'dayjs';

import {PatentIcon, VerifierIcon} from '@/assets';
import {ROUTES_NAMES} from '@/utils';
import {TDashboardFilterParams, TDashboardStats} from '@/types';
import {useGetDashboardStats} from '@/services';

type FilterDate = Dayjs | null;

export type FilterStateType = {startDate: FilterDate; endDate: FilterDate};

export const FilterInitailState: FilterStateType = {startDate: null, endDate: null};

export const useGetDashboardCardInfo = ({startDate, endDate}: TDashboardFilterParams) => {
  const navigate = useNavigate();
  const {data = {}} = useGetDashboardStats({showLoading: true, startDate, endDate});
  const {customers = 0, draftingProducts = 0, patentOfficals = 0, verifierOfficials = 0} = data as TDashboardStats;

  return useMemo(
    () => [
      {
        label: 'Patent Officials',
        count: patentOfficals,
        icon: <PatentIcon height={30} width={30} />,
        navigateTo: () => navigate(ROUTES_NAMES.PATENT_OFFICIAL),
      },
      {
        label: 'Verifier Officials',
        count: verifierOfficials,
        icon: <VerifierIcon height={30} width={30} />,
        navigateTo: () => navigate(ROUTES_NAMES.VERIFIER_OFFICIAL),
      },
      {
        label: 'Customers',
        count: customers,
        icon: <Group fontSize='large' color='primary' />,
        navigateTo: () => navigate(ROUTES_NAMES.CUSTOMER),
      },
      {
        label: 'Drafting Products',
        count: draftingProducts,
        icon: <Description color='primary' fontSize='large' />,
        navigateTo: () => navigate(ROUTES_NAMES.PRODUCTS),
      },
    ],
    [customers, draftingProducts, patentOfficals, verifierOfficials],
  );
};
