const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  q: String,
  a: String
}, 
{
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});
jokeSchema.statics.randomJoke = function() {
  return this.aggregate([
    { $sample: { size: 1 } }, 
    { $project: { q: true, a: true, _id: false } } 
  ]);
};

module.exports = mongoose.model('Joke', jokeSchema);
