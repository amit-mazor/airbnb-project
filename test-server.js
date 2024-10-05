console.log('Starting server setup');

try {
  const express = require('express');
  console.log('Express imported successfully');
  
  const app = express();
  console.log('Express function called successfully');

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Test server running on port ${PORT}`);
  });
} catch (error) {
  console.error('An error occurred:', error);
}