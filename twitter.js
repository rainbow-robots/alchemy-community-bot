const request = require('superagent');
const swearjar = require('swearjar');
const Tweet = require('./lib/utils/twitInfo');

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
    const tweetId = event.id_str;
    const userId = event.user.id_str;
    const hashtags = event.entities.hashtags.map(object => {
      return `#${object.text.toLowerCase()}`;
    });
    let newText = tweetText;
    newText = newText.replace('@alchemypdxbot', '').replace('alchemypdxbot', '');

    if(hashtags.includes('#joke')) {
      return request
        .get('https://alchemypdxbot.herokuapp.com/api/v1/jokes/random')
        .then(joke => {
          Tweet
            // eslint-disable-next-line no-unused-vars
            .post('statuses/update', { status: `.@${fromHandle}, ${joke.body.q} ${joke.body.a}` }, function(err, data, response) {
              if(!err) {
                console.log('tweeted out a joke');
              } else {
                console.log(err);
              }
            });
        });
    } else if(hashtags.includes('#alchemymoment')) {
      if(!swearjar.profane(newText)) {
        return request
          .post('https://alchemypdxbot.herokuapp.com/api/v1/moments')
          .send({
            text: newText,
            handle: `@${fromHandle}`,
            twitter_id: tweetId
          })
          .then(() => {
            console.log('#AlchemyMoment is saved in the database');
            Tweet 
              // eslint-disable-next-line no-unused-vars
              .post('direct_messages/events/new', { event: { type: 'message_create', message_create: { target: { recipient_id: userId }, message_data: { text: `Hey @${fromHandle} thanks for your #AlchemyMoment, I have saved it in my collection and will retweet it as a throwback!` } } } }, function(err, data, response) {
                if(!err) {
                  console.log('sent a DM thanking user for their #AlchemyMoment');
                } else {
                  console.log(err);
                }
              });
          });
      }
    } else if(hashtags.includes('#help')) {
      if(!swearjar.profane(newText)) {
        Tweet
          // eslint-disable-next-line no-unused-vars
          .post('statuses/update', { status: `Fellow coders, @${fromHandle} has a question: ${newText}` }, function(err, data, response) {
            if(!err) {
              console.log('retweeted a help question');
            } else {
              console.log(err);
            }
          });
      }
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
      console.log(res.body.twitter_id);
      Tweet
        // eslint-disable-next-line no-unused-vars
        .post('statuses/retweet/:id', { id: res.body.twitter_id }, function(err, data, response) {
          if(!err) {
            console.log('posted a throw back');
          } else {
            console.log(err);
          }
        });
    });
}

setInterval(momentThrowBack, 82800000);




