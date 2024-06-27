const axios = require('axios');

const apiKey = 'sk-proj-wVBZ5sTz3Z0XA5uvDM0XT3BlbkFJepiLhiO7xPLvYlCEiG3q';
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
console.log('hihihih!!!')
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
