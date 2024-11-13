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
                  <Text h5>Resources</Text>
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
                           Events
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
                  <Text h5>Contact</Text>
                  <Box as={'ul'} css={{gap: '$5', listStyle: 'none'}}>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           First Link
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Second Link
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Third Link
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Fourth Link
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
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
               {/* <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Subscribe</Text>
                  <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                     justifyContent: 'center', // Center horizontally
                     alignItems: 'center', // Center vertically
                  }}
                  wrap={'wrap'}
               >
                  <Input placeholder="Enter your email address" size="lg" />
                  <Button
                     css={{
                        backgroundImage: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
                        color: 'white', // Ensure the text is readable
                     }}
                     >
                     Sign Up
                  </Button>
               </Flex>
               <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> We don&apos;t share your emails.
                  </Flex>
               </Flex>
               </Flex> */}
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
                        Terms of Service
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
