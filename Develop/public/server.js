const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('send', (req, res) =>
res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.get('/routes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/routes.html'))
);

app.listen(PORT, () =>
console.log('Example app listening at http://localhost:${PORT}')
);

// We can send a body parameter to the client using the res.send() method. This body parameter can be a string, buffer, or even an array.
app.get('/', (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

// This method sends a JSON response with the correct content type.
app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
