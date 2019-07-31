const { Router } = require('express');
const Moment = require('../models/Moment');
const ensureAuth = require('../middleware/ensure-auth');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      text,
      handle,
      img_id
    } = req.body;
    Moment
      .create({ text, handle, img_id })
      .then(moment => res.send(moment))
      .catch(next);
  })

  .get('/', ensureAuth, (req, res, next) => {
    Moment
      .find()
      .then(moment => res.send(moment))
      .catch(next);
  })

  .get('/throwback', (req, res, next) => {
    Moment
      .findOneAndUpdate({ tweeted: false }, { tweeted: true }, { new: true, $sort: { createdAt: 1 } })
      .then(tweetedMoment => res.send(tweetedMoment))
      .catch(next);
  })

  .patch('/:id', ensureAuth, (req, res, next) => {
    const {
      tweeted
    } = req.body;
    Moment
      .findByIdAndUpdate(req.params.id, { tweeted }, { new: true })
      .then(updatedMoment => res.send(updatedMoment))
      .catch(next);
  })

  .delete('/:id', ensureAuth, (req, res, next) => {
    Moment
      .findByIdAndDelete(req.params.id)
      .then(moment => res.send(moment))
      .catch(next);
  });
