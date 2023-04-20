// NPM Packages
import { useEffect, useState } from 'react';

// Local Files
import apiClient, { AxiosError, CanceledError } from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGames() {
      setIsLoading(true);
      try {
        const response = await apiClient.get<FetchGenresResponse>('/genres', {
          signal: controller.signal,
        });
        setGenres(response.data.results);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setIsLoading(false);
      }
    }

    fetchGames();

    return () => controller.abort();
  }, []);

  return { error, genres, isLoading };
}

export default useGenres;
