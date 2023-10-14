import {anyPass, isEmpty, isNil, pathOr} from 'ramda';

import {TOfficial, TStandardObject} from '@/types';
import {ROUTES_NAMES} from './constants';

export const isEmptyOrNil = anyPass([isEmpty, isNil]);

export const getCurrentPath = (pathname: string) => {
  if (pathname.includes('dashboard')) {
    return ROUTES_NAMES.DASHBOARD;
  } else if (pathname.includes('verifier')) {
    return ROUTES_NAMES.VERIFIER_OFFICIAL;
  } else if (pathname.includes('patent')) {
    return ROUTES_NAMES.PATENT_OFFICIAL;
  } else if (pathname.includes('product')) {
    return ROUTES_NAMES.PRODUCTS;
  } else if (pathname.includes('stamp')) {
    return ROUTES_NAMES.STAMPS;
  } else if (pathname.includes('customer')) {
    return ROUTES_NAMES.CUSTOMER;
  } else {
    return ROUTES_NAMES.DASHBOARD;
  }
};

export const getOfficialInfo = (data: TOfficial | undefined): {info: TStandardObject[]; profileAvatar: string} => {
  const firstName = pathOr('', ['firstName'], data);
  const lastName = pathOr('', ['lastName'], data);
  const name = firstName && lastName ? `${firstName} ${lastName}` : '';

  const verificationStatus = pathOr('false', ['isOfficialVerified'], data) === 'false' ? 'Not Verified' : 'Verified';

  return {
    profileAvatar: pathOr('', ['profileImage'], data),
    info: [
      {label: 'Name', value: name},
      {label: 'Official ID', value: pathOr('', ['officialId'], data)},
      {label: 'Verification Status', value: verificationStatus},
      {label: 'Email', value: pathOr('', ['email'], data)},
      {label: 'Phone Number', value: pathOr('', ['phoneNumber'], data)},
      {label: 'Address', value: pathOr('', ['address'], data)},
      {label: 'Govt. ID', value: pathOr('', ['govtId'], data)},
      {label: 'Designation', value: pathOr('', ['designation'], data)},
    ],
  };
};
