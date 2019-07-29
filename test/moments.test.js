const { getMoments, getAgent } = require('./data-helper');

// const request = require('supertest');
// const app = require('../lib/app');

describe('MOMENTOUS OCCASION', () => {
  it('can make beautiful moments', () => {
    return getAgent()
      .post('/api/v1/moments')
      .send({
        handle: 'arrrg',
        text: 'piiirate'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          handle: 'arrrg',
          text: 'piiirate',
          tweeted: false,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          __v: 0
        });
      });
  });

  it('can get all moments', () => {
    const moments = getMoments();

    return getAgent()
      .get('/api/v1/moments')
      .then(res => {
        moments.forEach(moment => {
          expect(res.body).toContainEqual(moment);
        });
      });
  });

  it('it can delete a moment', () => {
    const moment = getMoments()[0];

    return getAgent()
      .delete(`/api/v1/moments/${moment._id}`)
      .then(res => {
        expect(res.body).toHaveProperty('text');
      });
  });
});
