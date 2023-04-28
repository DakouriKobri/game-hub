// NPM Packages
import axios, { AxiosError, AxiosRequestConfig, CanceledError } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3117577012e94c828d47e7ab5d668287',
  },
});

export type { AxiosRequestConfig };
export { AxiosError, CanceledError };
