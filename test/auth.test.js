const { getAgent, getUsers } = require('./data-helper');
const request = require('supertest');
const app = require('../lib/app');

describe('auth routes', () => {
  it('can create a user', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({
        username: 'ROBOT',
        password: 'password'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: 'ROBOT'
        });
      });
  });

  it('signs in a user and provides token', () => {
    const user = getUsers()[0];
    return request(app)
      .post('/api/v1/auth/signin')
      .send({
        username: user.username,
        password: 'password'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: user.username
        });
      });
  });

  it('can verify a user with token', () => {
    return getAgent() 
      .get('/api/v1/auth/verify')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: expect.any(String),
        });
      });
  });
});
