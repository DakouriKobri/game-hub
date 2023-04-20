// NPM Packages
import axios, { AxiosError } from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3117577012e94c828d47e7ab5d668287',
  },
});

export { AxiosError };
