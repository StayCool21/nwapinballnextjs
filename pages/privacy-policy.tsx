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
import privacyPolicyPage from './privacy-policy';
import { useRouter } from 'next/router';

const PrivacyPolicyPage: React.FC = () => {
    const router = useRouter();

    const handleClose = () => {
        router.push('/'); // Navigate back to the homepage
    };

    return (
        <Layout>
            <Head>
                <title>Privacy Policy - NWA Pinball</title>
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
                <Box css={{ maxWidth: '800px', textAlign: 'center', position: 'relative' }}>
                    <span
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            top: '15px',
                            left: '15px',
                            cursor: 'pointer',
                            color: '#666',
                            fontSize: '24px',
                            transition: 'color 0.3s ease',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = 'red')}
                        onMouseOut={(e) => (e.currentTarget.style.color = '#666')}
                    >
                        &#10006;
                    </span>
                    <Text h1>Privacy Policy</Text>

                    <Divider css={{ my: '$10' }} />

                    <Text>
                        At NWA Pinball, we are committed to respecting your privacy and protecting your personal
                        information. This Privacy Policy outlines how we handle the information we collect when you
                        visit our website or use our services.
                    </Text>

                    <Text h3>Information Collection</Text>
                    <Text>
                        When you create an account with NWA Pinball, we collect your name, password, and email address.
                        We securely store this information to provide you with access to our services and to enhance
                        your user experience.
                    </Text>

                    <Text h3>Data Security</Text>
                    <Text>
                        We take the security of your personal information seriously. All passwords are encrypted and
                        hashed to protect them from unauthorized access by hackers or other malicious parties.
                    </Text>

                    <Text h3>Event History</Text>
                    <Text>
                        As you use our website, we store information about user activity that allows us to personalize
                        your experience and recommend future events that may be of interest to you.
                    </Text>

                    <Text h3>Policy Updates</Text>
                    <Text>
                        We reserve the right to update or change our Privacy Policy at any time. Any updates will be
                        posted on this page.
                    </Text>

                    <Text h3>Contact Us</Text>
                    <Text>
                        If you have any questions about our Privacy Policy or concerns about how we handle your personal
                        information, please contact us at nwapinball@yahoo.com.
                    </Text>
                </Box>
            </Flex>

            <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
            <Footer />
        </Layout>
    );
};

export default PrivacyPolicyPage;