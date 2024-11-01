import { Button, Card, Divider, Text, Image } from '@nextui-org/react';
import React from 'react';
import { QuotesIcon } from '../components/icons/QuotesIcon';
import { Box } from '../components/styles/box';
import { Flex } from '../components/styles/flex';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import { Footer } from '../components/footer';

const AboutUsPage: React.FC = () => {
  return (
    <Layout>
      <Nav />
      <Flex
        direction={'column'}
        css={{
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
          px: '$6',
          py: '$20',
          '@sm': {
            px: '$32',
          },
          '@md': {
            px: '$64',
          },
        }}
      >
        {/* Header Section */}
        <Box css={{ textAlign: 'center' }}>
        <Text
          h1
          css={{
            display: 'inline',
            background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          // color="primary"
          >
          Our Gameroom: Station Break
          </Text>
          {/* <Text h3>Our Gameroom</Text> */}
        </Box>

        {/* Description Section */}
        <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
          <Text>
            Our gameroom is themed after Station Break, a large chain of arcades in the 1980&apos;s. There were around 40 locations in the USA. Station Break was owned by Time-Out back then. Today, all the original locations are long gone (the copyrights and IP has expired). Our gameroom has the Station Break logo, wall numbers, paint color and other signs are all a recreation of what an original Station Break looked like. The bottom picture is an actual Station Break from the 1980&apos;s.
          </Text>
          <Text h4 css={{
            display: 'inline',
            background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
          }}>
            Why do we have a themed gameroom, you asked? Anyone can throw a bunch of games in a room and call it an arcade.
          </Text>
          <Text>
            We wanted to create a flashback experience from the 1980&apos;s. We even have a working payphone in our Station Break arcade.
          </Text>
        </Box>

        {/* Image Gallery */}
        <Box css={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Image src="/imagesfromclient/20240627_201406.jpg" alt="Station Break 1" width={300} height={200} />
          <Image src="/imagesfromclient/20240627_224630.jpg" alt="Station Break 2" width={300} height={200} />
          <Image src="/imagesfromclient/20240627_224732.jpg" alt="Station Break 3" width={300} height={200} />
          <Image src="/imagesfromclient/20240627_224824.jpg" alt="Station Break 4" width={300} height={200} />
        </Box>

        {/* Video Section */}
        <Box css={{ maxWidth: '600px', textAlign: 'center', }}>
          <Text h3>Watch a short video clip from the 1983 movie “Getting It On”</Text>
          <iframe
            width="400"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID?start=1140" // Replace VIDEO_ID with the actual video ID
            title="Station Break Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Flex>

      <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
      <Footer />
    </Layout>
  );
};

export default AboutUsPage;