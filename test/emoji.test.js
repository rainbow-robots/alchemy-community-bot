const { getAgent } = require('./data-helper');

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
          emojiStory: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String)
        });
      });
  });
});



