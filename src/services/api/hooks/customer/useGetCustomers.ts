import {pathOr} from 'ramda';
import {useCallback} from 'react';

import {useAppQuery} from '../../baseQueries';
import {useGetTableFilterParams} from '@/utils';
import {axiosInstance} from '../../config';
import {ROUTES} from '../../routes';
import {TCustomerListItem, TCustomerListItemWithAction, TShowLoading} from '@/types';
import {QueryResponse} from '../../types';

type TResponse<T> = {customers: T[]; total: number};

export const useGetCustomers = ({showLoading = false}: TShowLoading) => {
  const {handlePageChange, handlePageSizeChange, offset, onSearch, page, pageSize, searchText} = useGetTableFilterParams();

  const select = useCallback(
    (data: QueryResponse<TResponse<TCustomerListItem>>): TResponse<TCustomerListItemWithAction> => {
      const customers = data.data.customers.map((customer): TCustomerListItemWithAction => {
        return {
          _id: pathOr('', ['_id'], customer),
          customerId: pathOr('', ['customerId'], customer) || '-',
          email: pathOr('', ['email'], customer) || '-',
          name: pathOr('', ['name'], customer) || '-',
          phoneNumber: pathOr('', ['phoneNumber'], customer) || '-',
          profileImage: pathOr('', ['profileImage'], customer),
          address: pathOr('', ['address'], customer) || '-',
          govtId: pathOr('', ['govtId'], customer) || '-',
          action: 'Details',
        };
      });
      return {
        customers,
        total: data.data.total,
      };
    },
    [page, pageSize],
  );

  const query = useAppQuery<TResponse<TCustomerListItem>, TResponse<TCustomerListItemWithAction>>({
    queryKey: ['CUSTOMERS', page, pageSize, searchText],
    queryFn: () => axiosInstance.get(ROUTES.CUSTOMERS, {params: {limit: pageSize, offset, searchText}}),
    showLoading,
    select,
  });

  return {...query, handlePageChange, handlePageSizeChange, offset, onSearch, page, pageSize};
};
