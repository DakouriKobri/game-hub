// NPM Packages
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

// Local Files
import { Game } from '../hooks/useGames';
import { PlatformIconList } from './PlatformIconList';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const { background_image, name, parent_platforms } = game;
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <PlatformIconList
          platforms={parent_platforms.map((item) => item.platform)}
        />
      </CardBody>
    </Card>
  );
}
