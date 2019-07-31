require('dotenv').config();
const Twit = require('twit');
const request = require('superagent');
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

  const stream = Tweet.stream('statuses/filter', { track: 'AlchemyPDXBot' });
  stream.on('tweet', tweetEvent);
  stream.on('error', onError);

  function tweetEvent(event) {
    const fromHandle = event.user.screen_name;
    const tweetText = event.text.toLowerCase();
    let newText = tweetText;
    newText = newText.replace('@alchemypdxbot', '').replace('alchemypdxbot', '');
    const hashtags = event.entities.hashtags.map(object => {
      return `#${object.text}`;
    });

    if(hashtags.includes('#joke')) {
      return request
        .get('https://alchemypdxbot.herokuapp.com/api/v1/jokes/random')
        .then(joke => {
          Tweet
            // eslint-disable-next-line no-unused-vars
            .post('statuses/update', { status: `.@${fromHandle}, ${joke.body.q} ${joke.body.a}` }, function(err, data, response) {
              console.log('tweeted out a joke');
            });
        });
    } else if(hashtags.includes('#moment')) {
      return request
        .post('https://alchemypdxbot.herokuapp.com/api/v1/moments')
        .send({
          text: newText,
          handle: `@${fromHandle}`
        })
        .then(() => {
          console.log('moment is saved?');
        });
    } else if(hashtags.includes('#help')) {
      Tweet
        // eslint-disable-next-line no-unused-vars
        .post('statuses/update', { status: `Hey alchemers, @${fromHandle} needs help with: ${newText}` }, function(err, data, response) {
          console.log('retweeted help question');
        });
    }
  }

  function onError(error) {
    throw error;
  }
}

function momentThrowBack() {
  return request
    .get('https://alchemypdxbot.herokuapp.com/api/v1/moments/throwback')
    .then(res => {
      Tweet
        .post('statuses/update', { status: `Remember when ${res.body.handle} had a moment: ${res.body.text}` }, function(err, data, response) {
          console.log('posted a throw back');
        });
    });
}
setInterval(momentThrowBack, 120000);



