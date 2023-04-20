// NPM Packages
import { useEffect, useState } from 'react';

// Local Files
import apiClient, { AxiosError, CanceledError } from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: 0;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function fetchGames() {
      try {
        const response = await apiClient.get<FetchGamesResponse>('/games', {
          signal: controller.signal,
        });
        setGames(response.data.results);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      }
    }

    fetchGames();

    return () => controller.abort();
  }, []);

  return { error, games };
}

export default useGames;
