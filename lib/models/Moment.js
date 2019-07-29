const mongoose = require('mongoose');

const momentSchema = new mongoose.Schema({
  handle: String,
  text: String,
  tweeted: {
    type: Boolean,
    default: false
  }
}, { timestamp: true });

module.exports = mongoose.model('Moment', momentSchema);
