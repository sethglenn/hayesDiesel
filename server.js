
const express = require('express');
const routes = require('./routes/html');
const helmet = require('helmet');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet({ contentSecurityPolicy: false }));

// Serve up static assets (usually on heroku)
app.use(express.static('./pages'));

app.use(routes);


app.listen(PORT, () => {
  console.log('App listening on PORT: ' + PORT);
});
