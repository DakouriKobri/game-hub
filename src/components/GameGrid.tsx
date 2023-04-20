// NPM Packages
import { SimpleGrid, Text } from '@chakra-ui/react';

// Local Files
import useGames from '../hooks/useGames';
import { GameCard } from './GameCard';

export function GameGrid() {
  const { error, games } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {games && games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
}
