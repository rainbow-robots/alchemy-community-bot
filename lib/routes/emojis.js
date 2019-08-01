const { Router } = require('express');
const Emoji = require('../models/Emoji');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    const {
      emojiStory
    } = req.body;

    Emoji
      .create({ emojiStory })
      .then(emoji => res.send(emoji))
      .catch(next);
  });
