import React from 'react';
import { Button, Card, Divider, Text, Image } from '@nextui-org/react';
import { QuotesIcon } from '../components/icons/QuotesIcon';
import { Box } from '../components/styles/box';
import { Flex } from '../components/styles/flex';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import { Footer } from '../components/footer';
import Head from 'next/head';
import { BlurIn } from '../components/blurIn';
import { FadeDown } from '../components/fadeDown';

const ThanksDonation: React.FC = () => {
        return (
          <Layout>
            <Head>
              <title>Thanks for Inquiring</title>
            </Head>
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
      
              <BlurIn>
                <Text
                  h1
                  css={{
                    display: 'inline',
                    background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    paddingRight: '0.1em', // Add a small padding to the right
                  }}
                  // color="primary"
                  >
                  Thanks for your support.
                  </Text>
              </BlurIn>
              <FadeDown>
                <Text h4 css={{ textAlign: 'center' }}>
                    We appreciate your interest in NWA Pinball by choosing to donate! We will reach out to you soon.
                    You should receive a confirmation email from nwapinball@gmail.com (please check your spam/junk folder).
                </Text>
              </FadeDown>
                {/* <Text h3>Our Gameroom</Text> */}
              </Box>
      
            </Flex>
      
            <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
            <Footer />
          </Layout>
        );
      };
      
      export default ThanksDonation;