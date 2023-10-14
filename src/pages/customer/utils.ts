import {pathOr} from 'ramda';

import {TCustomer, TStandardObject} from '@/types';

type CustomerDetailsInfo = {
  info: TStandardObject[];
  profileAvatar: string;
};

export const getCustomerInfo = (data: TCustomer | undefined): CustomerDetailsInfo => {
  const firstName = pathOr('', ['firstName'], data);
  const lastName = pathOr('', ['lastName'], data);
  const name = firstName && lastName ? `${firstName} ${lastName}` : '';

  return {
    profileAvatar: pathOr('', ['profileImage'], data),
    info: [
      {label: 'Name', value: name},
      {label: 'Customer ID', value: pathOr('', ['customerId'], data)},
      {label: 'Email', value: pathOr('', ['email'], data)},
      {label: 'Phone Number', value: pathOr('', ['phoneNumber'], data)},
      {label: 'Address', value: pathOr('', ['address'], data)},
      {label: 'Govt. ID', value: pathOr('', ['govtId'], data)},
      //   {label: 'App Language', value: pathOr('', ['language'], data)},
    ],
  };
};
