# AlchemyPDXBot #

**AlchemyPDXBot** is a whimsical twitter bot created by Claire Cassidy (@lasermistress), Emily Ford (@cybruja), and Alex Ramirez de Cruz (@dev_de_cruz) for the alchemy code lab community. 

* If you have a coding question just include our bot handle **@AlchemyPDXBot** and your question with **#help** and the bot will post your original question so the alchemy community can comment with answers/ideas.
* Had a long day of coding and need a pick-me-up? Tweet **@AlchemyPDXBot** with **#joke**, and our bot will tweet you a random coding joke.
* Did you meet a milestone or have a favorite memory or pic of your time at alchemy? Tweet **@AlchemyPDXBot** with **#AlchemyMoment** and it will be saved in a collection and retweeted as a throwback once a week.
* We also have a Rasberry Pi with a keypad of emojis we programmed, living within the Alchemy building, coders can take a moment in their day to create an emoji story on the keypad and our bot will post it.

### Dont have a twitter? ###

You can still get a random joke by putting *https://alchemypdxbot.herokuapp.com/api/v1/jokes/random* into the browser,to get a random coding joke, refresh for another.

### The Tech ###

AlchemyPDXBot was created using:
* Node.js
* MongoDB
* Express 
* Jest for testing
* npm packages: *twit* for accessing the twitter api and *swearjar* for ensuring data we were retweeting or saving in our database didn't include inappropriate or crud language.
