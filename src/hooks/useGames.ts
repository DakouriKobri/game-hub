// Local Files
import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient, { FetchResponse } from '../services/api-client';
import { Platform } from './usePlatforms';

export interface Game {
  id: 0;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

async function fetchGames(gameQueryParams: GameQuery) {
  return (
    await apiClient.get<FetchResponse<Game>>('/games', {
      params: {
        genres: gameQueryParams.genre?.id,
        parent_platforms: gameQueryParams.platform?.id,
        ordering: gameQueryParams.sortOrder,
        search: gameQueryParams.searchText,
      },
    })
  ).data;
}

function useGames(gameQuery: GameQuery) {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['/games', gameQuery],
    queryFn: () => fetchGames(gameQuery),
  });
}
export default useGames;
