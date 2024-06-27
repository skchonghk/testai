const axios = require('axios');

const apiKey = 'YOUR_API_KEY';
const url = 'https://api.openai.com/v1/chat/completions';

const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json'
};

const data = {
  model: 'gpt-4',
  messages: [
    { role: 'user', content: 'Hello, how are you?' }
  ]
};

axios.post(url, data, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      console.error('Error:', error.response.status);
      console.error(error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  });
