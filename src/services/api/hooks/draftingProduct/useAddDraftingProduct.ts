/* eslint-disable @typescript-eslint/ban-ts-comment */

import {TShowLoading} from '@/types';
import {useAppMutation} from '../../baseQueries';
import {axiosInstance, queryClient} from '../../config';
import {ROUTES} from '../../routes';
import {TAddDraftingProductPayload} from '../../types';

const prepareFormData = (data: TAddDraftingProductPayload) => {
  const payload = new FormData();

  payload.append('title', data.title);
  // @ts-ignore
  payload.append('numberOfParties', data.numberOfParties);
  // @ts-ignore
  payload.append('discountPercentage', data.discountPercentage);
  payload.append('productFile', data.productFile);
  // @ts-ignore
  payload.append('productForm', JSON.stringify(data.productForm));
  // @ts-ignore
  payload.append('productPrice', data.productPrice);

  return payload;
};

const onSuccess = () => {
  queryClient.invalidateQueries(['DRAFTING_PRODUCTS']);
};

export const useAddDraftingProduct = ({showLoading = false}: TShowLoading) => {
  return useAppMutation<unknown, TAddDraftingProductPayload>({
    queryFn: payload => axiosInstance.post(ROUTES.ADD_DRAFTING_PRODUCT, prepareFormData(payload), {headers: {'Content-Type': 'multipart/form-data'}}),
    showLoading,
    onSuccess,
  });
};
