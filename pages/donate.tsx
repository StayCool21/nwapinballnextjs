import { Button, Card, Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../components/icons/CheckIcon';
import { QuotesIcon } from '../components/icons/QuotesIcon';
import { Box } from '../components/styles/box';
import { Flex } from '../components/styles/flex';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import { Footer } from '../components/footer';
import DonateInquiryForm from '../components/donateInquiryForm';
import Head from 'next/head';
import { BlurIn } from '../components/blurIn';

const Donate = () => {
  return (
    <Layout>
      <Head>
        <title>Donate</title>
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
              Want to support NWA Pinball?
            </Text>
          </BlurIn>
          <Text h4 css={{ textAlign: 'center' }}>
            We accept pinball and arcade machine donations, as well as monetary donations to help us grow and expand our collection.
          </Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          <Text h4 css={{ textAlign: 'center' }}>
            For all donation inquiries, please submit the form below. Someone from our team will reach out within 24-48 hours of receiving your message.
          </Text>
            <DonateInquiryForm />
        </Flex>

        {/* <Divider
          css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
        /> */}
      </Flex>
      <Footer />
    </Layout>
  );
};

export default Donate;