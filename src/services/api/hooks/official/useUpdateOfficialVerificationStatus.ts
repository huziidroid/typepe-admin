import {useCallback} from 'react';

import {useAppMutation} from '../../baseQueries';
import {axiosInstance, queryClient} from '../../config';
import {ROUTES} from '../../routes';
import {TShowLoading} from '@/types';
import {QueryResponse, TOfficialVerificationStatusPayload} from '../../types';
import {setToaster, useAppDispatch} from '@/store';

export const useUpdateOfficialVerificationStatus = ({showLoading = false}: TShowLoading) => {
  const dispatch = useAppDispatch();
  const onSuccess = useCallback((data: QueryResponse<unknown>) => {
    dispatch(setToaster({type: 'success', message: data.message}));
    queryClient.invalidateQueries(['OFFICIALS']);
  }, []);

  return useAppMutation<unknown, TOfficialVerificationStatusPayload>({queryFn: payload => axiosInstance.post(ROUTES.OFFICIAL_VERIFICATION, payload), showLoading, onSuccess});
};
