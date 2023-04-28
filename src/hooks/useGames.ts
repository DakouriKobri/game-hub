// Local Files
import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { Platform } from './usePlatforms';
import APIClient, { FetchResponse } from '../services/api-client';

export interface Game {
  id: 0;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const gameService = new APIClient<Game>('/games');

function useGames(gameQuery: GameQuery) {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['/games', gameQuery],
    queryFn: () =>
      gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });
}
export default useGames;
