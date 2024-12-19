export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { message } = req.body;
  
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Securely access the key
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo', // Adjust the model if needed
          messages: [{ role: 'user', content: message }],
          max_tokens: 150,
        }),
      });
  
      const data = await response.json();
      res.status(200).json({ reply: data.choices[0].message.content });
    } catch (error) {
      console.error('OpenAI API error:', error);
      res.status(500).json({ reply: 'Sorry, something went wrong.' });
    }
  }
  