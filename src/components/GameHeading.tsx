// NPM Packages
import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export function GameHeading({ gameQuery }: GameHeadingProps) {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;
  return (
    <Heading as="h1" paddingLeft={2} marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}
