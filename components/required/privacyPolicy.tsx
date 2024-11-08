import React from 'react';
import { Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import Head from 'next/head';
import Collapsible from '../collapsible'; // Import the Collapsible component

const PrivacyPolicyContent: React.FC = () => {
  return (
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
              display: 'inline-block',
              background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              paddingRight: '0.1em', // Add a small padding to the right
            }}
          >
            Privacy Policy
          </Text>
        </Box>

        {/* Description Section */}
        <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
          <Collapsible title="Information Collection">
            When you subscribe to updates with NWA Pinball or submit an event request form, we collect your name and email address. We securely store this information to provide you with access to our services and
            to enhance your user experience.
          </Collapsible>
          <Collapsible title="Data Security">
            We take the security of your personal information seriously. All emails are encrypted to
            protect them from unauthorized access by hackers or other malicious parties.
          </Collapsible>
          <Collapsible title="Event History">
            As you use our website, we store information about user activity that allows us to
            personalize your experience and recommend future events that may be of interest to you.
          </Collapsible>
          <Collapsible title="Policy Updates">
            We reserve the right to update or change our Privacy Policy at any time. Any updates will be
            posted on this page.
          </Collapsible>
          <Collapsible title="Contact Us">
            If you have any questions about our Privacy Policy or concerns about how we handle your
            personal information, please contact us at nwapinball@yahoo.com.
          </Collapsible>
        </Box>
      </Flex>
  );
};

export default PrivacyPolicyContent;