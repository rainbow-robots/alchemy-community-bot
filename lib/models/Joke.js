const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  q: String,
  a: String
}, {
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});

module.exports = mongoose.model('Joke', jokeSchema);
