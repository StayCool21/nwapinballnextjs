import React, { useState } from 'react';
import { Text, Input, Button, Card } from '@nextui-org/react';
import { Flex } from '../styles/flex';
import { Layout } from '../navbar/layout';
import { Nav } from '../navbar/navbar';
import { Footer } from '../footer';
import Head from 'next/head';

// Define the type for each message
type Message = {
  sender: 'user' | 'bot';
  text: string;
};

const Chatbot = () => {
  // Define the state with the correct type
  const [messages, setMessages] = useState<Message[]>([]); // State is an array of Message objects
  const [input, setInput] = useState<string>(''); // State for the input field

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add the user's message to the chat
    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]); // Update the state with the new message
    setInput('');

    try {
      // Send the user's input to the backend
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage: Message = { sender: 'bot', text: data.reply }; // Bot's reply
      setMessages((prev) => [...prev, botMessage]); // Update the state with the bot's reply
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        sender: 'bot',
        text: 'Oops! Something went wrong.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Chat with Our Bot</title>
      </Head>
      <Nav />
      <Flex
        css={{
          py: '$20',
          gap: '1rem',
          px: '$6',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          h1
          css={{
            textAlign: 'center',
            background: 'radial-gradient(circle, #FFE203, #FF5A00, #FF0049)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Chat with Our Bot
        </Text>
        <Card
          css={{
            width: '100%',
            maxWidth: '600px',
            padding: '$6',
            borderRadius: '16px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Flex css={{ flexDirection: 'column', gap: '$4' }}>
            <div
              style={{
                maxHeight: '300px',
                overflowY: 'auto',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '8px',
                marginBottom: '16px',
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                    margin: '8px 0',
                  }}
                >
                  <Text
                    css={{
                      display: 'inline-block',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backgroundColor:
                        msg.sender === 'user' ? '#007bff' : '#f5f5f5',
                      color: msg.sender === 'user' ? '#fff' : '#333',
                    }}
                  >
                    {msg.text}
                  </Text>
                </div>
              ))}
            </div>
            <Flex css={{ gap: '8px' }}>
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                fullWidth
              />
              <Button auto onClick={sendMessage}>
                Send
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Flex>
      <Footer />
    </Layout>
  );
};

export default Chatbot;
