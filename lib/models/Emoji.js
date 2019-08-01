const mongoose = require('mongoose');

const emojiSchema = new mongoose.Schema({
  emojiStory: String
}, 
{ timestamps: true }, 
{
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});

module.exports = mongoose.model('Emoji', emojiSchema);
