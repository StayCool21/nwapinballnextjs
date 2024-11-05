import { Button, Card, Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../components/icons/CheckIcon';
import { QuotesIcon } from '../components/icons/QuotesIcon';
import { Box } from '../components/styles/box';
import { Flex } from '../components/styles/flex';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import { Footer } from '../components/footer';
import EventInquiryForm from '../components/eventInquiryForm';
import Head from 'next/head';
import { BlurIn } from '../components/blurIn';

const Events = () => {
  return (
    <Layout>
      <Head>
        <title>Events</title>
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
                display: 'inline',
                background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Let us be your party destination
            </Text>
          </BlurIn>
          <Text h4 css={{ textAlign: 'center' }}>
            Corporate events / private party inquiries:  Plan your event at our Station Break arcade.
          </Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    2 Hours Free Play
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Up to 30 people
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text h2 css={{ display: 'inline', verticalAlign: 'middle' }}>
                $250&nbsp;
              </Text>
              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Allowed to bring in food and drinks!
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    BYOB (everyone must be 21+)
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Tournament set-up included
                  </Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Unfettered access to our jukebox
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Additional Hours
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Wanting more than 2 hours? We can make it happen!
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Text h2 css={{ display: 'inline', verticalAlign: 'middle' }}>
                +$100/hour&nbsp;
              </Text>
              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span css={{ color: '$accents8' }}>
                    Perfect for longer events
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Text h4 css={{ textAlign: 'center' }}>
            For all event inquiries, please submit the form below. Someone from our team will reach out within 24-48 hours of receiving your message.
          </Text>
            <EventInquiryForm />
        </Flex>

        {/* <Divider
          css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
        /> */}
      </Flex>
      <Footer />
    </Layout>
  );
};

export default Events;