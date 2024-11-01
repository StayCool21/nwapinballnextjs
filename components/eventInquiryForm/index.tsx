import { Button, Card, Divider, Input, Grid, Text, Textarea, FormElement } from '@nextui-org/react';
import React, { useState, ChangeEvent } from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

const EventInquiryForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e: ChangeEvent<FormElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleConsentClick = () => {
    setIsConsentGiven(!isConsentGiven);
  };

  return (
    <Card css={{ maxWidth: '600px', margin: '0 auto',  backgroundColor: 'transparent', border: '2px solid orange' }}>
      <Card.Header>
        <Text h2>Event Inquiry Form</Text>
      </Card.Header>
      <Card.Body>
        <Box as="form">
          <Grid.Container gap={2}>
            <Grid xs={12}>
              <Input
                fullWidth
                label="Name"
                required
                placeholder="Enter your name" size="lg"
                css={{
                  '& input': {
                    borderColor: 'var(--input-border-color)',
                    color: '$text',
                    backgroundColor: 'var(--input-bg-color)',
                  },
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                fullWidth
                type="email"
                label="Email address"
                placeholder="Enter your email address" size="lg"
                required
                value={email}
                onChange={handleEmailChange}
                helperText={emailError}
                status={emailError ? 'error' : 'default'}
                css={{
                  '& input': {
                    borderColor: 'var(--input-border-color)',
                    color: '$text',
                    backgroundColor: 'var(--input-bg-color)',
                  },
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                fullWidth
                type="tel"
                label="Phone number"
                placeholder="Enter your phone number" size="lg"
                required
                css={{
                  '& input': {
                    borderColor: 'var(--input-border-color)',
                    color: '$text',
                    backgroundColor: 'var(--input-bg-color)',
                  },
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                fullWidth
                label="Please provide a date and times you are considering"
                placeholder="Note: NWA Pinball-sanctioned tournaments take priority" size="lg"
                required
                css={{
                  '& input': {
                    borderColor: 'var(--input-border-color)',
                    color: '$text',
                    backgroundColor: 'var(--input-bg-color)',
                  },
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Text css={{ paddingRight: '1rem' }}>Will you require a table for refreshments?</Text>
              <Flex css={{ gap: '1rem', alignItems: 'center' }}>
                <label>
                  <input type="radio" name="refreshments" value="yes" required />
                  Yes
                </label>
                <label>
                  <input type="radio" name="refreshments" value="no" required />
                  No
                </label>
              </Flex>
            </Grid>
            <Grid xs={12}>
              <Text css={{ paddingRight: '1rem' }}>Would you like us to run a game tournament for your guests?</Text>
              <Flex css={{ gap: '1rem', alignItems: 'center' }}>
                <label>
                  <input type="radio" name="tournament" value="yes" />
                  Yes
                </label>
                <label>
                  <input type="radio" name="tournament" value="no" />
                  No
                </label>
              </Flex>
            </Grid>
            <Grid xs={12}>
              <Textarea
                fullWidth
                label="Message"
                css={{
                  '& textarea': {
                    borderColor: 'var(--input-border-color)',
                    color: '$text',
                    backgroundColor: 'var(--input-bg-color)',
                  },
                }}
              />
            </Grid>
            <Grid xs={12}>
              <Flex css={{ justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                <Button
                  type="button"
                  color="primary"
                  css={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    minWidth: '2rem',
                    backgroundColor: isConsentGiven ? 'darkorange' : 'lightgray',
                    '&:hover': {
                      backgroundColor: 'lightorange',
                    },
                  }}
                  onClick={handleConsentClick}
                />
                <Text>
                  I allow this website to store my submission.
                </Text>
              </Flex>
            </Grid>
            <Grid xs={12}>
              <Button
                type="submit"
                css={{
                  width: '100%',
                  background: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)'
                }}
                disabled={!isConsentGiven}
              >
                Submit
              </Button>
            </Grid>
          </Grid.Container>
        </Box>
      </Card.Body>
    </Card>
  );
};

export default EventInquiryForm;