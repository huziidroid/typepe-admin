import {anyPass, isEmpty, isNil} from 'ramda';
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
  } else {
    return ROUTES_NAMES.DASHBOARD;
  }
};
