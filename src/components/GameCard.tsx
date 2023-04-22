// NPM Packages
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

// Local Files
import { Game } from '../hooks/useGames';
import { PlatformIconList } from './PlatformIconList';
import { CriticScore } from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const { background_image, name, metacritic, parent_platforms } = game;
  return (
    <Card>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms.map((item) => item.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="2xl">{name}</Heading>
      </CardBody>
    </Card>
  );
}
