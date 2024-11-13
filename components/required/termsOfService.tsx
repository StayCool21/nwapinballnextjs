import React from 'react';
import { Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import Collapsible from '../collapsible'; // Import the Collapsible component

const TermsOfServiceContent: React.FC = () => {
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
            Terms of Service
          </Text>
        </Box>

        {/* Description Section */}
        <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
          <Collapsible title="Acceptance of Terms">
            By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </Collapsible>
          <Collapsible title="Modification of Terms">
            We reserve the right to modify these terms at any time. You should check this page regularly. Your continued use of the service after any changes have been made will constitute your acceptance of the new terms.
          </Collapsible>
          <Collapsible title="User Responsibilities">
            You are responsible for your use of the service and for any consequences thereof. You agree to use the service in compliance with all applicable laws, rules, and regulations.
          </Collapsible>
          <Collapsible title="Limitation of Liability">
            We shall not be liable for any damages or losses arising from your use of the service or inability to access the service. This includes, but is not limited to, incidental and consequential damages, lost profits, or damages resulting from lost data or business interruption.
          </Collapsible>
          <Collapsible title="Governing Law">
            These terms shall be governed by and construed in accordance with the laws of the state in which our company is headquartered, without regard to its conflict of law principles.
          </Collapsible>
          <Collapsible title="Contact Us">
            If you have any questions about these Terms of Service, please contact us at nwapinball@yahoo.com.
          </Collapsible>
        </Box>
      </Flex>
  );
};

export default TermsOfServiceContent;