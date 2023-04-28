// NPM Packages
import axios, { AxiosError, AxiosRequestConfig, CanceledError } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3117577012e94c828d47e7ab5d668287',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    return (await axiosInstance.get<FetchResponse<T>>(this.endpoint, config))
      .data;
  };
}

export type { AxiosRequestConfig };
export { AxiosError, CanceledError };
export default APIClient;
