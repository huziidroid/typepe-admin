import {pathOr} from 'ramda';

import {isEmptyOrNil} from '@/utils';
import {useAppQuery} from '../../baseQueries';
import {axiosInstance} from '../../config';
import {ROUTES} from '../../routes';
import {TCustomer, TShowLoading} from '@/types';
import {QueryResponse} from '../../types';

type TResponse = {customer: TCustomer};

const select = (data: QueryResponse<TResponse>): TCustomer => {
  const customer = data.data.customer;
  return {
    _id: pathOr('', ['_id'], customer),
    address: pathOr('', ['address'], customer),
    customerId: pathOr('', ['customerId'], customer),
    email: pathOr('', ['email'], customer),
    firstName: pathOr('', ['firstName'], customer),
    govtId: pathOr('', ['govtId'], customer),
    language: pathOr('english', ['language'], customer),
    lastName: pathOr('', ['lastName'], customer),
    password: pathOr('', ['password'], customer),
    phoneNumber: pathOr('', ['phoneNumber'], customer),
    profileImage: pathOr('', ['profileImage'], customer),
    signatureImage: pathOr('', ['signatureImage'], customer),
    userType: pathOr('customer', ['userType'], customer),
  };
};

export const useGetCustomerDetails = ({customerId, showLoading = false}: TShowLoading & {customerId: string}) => {
  const isEnabled = !isEmptyOrNil(customerId);
  return useAppQuery<TResponse, TCustomer>({
    queryKey: ['CUSTOMER_DETAILS'],
    queryFn: () => axiosInstance.get(`${ROUTES.CUSTOMER_DETAILS}/${customerId}`),
    showLoading,
    select,
    options: {enabled: isEnabled},
  });
};
