const { Router } = require('express');
const Emoji = require('../models/Emoji');
const Tweet = require('../utils/twitInfo');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      emojiStory
    } = req.body;

    // provide and receive an apiKey from query string
    // /api/v1/emojis?apiKey=1234567
    const {
      apiKey
    } = req.query;

    if(apiKey !== process.env.API_KEY) {
      const err = new Error('Invalid API key');
      err.status = 403;
      return next(err);
    }

    Emoji
      .create({ emojiStory })
      .then(emoji => {
        res.send(emoji);
        Tweet
          // eslint-disable-next-line no-unused-vars
          .post('statuses/update', { status: `An alchemist emoji story: ${emoji.emojiStory}` }, function (err, data, response) {
            if (!err) {
              console.log('sent an emoji story');
            } else {
              console.log(err);
            }
          });
      })
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Emoji
      .find()
      .then(emojis => res.send(emojis))
      .catch(next);
  });
