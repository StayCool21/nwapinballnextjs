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
import TermsOfServiceContent from '../components/required/termsOfService';

const TermsofServicePage: React.FC = () => {
    return (
        <Layout>
            <Head>
                <title>Terms of Service - NWA Pinball</title>
            </Head>
            <Nav />
            <TermsOfServiceContent />

            <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
            <Footer />
        </Layout>
    );
};

export default TermsofServicePage;