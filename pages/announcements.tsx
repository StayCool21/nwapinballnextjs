import React from 'react';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import { Footer } from '../components/footer';
import Head from 'next/head';
import { Flex } from '../components/styles/flex';
import { Text } from '@nextui-org/react';

const Announcements = () => {
  return (
    <Layout>
      <Head>
        <title>Announcements</title>
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
          <Text h1 css={{ textAlign: 'center' }}>
            Stay Updated with Our Announcements
          </Text>
          <Text h4 css={{ textAlign: 'center' }}>
            Check out the latest updates and announcements directly from our Facebook page!
          </Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%', justifyContent: 'center', py: '2rem' }}
        >
          {/* Facebook Plugin via Iframe */}
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FNWA-Pinball-Club%2F61558384277432%2F&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            width="500"
            height="700"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </Flex>
      </Flex>
      <Footer />
    </Layout>
  );
};

export default Announcements;