const { Router } = require('express');
const Emoji = require('../models/Emoji');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      emojiStory
    } = req.body;

    Emoji
      .create({ emojiStory })
      .then(emoji => res.send(emoji))
      .catch(next);
  });
