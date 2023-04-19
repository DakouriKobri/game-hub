// NPM Packages
import { HStack, Image, Text } from '@chakra-ui/react';

// Local Files
import logo from '../assets/logo.webp';

export function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize={'60px'} />
      <Text>NavBar</Text>
    </HStack>
  );
}
