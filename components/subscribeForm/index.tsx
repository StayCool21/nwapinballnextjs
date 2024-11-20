import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button, Card, Grid, Input, Text, FormElement } from '@nextui-org/react';
import { Box } from '../styles/box';

const SubscribeForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [startTime, setStartTime] = useState<number>(0);
  const minTimeToSubmit = 2 * 1000; // Minimum time to submit in milliseconds (e.g., 2 seconds)

  useEffect(() => {
    // Record the time when the component is mounted
    setStartTime(Date.now());
    // Populate honeypot field with JavaScript
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
    const value = (e.target as HTMLInputElement).value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const honeypot = (event.currentTarget.elements.namedItem('url') as HTMLInputElement).value;
    const jsHoneypot = (event.currentTarget.elements.namedItem('honeypot') as HTMLInputElement).value;

    if (honeypot || jsHoneypot !== 'human') {
      // Bot detected, do not submit
      return;
    }

    if (elapsedTime < minTimeToSubmit) {
      setEmailError(`Please take your time to fill out the form.`);
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

    // We NEED TO set the form action URL from environment variable
    // This is required to submit the form to Google Forms
    const form = event.currentTarget; 
    // const formUrl = process.env.NEXT_PUBLIC_SUB_FORM_URL;
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdsQMFkf8GOsSTL4fXmKb3hgCPjI6D3U8Luhxbztnd9ApSd6Q/formResponse';
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
    <>
      <Card
        css={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: 'transparent',
          border: '2px solid orange',
        }}
      >
        <Card.Header>
          <Text h2>Subscribe</Text>
        </Card.Header>
        <Card.Body>
          <Box
            as="form"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
          >
            <Grid.Container gap={2}>
              <Grid xs={12}>
                <Input
                  name="entry.328016009"
                  placeholder="Enter your name"
                  size="lg"
                  fullWidth
                  label="Name"
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
                  name="entry.982181972"
                  fullWidth
                  type="email"
                  label="Email address"
                  required
                  placeholder="Enter your email address"
                  size="lg"
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
                <input type="text" name="url" style={{ display: 'none' }} />
                <input type="text" name="honeypot" id="honeypot" style={{ display: 'none' }} />
                <Button
                  type="submit"
                  color="primary"
                  disabled={loading}
                  css={{
                    width: '100%',
                    background:
                      'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), ' +
                      'radial-gradient(113% 91% at 17% -2%, #FF5A00FF 1%, #FF000000 99%), ' +
                      'radial-gradient(142% 91% at 83% 7%, #FFDB00FF 1%, #FF000000 99%), ' +
                      'radial-gradient(142% 91% at -6% 74%, #FF0049FF 1%, #FF000000 99%), ' +
                      'radial-gradient(142% 91% at 111% 84%, #FF7000FF 0%, #FF0000FF 100%)',
                  }}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </Button>
              </Grid>
            </Grid.Container>
          </Box>
        </Card.Body>
      </Card>

      {/* Hidden iframe for form submission */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={() => {
          if (submitted) {
            setSubmitted(false);
            setLoading(false);
            window.location.href = '/thanksSubscription';
          }
        }}
      ></iframe>
    </>
  );
};

export default SubscribeForm;