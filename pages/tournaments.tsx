import { Button, Card, Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../components/icons/CheckIcon';
import { QuotesIcon } from '../components/icons/QuotesIcon';
import { Box } from '../components/styles/box';
import Image from 'next/image';
import { Flex } from '../components/styles/flex';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import { Footer } from '../components/footer';
import getMachineList from '../components/getMachineList';
import Head from 'next/head';
import { BlurIn } from '../components/blurIn';
import TournamentsCalendar from '../components/tournamentsCalendar';

const Tournaments = () => {
  return (
    <Layout>
      <Head>
        <title>Tournaments</title>
      </Head>
      <Nav />
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <BlurIn>
            <Text
              h1
              css={{
                background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                paddingRight: '0.1em',
                textAlign: 'center'
              }}
            >
              Our tournaments
            </Text>
          </BlurIn>
          <Text h4 css={{ textAlign: 'center' }}>
            Check out our upcoming tournaments!
          </Text>
          <Text h4 css={{ textAlign: 'center' }}>
            To find other IFPA tournaments, visit{' '}
            <a href="https://www.ifpapinball.com/calendar/" target="_blank" rel="noopener noreferrer">
                the IFPA calendar
            </a>
          </Text>
          <Text h4 css={{ textAlign: 'center' }}>
            We are a proud member of Stern Army. For Stern Army tournaments, visit{' '}
            <a href="https://sternpinball.com/stern-army/" target="_blank" rel="noopener noreferrer">
                the Stern Army page
            </a>
          </Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <TournamentsCalendar />
        </Flex>
        <Flex
            css={{
                gap: '2rem',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
            >
            <Box
                css={{
                display: 'flex',
                alignItems: 'center',
                '& img': {
                    width: '155px',
                    objectFit: 'contain',
                },
                }}
            >
                <a href="https://www.sternpinball.com/stern-army/" target="_blank" rel="noopener noreferrer">
                    <Image
                    src="/Stern+Army+IFPA+logo.png"
                    alt="Stern Army IFPA logo"
                    width={155}
                    height={100}
                    quality={100}
                    unoptimized
                    />
                </a>
            </Box>
            <Box
                css={{
                width: '1px',
                height: '100px',
                backgroundColor: 'white',
                }}
            />
            <Box
                css={{
                display: 'flex',
                alignItems: 'center',
                '& img': {
                    width: '155px',
                    objectFit: 'contain',
                },
                }}
            >
                <a href="https://www.ifpapinball.com/" target="_blank" rel="noopener noreferrer">
                    <Image
                    src="/ifpapinball.png"
                    alt="IFPA logo"
                    width={155}
                    height={100}
                    quality={100}
                    unoptimized
                    />
                </a>
            </Box>
        </Flex>
      </Flex>
      <Footer />
    </Layout>
  );
};

export default Tournaments;