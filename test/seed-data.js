const User = require('../lib/models/User');
const chance = require('chance').Chance();
const seedJokes = require('../lib/utils/seedJokes');
const Joke = require('../lib/models/Joke');
const Moment = require('../lib/models/Moment');

module.exports = async({ users = 5, moments = 10 } = { users: 5, moments: 10 }) => {
  const createdUsers = await User.create(
    [...Array(users)].map(() => ({
      username: chance.name(),
      password: 'password'
    }))
  );

  const createdJokes = await Joke.create(
    seedJokes.map(joke => ({
      q: joke.q,
      a: joke.a
    }))
  );

  const createdMoments = await Moment.create(
    [...Array(moments)].map(() => ({
      handle: chance.twitter(),
      text: chance.sentence(),
      tweeted: false
    }))
  );

  return {
    createdUsers,
    createdJokes,
    createdMoments
  };
};
