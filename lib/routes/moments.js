const { Router } = require('express');
const Moment = require('../models/Moment');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/', ensureAuth, (req, res, next) => {
    const {
      text,
      handle
    } = req.body;
    Moment
      .create({ text, handle })
      .then(moment => res.send(moment))
      .catch(next);
  })

  .get('/', ensureAuth, (req, res, next) => {
    Moment
      .find()
      .then(moment => res.send(moment))
      .catch(next);
  });
