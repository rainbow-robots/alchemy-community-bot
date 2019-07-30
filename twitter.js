require('dotenv').config();
const Twit = require('twit');
const Joke = require('./lib/models/Joke');
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
      Joke
        .get('https://alchemypdxbot.herokuapp.com/api/v1/jokes/random')
        .then(joke => {
          return joke;
        })
        .then(joke => {
          Tweet
            .post('status/update', { status: `Yo @${fromHandle}, here is your joke: ${joke}` }, function(err, data, response) {
              console.log('tweeted out a joke');
            });
        });
    } else if(hashtags.includes('#moment')) {
      //function to grab event.text and event.user.screen_name
      //then use post route to create and save it
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


