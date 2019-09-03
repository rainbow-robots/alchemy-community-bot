require('dotenv').config();
const Twit = require('twit');
const keys = require('../../config');

const Tweet = new Twit(keys);

const verifyCredentials = () => {
  return Tweet
    .get('account/verify_credentials', {
      include_entities: false,
      skip_status: true,
      include_email: false
    });
};

const createStream = track => {
  return Tweet
    .stream('statuses/filter', { track });
}

const retweet = id => {
  return Tweet.post('statuses/retweet/:id', { id });
}

const postTweet = status => {
  return Twee.post('statuses/update', { status });
}

const directMessage = (userId, text) => {
  return Tweet
    .post('direct_messages/events/new', {
      event: {
        type: 'message_create',
        message_create: {
          target: {
            recipient_id: userId
          },
          message_data: {
            text
          }
        }
      }
    });
}

module.exports = {
  verifyCredentials,
  createStream,
  retweet,
  postTweet,
  directMessage
}
