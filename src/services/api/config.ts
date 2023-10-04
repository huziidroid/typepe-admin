import {QueryClient} from '@tanstack/react-query';
import axios from 'axios';

// staging
// const BASE_URL = 'http://13.233.201.212:1108/';

// local
const BASE_URL = 'http://localhost:1108/';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
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
