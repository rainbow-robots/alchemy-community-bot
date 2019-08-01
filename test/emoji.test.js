const { getAgent } = require('./data-helper');
const request = require('supertest');
const app = require('../lib/app');

describe('emoji neotrellis raspberry pi oh my tests', () => {
  
  it('can tweet an emoji story', () => {
    return getAgent()
      .post('/api/v1/emojis')
      .send({
        emojiStory: 'abcdef'
      })
      .then(res => {
        expect(res.body).toEqual({
        _id: expect.any(String),
        emojiStory: expect.any(String)
        });
      });
  });
});



