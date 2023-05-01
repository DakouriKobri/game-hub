// NPM Packages
import { Badge } from '@chakra-ui/react';

interface CriticScoreProps {
  score: number;
}
export function CriticScore({ score }: CriticScoreProps) {
  let scoreColor = score > 75 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius={3}
      colorScheme={scoreColor}
    >
      {score}
    </Badge>
  );
}
