import { Button, Card, Input, Grid, Text, Textarea, FormElement } from '@nextui-org/react';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

const EventInquiryForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [refreshments, setRefreshments] = useState<string>('');
  const [tournament, setTournament] = useState<string>('');
  const minTimeToSubmit = 2 * 1000; // Minimum time to submit in milliseconds (e.g., 2 seconds)

  useEffect(() => {
    setStartTime(Date.now());
    const honeypot = document.getElementById('honeypot') as HTMLInputElement;
    if (honeypot) {
      honeypot.value = 'human';
    }
  }, []);

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

  const handleDateChange = (e: ChangeEvent<FormElement>) => {
    const target = e.target as HTMLInputElement;
    const date = target.value;
    setSelectedDate(date);
    if (date) {
      const [year, month, day] = date.split('-');
      (document.getElementById('year') as HTMLInputElement).value = year;
      (document.getElementById('month') as HTMLInputElement).value = month;
      (document.getElementById('day') as HTMLInputElement).value = day;
    }
  };

  const handleRefreshmentsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRefreshments(e.target.value);
  };

  const handleTournamentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTournament(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const honeypot = (event.currentTarget.elements.namedItem('url') as HTMLInputElement).value;
    const jsHoneypot = (event.currentTarget.elements.namedItem('honeypot') as HTMLInputElement).value;

    if (honeypot || jsHoneypot !== 'human') {
      return;
    }

    if (elapsedTime < minTimeToSubmit) {
      setEmailError('Please take your time to fill out the form.');
      return;
    }

    const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
    if (lastSubmissionTime && currentTime - parseInt(lastSubmissionTime) < minTimeToSubmit) {
      setEmailError('You are submitting too quickly. Please wait a moment.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setSubmitted(true);
    localStorage.setItem('lastSubmissionTime', currentTime.toString());

    const form = event.currentTarget;
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScXUnlhKNzQElDnKFvsuJ7uY5VAQ2RJp_uLh6A1xh2Q_WNm7g/formResponse';
    if (formUrl) {
      form.setAttribute('action', formUrl);
    } else {
      console.error('Form URL is not set in environment variables.');
      setLoading(false);
      setEmailError('Failed to submit the form. Please try again later.');
      return;
    }

    form.submit();
  };

  return (
    <Card css={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'transparent', border: '2px solid orange' }}>
      <Card.Header>
        <Text h2>Event Inquiry Form</Text>
      </Card.Header>
      <Card.Body>
        <Box as="form" method="POST" target="hidden_iframe" onSubmit={handleSubmit}>
          <Grid.Container gap={2}>
            <Grid xs={12}>
              <Input
                name="entry.564454318"
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
                name="entry.1232092663"
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
                name="entry.2115061200"
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
              <Input
                name="entry.643440188"
                fullWidth
                type="date"
                label="Please provide a date (NWA Pinball-sanctioned events take priority)"
                required
                value={selectedDate}
                onChange={handleDateChange}
                css={{
                  '& input': {
                    borderColor: 'var(--input-border-color)',
                    color: '$text',
                    backgroundColor: 'var(--input-bg-color)',
                  },
                }}
              />
              <div>
                <input type="hidden" name="entry.643440188_year" id="year" value="" />
                <input type="hidden" name="entry.643440188_month" id="month" value="" />
                <input type="hidden" name="entry.643440188_day" id="day" value="" />
              </div>
            </Grid>
            <Grid xs={12}>
              <Text css={{ paddingRight: '1rem' }}>Will you require a table for refreshments?</Text>
              <Flex css={{ gap: '1rem', alignItems: 'center' }}>
                <label>
                  <input type="radio" name="entry.253709012" value="Yes" required onChange={handleRefreshmentsChange} />
                  Yes
                </label>
                <label>
                  <input type="radio" name="entry.253709012" value="No" required onChange={handleRefreshmentsChange} />
                  No
                </label>
              </Flex>
            </Grid>
            <Grid xs={12}>
              <Text css={{ paddingRight: '1rem' }}>Would you like us to run a game tournament for your guests?</Text>
              <Flex css={{ gap: '1rem', alignItems: 'center' }}>
                <label>
                  <input type="radio" name="entry.1856859813" value="Yes" onChange={handleTournamentChange} />
                  Yes
                </label>
                <label>
                  <input type="radio" name="entry.1856859813" value="No" onChange={handleTournamentChange} />
                  No
                </label>
              </Flex>
            </Grid>
            <Grid xs={12}>
              <Textarea
                name="entry.1528997229"
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
              <input type="text" name="url" style={{ display: 'none' }} />
              <input type="text" name="honeypot" id="honeypot" style={{ display: 'none' }} />
              <Button
                type="submit"
                css={{
                  width: '100%',
                  background:
                    'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
                }}
                disabled={!isConsentGiven || loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </Grid>
          </Grid.Container>
        </Box>
      </Card.Body>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={() => {
          if (submitted) {
            setSubmitted(false);
            setLoading(false);
            window.location.href = '/thanksPartyInquiry';
          }
        }}
      ></iframe>
    </Card>
  );
};

export default EventInquiryForm;