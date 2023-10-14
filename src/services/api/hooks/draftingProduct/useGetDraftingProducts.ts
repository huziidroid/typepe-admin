import {useAppQuery} from '../../baseQueries';
import {axiosInstance} from '../../config';
import {ROUTES} from '../../routes';
import {TDraftingProductListItem, TDraftingProductListItemWithAction, TShowLoading} from '@/types';
import {QueryResponse} from '../../types';
import {useGetTableFilterParams} from '@/utils';

type TResponse<T> = {draftingProducts: T[]; total: number};

const select = (data: QueryResponse<TResponse<TDraftingProductListItem>>): TResponse<TDraftingProductListItemWithAction> => {
  const products = data.data.draftingProducts.map((product): TDraftingProductListItemWithAction => {
    return {
      ...product,
      action: 'Details',
    };
  });

  return {draftingProducts: products, total: data.data.total};
};

export const useGetDraftingProducts = ({showLoading = false}: TShowLoading) => {
  const {handlePageChange, handlePageSizeChange, offset, onSearch, page, pageSize, searchText} = useGetTableFilterParams();

  const query = useAppQuery<TResponse<TDraftingProductListItem>, TResponse<TDraftingProductListItemWithAction>>({
    queryKey: ['DRAFTING_PRODUCTS', page, pageSize, searchText],
    queryFn: () => axiosInstance.get(ROUTES.GET_DRAFTING_PRODUCTS, {params: {limit: pageSize, offset, searchText}}),
    showLoading,
    select,
  });

  return {...query, handlePageChange, handlePageSizeChange, page, pageSize, onSearch};
};
