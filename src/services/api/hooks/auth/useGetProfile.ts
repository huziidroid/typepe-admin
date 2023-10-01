import {useCallback} from 'react';
import {pathOr} from 'ramda';

import {TShowLoading, TUser} from '@/types';
import {useAppQuery} from '../../baseQueries';
import {axiosInstance} from '../../config';
import {ROUTES} from '../../routes';
import {updateUser, useAppDispatch} from '@/store';
import {StorageService} from '@/services';
import {AUTH_TOKEN_KEY} from '@/utils';

export const useGetProfile = ({showLoading = false}: TShowLoading) => {
  const dispatch = useAppDispatch();

  const onSuccess = useCallback((user: TUser) => {
    dispatch(
      updateUser({
        user: {
          _id: pathOr('', ['_id'], user),
          email: pathOr('', ['email'], user),
          name: pathOr('', ['name'], user),
          password: pathOr('', ['password'], user),
          type: pathOr('', ['type'], user),
        },
      }),
    );
  }, []);

  return useAppQuery<TUser>({
    queryKey: ['APP_USER'],
    queryFn: () => {
      const token = StorageService.getItem(AUTH_TOKEN_KEY);
      return axiosInstance.get(ROUTES.PROFILE, {headers: {token: token}});
    },
    showLoading,
    onSuccess,
  });
};
