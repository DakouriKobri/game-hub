// NPM Packages
import { Text } from '@chakra-ui/react';

// Local Files
import useGames from '../hooks/useGames';

export function GameGrid() {
  const { error, games } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul style={{ color: 'white' }}>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
}
