// NPM Packages
import { useEffect, useState } from 'react';

// Local Files
import apiClient, {
  AxiosError,
  AxiosRequestConfig,
  CanceledError,
} from '../services/api-client';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      async function fetchGames() {
        setIsLoading(true);
        try {
          const response = await apiClient.get<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
          });
          setData(response.data.results);
          setIsLoading(false);
        } catch (error) {
          if (error instanceof CanceledError) return;
          setError((error as AxiosError).message);
          setIsLoading(false);
        }
      }

      fetchGames();

      return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { error, data, isLoading };
}

export default useData;
