import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
}

export function GameCardContainer({ children }: BoxProps) {
  return (
    <Box borderRadius={10} overflow="hidden" width="300px">
      {children}
    </Box>
  );
}
