const { Router } = require('express');
const Emoji = require('../models/Emoji');
const Tweet = require('../utils/twitInfo');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      emojiStory
    } = req.body;

    Emoji
      .create({ emojiStory })
      .then(emoji => {
        res.send(emoji);
        Tweet
          // eslint-disable-next-line no-unused-vars
          .post('statuses/update', { status: emoji.emojiStory }, function(err, data, response) {
            if(!err) {
              console.log('sent an emoji story');
            }
            console.log(err);
          });
      })
      .catch(next);
  });
