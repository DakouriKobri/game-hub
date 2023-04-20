// Local Files
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const { background_image, name } = game;
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
      </CardBody>
    </Card>
  );
}
