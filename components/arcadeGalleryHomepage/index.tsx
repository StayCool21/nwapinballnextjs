import { Button, Divider, Grid, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AcmeLogo } from '../navbar/logo';
import { Flex } from '../styles/flex';
import Image from 'next/image';

const images = [
  { src: '/imagesfromclient/20240627_201406.jpg' },
  { src: '/imagesfromclient/20240627_224630.jpg' },
  { src: '/imagesfromclient/20240627_224732.jpg' },
  { src: '/imagesfromclient/20240627_224824.jpg' }
];

export const ArcadeGalleryHomepage = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Flex
        direction={'column'}
        align={'center'}
        css={{
          'pt': '$20',
          'px': '$6',
          '@md': {
            px: '$64',
          },
          position: 'relative', // Ensure the parent has a non-static position
        }}
      >
        <Text h2 css={{ textAlign: 'center' }}>
          Our gameroom features around 25 pinball machines, video arcade games, a full-size regulation air hockey table, Foosball table, shuffle alley (bowling) and a jukebox.
        </Text>
        <Image
          src={images[2].src}
          alt="Gallery Thumbnail"
          layout="responsive"
          width={100}
          height={100}
          style={{ cursor: 'pointer', maxWidth: '50%', height: 'auto', borderRadius: '10px' }}
          onClick={() => openLightbox(2)}
        />
        <Text h2 css={{
          textAlign: 'center',
          background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: '0.1em', // Add a small padding to the right
        }}>
          We’re more than a game arcade, we’re a community and social club of gaming enthusiasts.
        </Text>
      </Flex>
      {isOpen && (
        <Lightbox
          slides={images}
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          carousel={{}}
        />
      )}

      <Divider css={{ position: 'relative', width: '100%', mt: '$5' }} />
    </>
  );
};

export default ArcadeGalleryHomepage;