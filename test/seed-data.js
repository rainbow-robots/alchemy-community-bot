const User = require('../lib/models/User');
const chance = require('chance').Chance();
const seedJokes = require('../lib/utils/seedJokes');
const Joke = require('../lib/models/Joke');

module.exports = async({ users = 5 } = { users: 5 }) => {
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

  return {
    createdUsers,
    createdJokes
  };
};
