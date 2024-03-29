const { getMoments, getAgent } = require('./data-helper');
const request = require('supertest');
const app = require('../lib/app');

describe('MOMENTOUS OCCASION', () => {
  it('can make beautiful moments', () => {
    return request(app)
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

  it('can get oldest moment and update tweeted: true', () => {
    return request(app)
      .get('/api/v1/moments/throwback')
      .then(res => {
        expect(res.body.tweeted).toBeTruthy();
      });
  });

  it('it can update the tweeted', () => {
    const moment = getMoments()[0];
    return getAgent()
      .patch(`/api/v1/moments/${moment._id}`)
      .send({ tweeted: true })
      .then(res => {
        expect(res.body.tweeted).toEqual(true);
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
