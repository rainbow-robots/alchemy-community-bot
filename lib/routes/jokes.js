const { Router } = require('express');
const Joke = require('../models/Joke');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      q,
      a
    } = req.body;

    Joke
      .create({ q, a })
      .then(joke => res.send(joke))
      .catch(next);
  });
