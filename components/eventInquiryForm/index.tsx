import { Button, Card, Input, Grid, Text, Textarea, FormElement } from '@nextui-org/react';
import React, { useState, ChangeEvent } from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventInquiryForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <Card css={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'transparent', border: '2px solid orange' }}>
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
                placeholder="Enter your name"
                size="lg"
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
                placeholder="Enter your email address"
                size="lg"
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
                placeholder="Enter your phone number"
                size="lg"
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
              <div style={{ width: '100%' }}>
                {/* FIXME: Extend the below field all the way to the width of the form!!! */}
                <DatePicker
                  id="date-picker"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="MM/DD/YYYY"
                  required
                  className="date-picker-input"
                  customInput={
                    <Input
                      fullWidth
                      size="lg"
                      label="Please provide a date (NWA Pinball-sanctioned events take priority)"
                      css={{
                        '& input': {
                          borderColor: 'var(--input-border-color)',
                          color: '$text',
                          backgroundColor: 'var(--input-bg-color)',
                        },
                      }}
                    />
                  }
                />
              </div>
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
                placeholder="Enter multiple dates if you have a preference, or any other details you'd like to provide so we can assist you better."
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
                <Text>I allow this website to store my submission.</Text>
              </Flex>
            </Grid>
            <Grid xs={12}>
              <Button
                type="submit"
                css={{
                  width: '100%',
                  background:
                    'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
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