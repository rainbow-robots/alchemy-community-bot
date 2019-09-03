const request = require('superagent');
const swearjar = require('swearjar');
const {
  verifyCredentials,
  createStream,
  postTweet,
  directMessage,
  retweet
} = require('./lib/utils/twitInfo');

const hashtagHandlers = {
  joke,
  alchemymoment,
  help
}

verifyCredentials()
  .then(() => createStream('AlchemyPDXBot'))
  .then(stream => {
    stream.on('tweet', tweetEvent);
    stream.on('error', console.error);
  })
  .catch(console.error);

function tweetEvent(event) {
  const fromHandle = event.user.screen_name;
  const tweetId = event.id_str;
  const tweetText = event.text.toLowerCase().replace(/@?alchemypdxbot/, '');
  const userId = event.user.id_str;

  if(!swearjar.profane(tweetText)) {
    // iterate through all hashtags and call the right handler
    event.entities.hashtags
      .map(object => hashtagHandlers[object.text.toLowerCase()])
      .filter(handler => handler)
      .forEach(handler => handler({ fromHandle, tweetId, tweetText, userId }));
  }
}

function joke({ fromHandle }) {
  return request
    .get('https://alchemypdxbot.herokuapp.com/api/v1/jokes/random')
    .then(({ body }) => postTweet(`.@${fromHandle}, ${body.q} ${body.a}`))
    .then(() => console.log('Joke tweeted'))
    .catch(console.error);
}

function alchemymoment({ fromHandle, tweetId, userId }) {
  return request
    .post('https://alchemypdxbot.herokuapp.com/api/v1/moments')
    .send({
      text: newText,
      handle: `@${fromHandle}`,
      twitter_id: tweetId
    })
    .then(() => directMessage(userId, `Hey @${fromHandle} thanks for your #AlchemyMoment, I have saved it in my collection and will retweet it as a throwback!`))
    .then(() => console.log('#AlchemyMoment is saved in the database'))
    .catch(console.error);
}

function help({ fromHandle, text }) {
  return postTweet(`Fellow coders, @${fromHandle} has a question: ${text}`)
    .then(() => console.log('Help tweeted'))
    .catch(console.error);
}

function momentThrowBack() {
  return request
    .get('https://alchemypdxbot.herokuapp.com/api/v1/moments/throwback')
    .then(res => retweet(res.body.twitter_id))
    .then(() => console.log('Moment retweeted'))
    .catch(console.error);
}

momentThrowBack();
