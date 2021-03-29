require('dotenv').config();
const express = require('express');
const routes = require('./routes/html');
const helmet = require('helmet');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
const SYNC_OPTIONS = {
  force: process.env.NODE_ENV === 'test'
};

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet({ contentSecurityPolicy: false }));

// Serve up static assets (usually on heroku)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './pages')));

app.use(routes);

db.sequelize.sync(SYNC_OPTIONS).then(() => {
  app.listen(PORT, () => {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});
