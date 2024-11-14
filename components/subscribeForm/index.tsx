import React, { useState, ChangeEvent } from 'react';
import { Button, Card, Grid, Input, Text, FormElement } from '@nextui-org/react';
import { Box } from '../styles/box';

const SubscribeForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    setSubmitted(true);
    event.currentTarget.submit();
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
            action="https://docs.google.com/forms/d/e/1FAIpQLSdsQMFkf8GOsSTL4fXmKb3hgCPjI6D3U8Luhxbztnd9ApSd6Q/formResponse"
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