// imports
const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

// app initialization
const app = express();

// passport
authRoutes(app);


// server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});