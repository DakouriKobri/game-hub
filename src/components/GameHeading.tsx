// NPM Packages
import { Heading } from '@chakra-ui/react';

// Local Files
import { GameQuery } from '../App';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export function GameHeading({ gameQuery }: GameHeadingProps) {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" paddingLeft={2} marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}
