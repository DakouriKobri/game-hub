// NPM Packages
import { HStack, Image } from '@chakra-ui/react';

// Local Files
import logo from '../assets/logo.webp';
import { ColorModeSwitch } from './ColorModeSwitch';

export function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize={'60px'} />
      <ColorModeSwitch />
    </HStack>
  );
}
