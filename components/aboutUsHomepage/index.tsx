import { Button, Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Flex } from '../styles/flex';

export const AboutUsHomepage = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text h2 css={{
               textAlign: 'center', 
               background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               paddingRight: '0.1em', // Add a small padding to the right
            }}>
               We are a 501c7 social club
            </Text>
            <Text h2 css={{ textAlign: 'center' }}>
               that aims to promote the hobby and sport of pinball to Northwest Arkansas, currently a &quot;pinball desert.&quot;
            </Text>   
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               We offer casual play, tournaments and other events related to the pinball hobby. Games are located in our publicly accessible arcade called &quot;Station Break&quot; in unincorporated Rogers, AR.
            </Text>
            <Text h2 css={{
               textAlign: 'center', 
               background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               paddingRight: '0.1em', // Add a small padding to the right
            }}>
               We are an inclusive club so everyone (18+) is welcome to join.
            </Text>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               Membership sign-up is free, quick, and easy. We are also family-friendly with teenagers (age 13+) IF accompanied by a parent or legal guardian. All of our games are set on &quot;Free-Play&quot; so no quarters are needed.&nbsp;
            </Text>
         </Flex>

         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
         />
      </>
   );
};
