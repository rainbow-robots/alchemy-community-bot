require('dotenv').config();
const Twit = require('twit');
const keys = require('./config');
const Tweet = new Twit(keys);
Tweet
  .get('account/verify_credentials', {
    include_entities: false,
    skip_status: true,
    include_email: false
  }, onAuthenticated);
// eslint-disable-next-line no-unused-vars
function onAuthenticated(err, res) {
  if(err) {
    throw err;
  }

  Tweet
    // eslint-disable-next-line no-unused-vars
    .post('statuses/update', { status: 'Hey @lasermistress, this is a test' }, function(err, data, response) {
      // eslint-disable-next-line no-console
      console.log('tweet worked?');
    });
}


