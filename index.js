// imports
const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const { mongoURI } = require('./config/keys');

// mongoose setup - connecting to mongodb
mongoose
  .connect(mongoURI)
  .then(console.log('connected to mongodb'))

// app initialization
const app = express();

// passport
authRoutes(app);


// server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});