const env = require('node-env-file');

if (process.env.NODE_ENV.trim() === 'development') {
  env(`${__dirname}/.env`);
}

const express = require('express'),
  router = express.Router(),
  Twitter = require('twitter');
  client = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
  });

router.get('/timeline', (req, res) => {
  const url = 'statuses/user_timeline',
    { userName } = req.query,
    params = {
      screen_name: userName
    };

  client.get(url, params, (error, tweets, response) => {
    if (error) {
      console.log(error);
      res.status(400);
      res.json({ error });
      return;
    }

    res.json({ tweets });
    res.status(200);
  });
});


module.exports = router;
