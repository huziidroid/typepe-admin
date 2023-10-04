/* eslint-disable @typescript-eslint/no-unused-vars */
import {Description, Group} from '@mui/icons-material';
import {useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {Dayjs} from 'dayjs';

import {PatentIcon, VerifierIcon} from '@/assets';
import {ROUTES_NAMES} from '@/utils';
import {TDashboardFilterParams} from '@/types';

type FilterDate = Dayjs | null;

export type FilterStateType = {startDate: FilterDate; endDate: FilterDate};

export const FilterInitailState: FilterStateType = {startDate: null, endDate: null};

export const useGetDashboardCardInfo = ({startDate, endDate}: TDashboardFilterParams) => {
  const navigate = useNavigate();

  return useMemo(
    () => [
      {
        label: 'Patent Officials',
        count: 9,
        icon: <PatentIcon height={30} width={30} />,
        navigateTo: () => navigate(ROUTES_NAMES.PATENT_OFFICIAL),
      },
      {
        label: 'Verifier Officials',
        count: 9,
        icon: <VerifierIcon height={30} width={30} />,
        navigateTo: () => navigate(ROUTES_NAMES.PATENT_OFFICIAL),
      },
      {
        label: 'Customers',
        count: 9,
        icon: <Group fontSize='large' color='primary' />,
        navigateTo: () => navigate(ROUTES_NAMES.PATENT_OFFICIAL),
      },
      {
        label: 'Drafting Products',
        count: 9,
        icon: <Description color='primary' fontSize='large' />,
        navigateTo: () => navigate(ROUTES_NAMES.PATENT_OFFICIAL),
      },
    ],
    [],
  );
};
