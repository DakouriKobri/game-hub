// NPM Packages
import { Text } from '@chakra-ui/react';

// Local Files
import useGenres from '../hooks/useGenres';

export function GenreList() {
  const { error, data: genres, isLoading } = useGenres();

  return (
    <ul>
      {genres &&
        genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
    </ul>
  );
}
