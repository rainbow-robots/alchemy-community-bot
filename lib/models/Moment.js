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

momentSchema.method.getOldestMomentToTweet = function() {
  return this.aggregate([
    { $match: { tweeted: false } }, 
    { $sort: { createdAt: 1 } }, 
    { $limit: 1 }
  ]);
};

module.exports = mongoose.model('Moment', momentSchema);
