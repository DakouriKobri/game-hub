// NPM Packages
import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface BoxProps {
  children: ReactNode;
}

export function GameCardContainer({ children }: BoxProps) {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}
