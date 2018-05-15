// imports
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const { mongoURI, cookieKey } = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
require('./models/User');
require('./services/passport');


// mongoose setup - connecting to mongodb
mongoose
  .connect(mongoURI)
  .then(console.log('connected to mongodb'))

// app initialization
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// passport
authRoutes(app);


// server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});