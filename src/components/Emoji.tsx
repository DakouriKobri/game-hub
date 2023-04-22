// NPM Packages
import { Image, ImageProps } from '@chakra-ui/react';

// Local Files
import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';

interface EmojiProps {
  rating: number;
}

export function Emoji({ rating }: EmojiProps) {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '35' },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
}
