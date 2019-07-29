const { Router } = require('express');
const Joke = require('../models/Joke');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    const {
      q,
      a
    } = req.body;

    Joke
      .create({ q, a })
      .then(joke => res.send(joke))
      .catch(next);
  })
  
  .get('/', ensureAuth, (req, res, next) => {
    Joke
      .find()
      .then(jokes => res.send(jokes))
      .catch(next);
  })

  .get('/random', (req, res, next) => {
    Joke
      .randomJoke()
      .then(([joke]) => res.send(joke))
      .catch(next);
  });
