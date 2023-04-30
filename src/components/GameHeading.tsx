// NPM Packages
import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export function GameHeading({ gameQuery }: GameHeadingProps) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" paddingLeft={2} marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}
