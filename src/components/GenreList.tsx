// Local Files
import { Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

export function GenreList() {
  const { error, genres, isLoading } = useGenres();

  return (
    <ul>
      {genres &&
        genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
    </ul>
  );
}
