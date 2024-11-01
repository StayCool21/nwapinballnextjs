import {Button, Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {QuotesIcon} from '../components/icons/QuotesIcon';
import {Box} from '../components/styles/box';
import {Flex} from '../components/styles/flex';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import {Footer} from '../components/footer';

const TestimonialsPage: React.FC = () => {
  return (
    <Layout>
      <Nav />
      <Flex
        direction={'column'}
        css={{
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          px: '$6',
          py: '$20',
          flexDirection: 'column-reverse',
          '@sm': {
            justifyContent: 'space-around',
            px: '$32',
            flexDirection: 'row-reverse',
          },
          '@md': {
            px: '$64',
          },
        }}
      >
        <Flex direction="column" css={{ gap: '1.5rem' }}>
          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: '$10',
                  gap: '$5',
                }}
              >
                <QuotesIcon />
                <Flex direction={'column'} css={{ gap: '0.5rem' }}>
                  <Text
                    span
                    css={{
                      maxWidth: '400px',
                      color: '$accents8',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                  </Text>
                  <Text
                    span
                    weight={'bold'}
                    css={{
                      maxWidth: '400px',
                      display: 'contents',
                      color: '$accents9',
                    }}
                  >
                    Jennifer Ford&apos;
                  </Text>
                  <Text
                    span
                    css={{
                      display: 'contents',
                      color: '$accents8',
                    }}
                  >
                    - CEO at Company
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: '$10',
                  gap: '$5',
                }}
              >
                <QuotesIcon />
                <Flex direction={'column'} css={{ gap: '0.5rem' }}>
                  <Text
                    span
                    css={{
                      maxWidth: '400px',
                      color: '$accents8',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                  </Text>
                  <Text
                    span
                    weight={'bold'}
                    css={{
                      maxWidth: '400px',
                      display: 'contents',
                      color: '$accents9',
                    }}
                  >
                    Jennifer Ford&apos;
                  </Text>
                  <Text
                    span
                    css={{
                      display: 'contents',
                      color: '$accents8',
                    }}
                  >
                    - CEO at Company
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Flex
                css={{
                  py: '$10',
                  gap: '$5',
                }}
              >
                <QuotesIcon />
                <Flex direction={'column'} css={{ gap: '0.5rem' }}>
                  <Text
                    span
                    css={{
                      maxWidth: '400px',
                      color: '$accents8',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                  </Text>
                  <Text
                    span
                    weight={'bold'}
                    css={{
                      maxWidth: '400px',
                      display: 'contents',
                      color: '$accents9',
                    }}
                  >
                    Jennifer Ford &apos;
                  </Text>
                  <Text
                    span
                    css={{
                      display: 'contents',
                      color: '$accents8',
                    }}
                  >
                    - CEO at Company
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>
        <Flex
          align={'start'}
          direction={'column'}
          css={{
            alignItems: 'center',
            '@sm': {
              alignItems: 'start',
            },
          }}
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
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     Our Gameroom:&nbsp;
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                        background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                     }}
                     // color="primary"
                  >
                     Station Break
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  Open from 7-11 PM on Friday nights. Only $20 to experience more than 20
                  pinball machines as well as arcade games from past and present.
               </Text>
            </Box>
          {/* <Text span css={{ color: '$blue600' }}>
            Awesome Feature
          </Text>
          <Text h3>Testimonials</Text>
          <Text span css={{ color: '$accents8', maxW: '600px', pb: '$8' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl, nec
            tincidunt nisl lorem eu nunc. Sed euismod, nisl ut aliquam lacinia,
          </Text>
          <Button>Read case studies</Button> */}
        </Flex>
      </Flex>

      <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
      <Footer />
    </Layout>
  );
};

export default TestimonialsPage;