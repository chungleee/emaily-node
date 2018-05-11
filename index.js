// imports
const express = require('express');

// app initialization
const app = express();

// routes
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});