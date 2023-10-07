import {useCallback} from 'react';
import {pathOr} from 'ramda';

import {useAppQuery} from '../../baseQueries';
import {OfficialType, TOfficialListItem, TOfficialListItemWithAction, TShowLoading} from '@/types';
import {axiosInstance} from '../../config';
import {ROUTES} from '../../routes';
import {useGetTableFilterParams} from '@/utils';
import {QueryResponse} from '../../types';

type TResponse<T> = {officials: T[]; total: number};

export const useGetOfficials = ({officialType, showLoading = false}: TShowLoading & {officialType: OfficialType}) => {
  const {handlePageChange, handlePageSizeChange, offset, onSearch, page, pageSize, searchText} = useGetTableFilterParams();

  const select = useCallback(
    (data: QueryResponse<TResponse<TOfficialListItem>>): TResponse<TOfficialListItemWithAction> => {
      const officials = data.data.officials.map((official): TOfficialListItemWithAction => {
        return {
          _id: pathOr('', ['_id'], official),
          designation: pathOr('', ['designation'], official) || '-',
          govtId: pathOr('', ['govtId'], official) || '-',
          name: pathOr('', ['name'], official) || '-',
          officialId: pathOr('', ['officialId'], official) || '-',
          profileImage: pathOr('', ['profileImage'], official) || '-',
          verified: pathOr(false, ['verified'], official),
          action: 'Details',
        };
      });

      return {officials, total: data.data.total};
    },
    [page, pageSize],
  );

  const query = useAppQuery<TResponse<TOfficialListItem>, TResponse<TOfficialListItemWithAction>>({
    queryKey: ['OFFICIALS', officialType, page, pageSize, searchText],
    queryFn: () => axiosInstance.get(`${ROUTES.OFFICIALS}/${officialType}`, {params: {limit: pageSize, offset, searchText}}),
    showLoading,
    select,
  });
  return {...query, handlePageChange, handlePageSizeChange, page, pageSize, onSearch};
};
