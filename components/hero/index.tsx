import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Image from 'next/image';
import { BlurIn } from '../blurIn';
import { FadeDown } from '../fadeDown';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <BlurIn>
                     <Text
                        h1
                        css={{
                           display: 'inline',
                        }}
                     >
                        The premier pinball location&nbsp;
                     </Text>
                     <Text
                        h1
                        css={{
                           display: 'inline',
                        }}
                     >
                        in&nbsp;
                     </Text>
                     <Text
                        h1
                        css={{
                           display: 'inline',
                           background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           paddingRight: '0.1em', // Add a small padding to the right
                        }}
                        // color="primary"
                     >
                        NWA
                     </Text>
                  </BlurIn>
               </Box>
               
               <FadeDown css={{maxWidth: '400px'}}>  
                  <Text
                     css={{
                        color: '$accents8',
                        maxWidth: '400px',
                     }}
                     size={'$lg'}
                     span
                  >
                     Open tentatively from 7:30-11:30 PM on Fridays (and some Saturdays too...check our Facebook page for updates).
                     Only $20 to experience more than 20
                     pinball machines as well as arcade games from past and present.
                  </Text>
               </FadeDown>    
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <Image src="/NWAPinballFullSmallerBack.png" alt="NWA Pinball Logo"
               width={775}
               height={500}
               quality={100} />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
