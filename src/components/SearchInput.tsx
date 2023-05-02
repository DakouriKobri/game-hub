// NPM Packages
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

// Local Files
import useGameQueryStore from '../store';

export function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      style={{}}
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) setSearchText(inputRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}
