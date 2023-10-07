import {pathOr} from 'ramda';

import {TOfficial, TShowLoading} from '@/types';
import {isEmptyOrNil} from '@/utils';
import {useAppQuery} from '../../baseQueries';
import {axiosInstance} from '../../config';
import {ROUTES} from '../../routes';
import {QueryResponse} from '../../types';

type TResponse = {official: TOfficial};

const select = (data: QueryResponse<TResponse>): TOfficial => {
  const official = data.data.official;

  return {
    _id: pathOr('', ['_id'], official),
    address: pathOr('', ['address'], official),
    designation: pathOr('', ['designation'], official),
    email: pathOr('', ['email'], official),
    firstName: pathOr('', ['firstName'], official),
    govtId: pathOr('', ['govtId'], official),
    isOfficialVerified: pathOr(false, ['isOfficialVerified'], official),
    language: pathOr('english', ['language'], official),
    lastName: pathOr('', ['lastName'], official),
    officialId: pathOr('', ['officialId'], official),
    officialType: pathOr('verifier', ['officialType'], official),
    password: pathOr('', ['password'], official),
    phoneNumber: pathOr('', ['phoneNumber'], official),
    profileImage: pathOr('', ['profileImage'], official),
    signatureImage: pathOr('', ['signatureImage'], official),
    userType: pathOr('official', ['userType'], official),
  };
};

export const useGetOfficialDetails = ({officialId, showLoading}: TShowLoading & {officialId: string}) => {
  const isEnabled = !isEmptyOrNil(officialId);
  return useAppQuery<TResponse, TOfficial>({
    queryKey: ['OFFICIAL_DETAILS', officialId],
    queryFn: () => axiosInstance.get(`${ROUTES.OFFICIAL_DETAILS}/${officialId}`),
    showLoading,
    select,
    options: {enabled: isEnabled},
  });
};
