require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const connect = require('../lib/utils/connect');
const app = require('../lib/app');
const seedData = require('./seed-data');

const prepare = arr => JSON.parse(JSON.stringify(arr));

beforeAll(() => {
  connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

let agent = request.agent(app);
let seededUsers = null;
let seededJokes = null;

beforeEach(async() => {
  const { createdUsers, createdJokes } = await seedData();
  seededUsers = prepare(createdUsers);
  seededJokes = prepare(createdJokes);

  return await agent
    .post('/api/v1/auth/signin')
    .send({ username: createdUsers[0].username, password: 'password' });
});

afterAll(() => {
  return mongoose.connection.close();
});

module.exports = {
  getAgent: () => agent,
  getUsers: () => seededUsers,
  getJokes: () => seededJokes
};
