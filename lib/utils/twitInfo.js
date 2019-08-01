require('dotenv').config();
const Twit = require('twit');
const keys = require('../../config');
module.exports = new Twit(keys);
