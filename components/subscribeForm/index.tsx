import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button, Card, Grid, Input, Text, FormElement } from '@nextui-org/react';
import { Box } from '../styles/box';

const SubscribeForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [startTime, setStartTime] = useState<number>(0);
  const minTimeToSubmit = 2 * 1000; // Minimum time to submit in milliseconds (e.g., 5 seconds)

  useEffect(() => {
    // Record the time when the component is mounted
    setStartTime(Date.now());
    // Populate honeypot field with JavaScript
    const honeypot = document.getElementById('honeypot') as HTMLInputElement;
    if (honeypot) {
      honeypot.value = 'human';
    }
  }, []);

  useEffect(() => {
    // Ensure reCAPTCHA script is loaded
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          console.log('reCAPTCHA is ready');
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
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

    // Execute reCAPTCHA and get the token
    if (window.grecaptcha) {
      window.grecaptcha.ready(async () => {
        const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' });
        const recaptchaVerified = await verifyRecaptcha(token);
        if (!recaptchaVerified) {
          setEmailError('reCAPTCHA verification failed. Please try again.');
          return;
        }

        setLoading(true);
        setSubmitted(true);
        localStorage.setItem('lastSubmissionTime', currentTime.toString());

        // Decode the form action URL
        const form = event.currentTarget;
        const encodedUrl = form.getAttribute('data-action');
        if (encodedUrl) {
          const decodedUrl = atob(encodedUrl);
          form.setAttribute('action', decodedUrl);
        }

        form.submit();
      });
    }
  };

  const verifyRecaptcha = async (recaptchaResponse: string) => {
    const response = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recaptchaResponse }),
    });
    const data = await response.json();
    return data.success;
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
            data-action="aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZHNRTUZrZjhHT3NTVEw0Zlh0bUtiM2hnQ1BqSTZEM1U4THVoWGJ6dG5kOUFwU2Q2US9mb3JtUmVzcG9uc2U="
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
                <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}></div>
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

      {/* Add reCAPTCHA script */}
      <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
    </>
  );
};

export default SubscribeForm;