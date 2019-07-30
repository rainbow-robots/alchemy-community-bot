const { Router } = require('express');
const User = require('../models/User');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    const {
      username,
      password
    } = req.body;
    
    User
      .create({ username, password })
      .then(user => {
        res.cookie('session', user.authToken(), {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });
        res.send(user);
      })
      .catch(next);
  })

  .post('/signin', (req, res, next) => {
    const {
      username,
      password
    } = req.body;

    User
      .findOne({ username })
      .then(user => {
        const isValidPassword = user.compare(password);
        if(isValidPassword) {
          res.cookie('session', user.authToken(), {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
          });
          res.send(user);
        } else {
          const err = new Error('Invalid email or password');
          err.status = 401;
          next(err);
        }
      });
  })

  .get('/verify', ensureAuth, (req, res) => {
    res.send(req.user);
  });
