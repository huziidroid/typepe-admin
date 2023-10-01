import {QueryKey, useInfiniteQuery, useMutation, useQuery} from '@tanstack/react-query';
import {useEffect} from 'react';
import {pathOr} from 'ramda';
import {AxiosError, AxiosResponse} from 'axios';

import {InfiniteQueryArgs, InfiniteQueryResponse, MutationArgs, QueryArgs, QueryErrorResponse, QueryResponse} from './types';
import {hideLoader, setToaster, showLoader, useAppDispatch} from '@/store';

export const useAppQuery = <TQueryData, TSelectData = TQueryData>(args: QueryArgs<TQueryData, TSelectData>) => {
  const {queryFn, queryKey, onError, onSuccess, select, showLoading, onSettled, options, refetchInterval} = args;

  const dispatch = useAppDispatch();

  const {isLoading, ...query} = useQuery<AxiosResponse<QueryResponse<TQueryData>>, AxiosError<QueryErrorResponse>, TSelectData, QueryKey>(queryKey, queryFn, {
    ...options,
    onSuccess: data => {
      if (onSuccess) onSuccess(data);
    },

    onError: error => {
      if (onError) onError(error);
      else {
        const message = pathOr('Something went wrong!', ['response', 'data', 'message'], error);
        dispatch(setToaster({type: 'error', message: message}));
      }
    },

    onSettled(data, error) {
      dispatch(hideLoader());
      if (onSettled) onSettled(data, error);
    },

    select: data => {
      const formattedData = pathOr(null, ['data', 'data'], data) as TSelectData;
      if (select) return select(data.data);
      return formattedData;
    },
    refetchInterval,
  });

  useEffect(() => {
    if (isLoading && showLoading) dispatch(showLoader());
  }, [isLoading]);

  return {isLoading, ...query};
};

export const useAppMutation = <TData, TVariables>(args: MutationArgs<TData, TVariables>) => {
  const {onError, onMutate, onSettled, onSuccess, queryFn, options, showLoading} = args;

  const dispatch = useAppDispatch();

  return useMutation(queryFn, {
    ...options,
    onSuccess: (data, variables) => {
      if (onSuccess) onSuccess(data.data, variables);
    },

    onMutate: variables => {
      if (showLoading) dispatch(showLoader());
      if (onMutate) onMutate(variables);
    },

    onError: (error, variables) => {
      if (onError) onError(error, variables);
      else {
        const message = pathOr('Something went wrong!', ['response', 'data', 'message'], error);
        dispatch(setToaster({type: 'error', message: message}));
      }
    },

    onSettled: (data, error) => {
      if (showLoading) dispatch(hideLoader());
      if (onSettled) onSettled(data?.data, error);
    },
  });
};

export const useAppInfineQuery = <TQueryData, TSelectData = TQueryData>(args: InfiniteQueryArgs<TQueryData, TSelectData>) => {
  const {queryKey, queryFn, onError, onSettled, onSuccess, options, select, showLoading, dataKey, refetchInterval} = args;
  const dispatch = useAppDispatch();

  const {isLoading, ...query} = useInfiniteQuery<AxiosResponse<InfiniteQueryResponse<TQueryData>>, AxiosError<QueryErrorResponse>, TSelectData, QueryKey>(queryKey, queryFn, {
    ...options,

    onSuccess: data => {
      if (onSuccess) onSuccess(data);
    },

    onError: error => {
      if (onError) onError(error);
      else {
        const message = pathOr('Something went wrong!', ['response', 'data', 'message'], error);
        dispatch(setToaster({type: 'error', message: message}));
      }
    },

    onSettled: (data, error) => {
      if (showLoading) dispatch(hideLoader());
      if (onSettled) onSettled(data, error);
    },

    select: data => {
      const formattedData = data.pages.flatMap(page => pathOr([], ['data', 'data', ...dataKey], page));
      if (select) {
        return {pageParams: data.pageParams, pages: select(formattedData)};
      }

      return {pageParams: data.pageParams, pages: formattedData};
    },

    getNextPageParam: lastPage => {
      const nextPage = lastPage.data.data?.next_page;
      const records = pathOr<TQueryData[]>([], ['data', 'data', ...dataKey], lastPage);
      if (records.length < 10) return undefined;
      return nextPage;
    },
    refetchInterval,
  });

  useEffect(() => {
    if (showLoading && isLoading) dispatch(showLoader());
  }, []);

  return {isLoading, ...query};
};
