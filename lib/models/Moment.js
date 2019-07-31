const mongoose = require('mongoose');

const momentSchema = new mongoose.Schema({
  handle: String,
  text: String,
  twitter_id: String,
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

momentSchema.methods.getOldestMomentToTweet = function() {
  return this.aggregate([
    { $match: { tweeted: false } }, 
    { $sort: { createdAt: 1 } }, 
    { $limit: 1 }
  ]);
};

module.exports = mongoose.model('Moment', momentSchema);
