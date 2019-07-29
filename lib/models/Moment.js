const mongoose = require('mongoose');

const momentSchema = new mongoose.Schema({
  handle: String,
  text: String,
  tweeted: {
    type: Boolean,
    default: false
  }
}, 
{ timestamps: true },
{
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});

module.exports = mongoose.model('Moment', momentSchema);
