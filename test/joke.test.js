const { getJokes, getAgent } = require('./data-helper');

const request = require('supertest');
const app = require('../lib/app');

describe('jokes tests', () => {
  it('can create a joke', () => {
    return getAgent()
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
    const jokes = getJokes();

    return getAgent()
      .get('/api/v1/jokes')
      .then(res => {
        jokes.forEach(joke => {
          expect(res.body).toContainEqual(joke);
        });
      });
  });

  it('can return a random tweet', () => {
    return request(app)
      .get('/api/v1/jokes/random')
      .then(res => {
        expect(res.body).toHaveProperty('q');
      });
  });

  it('can delete a joke', () => {
    const joke = getJokes()[0];
    
    return getAgent()
      .delete(`/api/v1/jokes/${joke._id}`)
      .then(res => {
        expect(res.body).toHaveProperty('q');
      });
  });
});
