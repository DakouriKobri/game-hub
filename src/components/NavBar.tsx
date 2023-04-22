// NPM Packages
import { HStack, Image } from '@chakra-ui/react';

// Local Files
import logo from '../assets/logo.webp';
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInput } from './SearchInput';

interface NavbarProps {
  onSearch: (searchText: string) => void;
}
export function NavBar({ onSearch }: NavbarProps) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={'60px'} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}
