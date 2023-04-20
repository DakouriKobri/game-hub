// NPM Packages
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';

// Local Files
import { Game } from '../hooks/useGames';
import { PlatformIconList } from './PlatformIconList';
import { CriticScore } from './CriticScore';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const { background_image, name, metacritic, parent_platforms } = game;
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={parent_platforms.map((item) => item.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}
