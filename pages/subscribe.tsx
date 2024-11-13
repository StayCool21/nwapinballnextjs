import { Button, Card, Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../components/icons/CheckIcon';
import { QuotesIcon } from '../components/icons/QuotesIcon';
import { Box } from '../components/styles/box';
import { Flex } from '../components/styles/flex';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import { Footer } from '../components/footer';
import SubsribeInquiryForm from '../components/subscribeForm';
import SubscribeInquiryForm from '../components/subscribeForm';
import Head from 'next/head';
import { BlurIn } from '../components/blurIn';

const Events = () => {
  return (
    <Layout>
      <Head>
        <title>Subscribe</title>
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
                // display: 'inline',
                textAlign: 'center',
                background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                paddingRight: '0.1em', // Add a small padding to the right
              }}
            >
              Keep in touch with us
            </Text>
          </BlurIn>
          <Text h4 css={{ textAlign: 'center' }}>
            Want to stay in the loop with our events and happenings? Subscribe to our newsletter!
          </Text>
          <Text h4 css={{ textAlign: 'center' }}>
            <CheckIcon /> We don&apos;t share your emails.
          </Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
            <SubscribeInquiryForm />
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