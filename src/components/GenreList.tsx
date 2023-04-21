// NPM Packages
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from '@chakra-ui/react';

// Local Files
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
export function GenreList({ onSelectGenre, selectedGenre }: GenreListProps) {
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
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
}
