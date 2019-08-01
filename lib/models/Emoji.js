const mongoose = require('mongoose');

const emojiSchema = new mongoose.Schema({
  emojiStory: String
}, {
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});

module.exports = mongoose.model('Emoji', emojiSchema);
