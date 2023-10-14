import {QueryClient} from '@tanstack/react-query';
import axios from 'axios';
import {StorageService} from '..';
import {AUTH_TOKEN_KEY, isEmptyOrNil} from '@/utils';

// staging
const BASE_URL = 'http://13.233.201.212:1108/';

// local
// const BASE_URL = 'http://localhost:1108/';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      retryDelay: 1000,
    },
    mutations: {},
  },
});

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Expose-Headers': 'set-cookie',
  },
});

axiosInstance.interceptors.request.use(async config => {
  if (!config.headers.Authorization) {
    const token = StorageService.getItem(AUTH_TOKEN_KEY);
    if (!isEmptyOrNil(token)) {
      config.headers.token = token;
    }
  }
  return config;
});
