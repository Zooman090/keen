const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  twitt = require('./twitt.js'),
  env = require('node-env-file'),
  cors = require('cors');

if (process.env.NODE_ENV.trim() === 'development') {
  env(`${__dirname}/.env`);
}

app.use((req, res, next ) => {
  res.header('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-*');
  next();
});

app.use(cors({
  origin: process.env.front_url,
  credentials: true
}));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(twitt);

app.listen(process.env.PORT || 8008, () => {
  console.log('Server running on http://localhost:8008');
});
