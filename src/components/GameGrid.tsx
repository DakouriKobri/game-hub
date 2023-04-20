// NPM Packages
import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

// Local Files
import apiClient, { AxiosError } from '../services/api-client';

interface Game {
  id: 0;
  name: 'string';
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await apiClient.get<FetchGamesResponse>('/games');
        setGames(response.data.results);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    }

    fetchGames();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul style={{ color: 'white' }}>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
}
