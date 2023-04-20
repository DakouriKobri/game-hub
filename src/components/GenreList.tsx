// NPM Packages
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';

// Local Files
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

export function GenreList() {
  const { error, data: genres, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres &&
        genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
}
