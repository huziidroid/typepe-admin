import {useCallback} from 'react';
import {useMutation} from '@tanstack/react-query';

import {TShowLoading} from '@/types';
import {hideLoader, setToaster, showLoader, updateUser, useAppDispatch} from '@/store';
import {StorageService, queryClient} from '@/services';
import {AUTH_TOKEN_KEY} from '@/utils';

export const useLogout = ({showLoading = false}: TShowLoading) => {
  const dispatch = useAppDispatch();

  const logoutHelper = useCallback(
    (): Promise<string> =>
      new Promise(resolve => {
        setTimeout(() => {
          StorageService.removeItem(AUTH_TOKEN_KEY);
          dispatch(updateUser({user: null}));
          queryClient.invalidateQueries(['APP_USER']);
          resolve('Logged out successfully');
        }, 1500);
      }),
    [],
  );

  return useMutation(logoutHelper, {
    onMutate: () => showLoading && dispatch(showLoader()),
    onSettled: () => showLoading && dispatch(hideLoader()),
    onSuccess: data => dispatch(setToaster({type: 'success', message: data})),
  });
};
