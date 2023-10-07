import {InfiniteData, MutationFunction, MutationOptions, QueryFunction, QueryKey, UseInfiniteQueryOptions, UseQueryOptions} from '@tanstack/react-query';

import {AxiosError, AxiosResponse} from 'axios';

export type OtherResponseData = {message: string; response: number; success: number};

type data<T> = {[k: string]: T[]};

export type InfiniteQueryResponse<T> = {
  data: {
    previous_page: number;
    next_page: number;
    // total: number; // this is changing, needs to be same i.e., total from Backend
    current_page: number;
  } & data<T>;
} & OtherResponseData;

export type QueryErrorResponse = {data: Record<string, string>} & OtherResponseData;

export type QueryResponse<T> = {data: T} & OtherResponseData;

export type QueryArgs<TQueryData, TSelectData = TQueryData> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<AxiosResponse<QueryResponse<TQueryData>>>;
  onSuccess?: (data: TQueryData | TSelectData) => void;
  onSettled?: (data: TSelectData | undefined, error: AxiosError<QueryErrorResponse> | null) => void;
  select?: (data: QueryResponse<TQueryData>) => TSelectData;
  onError?: (error: AxiosError<QueryErrorResponse>) => void;
  showLoading?: boolean;
  refetchInterval?: number | false;
  options?: Omit<UseQueryOptions<AxiosResponse<QueryResponse<TQueryData>>, AxiosError<QueryErrorResponse>>, 'onSuccess' | 'onError | onSettled' | 'refetchInterval' | 'select'>;
};

export type MutationArgs<TData, TVariables> = {
  queryFn: MutationFunction<AxiosResponse<QueryResponse<TData>>, TVariables>;
  onSuccess?: (data: QueryResponse<TData>, variables: TVariables) => void;
  onError?: (error: AxiosError<QueryErrorResponse>, variables: TVariables) => void;
  onSettled?: (data: QueryResponse<TData> | undefined, error: AxiosError<QueryErrorResponse> | null) => void;
  onMutate?: (variables: TVariables) => void;
  showLoading?: boolean;
  options?: Omit<MutationOptions<QueryResponse<TData>, AxiosError<QueryErrorResponse>>, 'onMutate' | 'onSuccess' | 'onError' | 'onSettled'>;
};

export type InfiniteQueryArgs<TQueryData, TSelectData = TQueryData> = {
  queryKey: QueryKey;
  dataKey: string[];
  queryFn: QueryFunction<AxiosResponse<InfiniteQueryResponse<TQueryData>>>;
  showLoading?: boolean;
  refetchInterval?: number | false;
  onSuccess?: (data: InfiniteData<TSelectData>) => void;
  onError?: (data: AxiosError<QueryErrorResponse>) => void;
  onSettled?: (data: InfiniteData<TSelectData> | undefined, error: AxiosError<QueryErrorResponse> | null) => void;
  select?: (data: TQueryData[]) => TSelectData[];
  options?: Omit<
    UseInfiniteQueryOptions<AxiosResponse<InfiniteQueryResponse<TQueryData>>, AxiosError<QueryErrorResponse>>,
    'onSuccess' | 'onError' | 'onSettled' | 'select' | 'getNextPageParam' | 'refetchInterval'
  >;
};

export type TOfficialVerificationStatusPayload = {
  officialId: string;
  verificationStatus: boolean;
};
