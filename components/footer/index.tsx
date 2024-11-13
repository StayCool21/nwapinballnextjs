import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {AcmeLogo} from '../navbar/logo';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import PrivacyPolicyPage from '../required/privacyPolicy';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
            <Flex
               justify={'center'}
               wrap={'wrap'}
               align={'center'}
               css={{
                  'gap': '$10',
                  '&  ul': {
                     margin: 0,
                  },
                  '@sm': {},
               }}
            >
               <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <AcmeLogo />
                  <Flex
                     css={{
                        alignItems: 'center',
                        gap: '$2',
                     }}
                     >
                     <FontAwesomeIcon icon={faMapMarkerAlt} />
                     <Text as="p">2398 S. M Street</Text>
                     </Flex>
                     <Text as="p">Rogers, AR 72758</Text>
                     <Flex
                     css={{
                        alignItems: 'center',
                        gap: '$2',
                     }}
                     >
                  </Flex>
                  <Flex
                     css={{
                        alignItems: 'center',
                        gap: '$2',
                     }}
                     >
                     <FontAwesomeIcon icon={faPhone} />
                     <Text as="p">(479) 202-0726</Text>
                  </Flex>
                  <Flex
                     css={{
                        alignItems: 'center',
                        gap: '$2',
                     }}
                     >
                     <FontAwesomeIcon icon={faEnvelope} />
                     <Text as="p">nwapinball@yahoo.com</Text>
               </Flex>
               </Flex>
               <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <Box as={'ul'} css={{gap: '$5', listStyle: 'none'}}>
                     <Box as={'li'}>
                     <Text span css={{ color: '$accents8' }}>
                        <Link href="/aboutUs" passHref>
                           About Us
                        </Link>
                     </Text>
                     </Box>
                     <Box as={'li'}>
                     <Text span css={{ color: '$accents8' }}>
                        <Link href="/events" passHref>
                           Parties
                        </Link>
                     </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           <Link href="/currentLineup" passHref>
                              Current Lineup
                           </Link>
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Link href="/subscribe" passHref>
                           Subscribe
                        </Link>
                     </Box>
                     <Box as={'li'}>
                        <Link href="/announcements" passHref>
                           Announcements
                        </Link>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Software Engineers</Text>
                  <Box as={'ul'} css={{gap: '$5', listStyle: 'none'}}>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           <a href="https://staycool21.github.io">Luke Welsh</a>
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                              <a href="https://logannitzsche.com">Logan Nitzsche</a>
                           </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                              <a href="https://www.linkedin.com/in/kevin-endrijaitis-38a8a4294">Kevin Endrijaitis</a>
                           </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <br></br>
                  <Text h5 css={{ mt: '$7' }}>Follow Us</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <a href="https://www.facebook.com/people/NWA-Pinball-Club/61558384277432/" target="_blank" rel="noopener noreferrer">
                           <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                     </Box>
                     <Box as={'li'}>
                        <a href="https://www.instagram.com/nwapinballclub/" target="_blank" rel="noopener noreferrer">
                           <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                     </Box>
                     <Box as={'li'}>
                        <p>&nbsp;</p>
                     </Box>
                     <Box as={'li'}>
                        <p>&nbsp;</p>   
                     </Box>
                  </Box>
               </Flex>
            </Flex>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Divider
                  css={{
                     mt: '$14',
                     display: 'flex',
                     justifyContent: 'center',
                  }}
               />
               <Flex
                  //   justify={'between'}
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{color: '$accents8'}}>
                        <Link href="/terms-of-service" passHref>
                           Terms of Service
                        </Link>
                     </Text>
                     <Text span css={{color: '$accents8', cursor: 'pointer'}}>
                        <Link href="/privacy-policy" passHref>
                           Privacy Policy
                        </Link>
                     </Text>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{color: '$accents8'}}>
                        © Copyright 2024 NWA Pinball.
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};