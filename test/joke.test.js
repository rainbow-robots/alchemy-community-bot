const { getJokes } = require('./data-helper');

const request = require('supertest');
const app = require('../lib/app');

describe('jokes tests', () => {
  it('can create a joke', () => {
    return request(app)
      .post('/api/v1/jokes')
      .send({ 
        q: 'this is really funny', 
        a: 'and this is the punchline' 
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          q: 'this is really funny', 
          a: 'and this is the punchline'
        });
      });
  });

  it('can get joookes', () => {
    
  })
});
