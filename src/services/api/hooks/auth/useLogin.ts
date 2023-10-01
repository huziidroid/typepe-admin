import {TLoginPayload, TShowLoading} from '@/types';
import {useAppMutation} from '../../baseQueries';
import {axiosInstance, queryClient} from '../../config';
import {ROUTES} from '../../routes';
import {QueryResponse} from '../../types';
import {StorageService} from '@/services';
import {AUTH_TOKEN_KEY} from '@/utils';

type TLoginResponse = {
  access_token: string;
};

const onSuccess = (data: QueryResponse<TLoginResponse>) => {
  StorageService.setItem(AUTH_TOKEN_KEY, data.data.access_token);
  queryClient.invalidateQueries(['APP_USER']);
};
export const useLogin = ({showLoading = false}: TShowLoading) => {
  return useAppMutation<TLoginResponse, TLoginPayload>({queryFn: payload => axiosInstance.post(ROUTES.LOGIN, payload), showLoading, onSuccess});
};
