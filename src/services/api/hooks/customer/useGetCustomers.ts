import {pathOr} from 'ramda';

import {useAppQuery} from '../../baseQueries';
import {useGetTableFilterParams} from '@/utils';
import {axiosInstance} from '../../config';
import {ROUTES} from '../../routes';
import {TCustomer, TCustomerListItemWithAction, TShowLoading} from '@/types';
import {QueryResponse} from '../../types';

type TResponse<T> = {customers: T[]; total: number};

export const useGetCustomers = ({showLoading = false}: TShowLoading) => {
  const {handlePageChange, handlePageSizeChange, offset, onSearch, page, pageSize, searchText} = useGetTableFilterParams();

  const select = (data: QueryResponse<TResponse<TCustomer>>): TResponse<TCustomerListItemWithAction> => {
    const customers = data.data.customers.map((customer): TCustomerListItemWithAction => {
      const firstName = pathOr('', ['firstName'], customer);
      const lastName = pathOr('', ['lastName'], customer);

      return {
        _id: pathOr('', ['_id'], customer) || '-',
        customerId: pathOr('', ['customerId'], customer) || '-',
        email: pathOr('', ['email'], customer) || '-',
        name: firstName && lastName ? `${firstName} ${lastName}` : '-',
        phoneNumber: pathOr('', ['phoneNumber'], customer) || '-',
        profileImage: pathOr('', ['profileImage'], customer),
        action: 'Details',
      };
    });
    return {
      customers,
      total: data.data.total,
    };
  };

  const query = useAppQuery<TResponse<TCustomer>, TResponse<TCustomerListItemWithAction>>({
    queryKey: ['CUSTOMERS', page, pageSize, searchText],
    queryFn: () => axiosInstance.get(ROUTES.CUSTOMERS, {params: {limit: pageSize, offset, searchText}}),
    showLoading,
    select,
  });

  return {...query, handlePageChange, handlePageSizeChange, offset, onSearch, page, pageSize};
};
