const seedJokes = [
  {
    q: 'How do you get the code for the bank vault?',
    a: 'You checout their branch.'
  },
  {
    q: 'Why did the security conscious engineer refuse to pay their dinner bill?',
    a: 'Because they could not verify the checksum.'
  },
  {
    q: 'What do you call a busy waiter?',
    a: 'A server.'
  },
  {
    q: 'How many Prolog programmers does it take to change a lightbulb?',
    a: 'Yes'
  },
  {
    q: 'I have been hearing news about this big boolean.',
    a: 'Huge if true.'
  },
  {
    q: 'What diet did the ghost developer do on?',
    a: 'Boolean.'
  },
  {
    q: 'Why was the developer unhappy at their job?',
    a: 'They wanted arrays.'
  },
  {
    q: 'Why did 10 get paid less than "10"?',
    a: 'There was a workplace inequality.'
  },
  {
    q: 'Why was the function sad after a successful first call?',
    a: 'It did not get a callback.'
  },
  {
    q: 'Why did the angry function exceed the callstack size?',
    a: 'It got into an Argument with itself.'
  },
  {
    q: 'What is the object-oriented way to become wealthy?',
    a: 'Inheritance.'
  },
  {
    q: 'Why did the developer ground their kid?',
    a: 'They were not telling the truthy.'
  },
  {
    q: 'What did the array say after it was extended?',
    a: 'Stop objectifying me.'
  },
  {
    q: '!false',
    a: 'It is funny because it is true.'
  },
  {
    q: 'Where did the parallel function wash its hands?',
    a: 'Async'
  },
  {
    q: 'I am starting a band called HTML Encoder...',
    a: 'Looking to buy a guitar &amp;'
  },
  {
    q: 'Why did the functions stop calling each other?',
    a: 'Because they had constant arguments.',
  },
  {
    q: 'What is the second movie about a databse engineer called?',
    a: 'The SQL.'
  },
  {
    q: 'Why can\'t Hollywood make more Big Data movies?',
    a: 'NoSQL.'
  },
  {
    q: 'A programmer\'s significant other tells them, "Run to the store and pick up a loaf of bread. If they have eggs, get a dozen.',
    a: 'The progrmammer comes home with 12 loaves of bread.'
  },
  {
    q: 'What did teh spider do on the computer?',
    a: 'Made a website!'
  },
  {
    q: 'What did the computer do at lunchtime?',
    a: 'Had a byte!'
  },
  {
    q: 'What does a baby computer call his father?',
    a: 'Data!'
  },
  {
    q: 'Why did the computer keep sneezing?',
    a: 'It had a virus!'
  },
  {
    q: 'What is a computer virus?',
    a: 'A terminal illness!'
  },
  {
    q: 'Why was the computer freezing?',
    a: 'It left its Windows open!'
  },
  {
    q: 'Why was there a bug in the computer?',
    a: 'Because it was looking for a byte to eat.'
  },
  {
    q: 'Why did the computer squeak?',
    a: 'Because someone stepped on its mouse!'
  },
  {
    q: 'What do you get when you cross a computer and a life guard?',
    a: 'A screensaver.'
  },
  {
    q: 'Where do all the cool mice live?',
    a: 'In their mousepads!'
  },
  {
    q: 'What do you get when you cross a computer with an elephant?',
    a: 'Lots of memory!'
  },
  {
    q: 'Java truly is an OOP language...',
    a: 'As in: OOPs I used Java!'
  },
  {
    q: 'How do programming shepards count their flock?',
    a: 'With lambda functions.'
  },
  {
    q: 'What airline do developers prefer when they are in a rush?',
    a: 'Delta.'
  },
  {
    q: 'How did pirates collaborate before computers?',
    a: 'Pier to pier networking.'
  },
  {
    q: 'Why don\'t bachelors like Git?',
    a: 'Because they are afraid to commit.'
  },
  {
    q: 'A SQL query goes into a bar, walks up to two tables and asks:',
    a: 'Can I JOIN you?'
  },
  {
    q: 'How does a developer makes a cheer?',
    a: '["hip", "hip"]//(hip hip array!)'
  },
  {
    q: 'Why was the developer\'s family upset with them at dinner?',
    a: 'They forgot to git squash before going home.'
  },
  {
    q: 'What did JavaScript call his son',
    a: 'JSON'
  },
  {
    q: 'What did the proud React component sat to its child?',
    a: 'I\'ve got to give you props!'
  },
  {
    q: 'What did the server say to his client who was having a bad day?',
    a: 'Everything is going to be 200.'
  },
  {
    q: 'Why did the developer go broke?',
    a: 'Because they used up all their cache.'
  },
  {
    q: 'Are computers dangerous?',
    a: 'Nah, they don\'t byte. They just nibble a bit.'
  },
  {
    q: 'How did the mafioso kill the Node server?',
    a: 'Tie await to it and let it async.'
  },
  {
    q: 'You know what the best thing about booleans is?',
    a: 'Even if you are wrong, you are only off by a bit.'
  },
  {
    q: 'Why couldn’t the user update a file on a shared server?',
    a: 'They didn’t have the write permissions.'
  },
  {
    q: 'What do you do when you can\'t understand your husband\'s behavior?',
    a: 'man man.'
  },
  {
    q: 'How many developers does it take to change a light bulb?',
    a: 'None. It\'s a hardware issue.'
  },
  {
    q: 'Why do programmers always mix up Halloween and Christmas?',
    a: 'Because 31 OCT == 25 DEC.'
  },
  {
    q: 'Why do kayakers make bad programmers?',
    a: 'Because they\'re afraid of waterfall.'
  },
  {
    q: 'What are computers\' favorite snacks?',
    a: 'Microchips, phish sticks, and cookies. But just a few bytes of each.'
  },
  {
    q: 'What do computers love to do at the beach?',
    a: 'Put on some spam block for protection so they can safely surf the net while catching some .WAVs!'
  },
  {
    q: 'What\'s a compiler developer\'s favorite spice?',
    a: 'Parsley.'
  },
  {
    q: 'A SQL developer walked into a NoSQL bar.',
    a: 'They left because they couldn\'t find a table.'
  },
  {
    q: 'How do you help JS errors?',
    a: 'You console them!'
  },
  {
    q: 'Why don\'t parents teach their kids about regular expressions?',
    a: 'Because they don\'t want them playing with matches.'
  },
  {
    q: 'Why didn\'t the <div /> get invited to the dinner party?',
    a: 'Because it had no class!'
  },
  {
    q: 'Why did the constant break up with the variable?',
    a: 'Because they changed.'
  },
  {
    q: 'Why did the database administrator leave his wife?',
    a: 'She had one-to-many relationships.'
  },
  {
    q: 'Asynchronous JavaScript is amazing.',
    a: 'I Promise you, await and see.'
  },
  {
    q: 'What did the Class say in court when put on trial?',
    a: 'I strongly object!'
  },
  {
    q: 'Why do Java developers wear glasses?',
    a: 'Because they don\'t C#!'
  },
  {
    q: 'What are the three hardest problems in computer science?',
    a: 'Naming things and off-by-one errors.'
  },
  {
    q: 'What did the fruit basket say to the developer?',
    a: 'I hope you\'re ready for some pear programming!'
  },
  {
    q: 'Why do all HTML emails get blocked?',
    a: 'Because they are all <span />.'
  },
  {
    q: 'What did the process say after working in an infinite loop all day?',
    a: 'I need a break.'
  },
  {
    q: 'An Agent died unexpectedly. How was the crime solved?',
    a: 'By looking at the Stack Trace.'
  },
  {
    q: 'Why did the document store go out of business?',
    a: 'It had NoSQL.'
  },
  {
    q: 'Why can\'t SQL and NoSQL Developers date one other?',
    a: 'Because they don\'t agree on relationships.'
  },
  {
    q: 'Where did the API go to eat?',
    a: 'To the RESTaurant.'
  },
  {
    q: 'Why couldn\'t the React component understand the joke?',
    a: 'Because it didn\'t get the context.'
  },
  {
    q: 'What accommodations did the JavaScript developer request at the hotel?',
    a: 'A room with a Vue.'
  },
  {
    q: 'Who used the internet before it was cool?',
    a: 'Httpsters.'
  },
  {
    q: 'Why did the web developer always go to the wrong hotel room?',
    a: 'They were in room 301.'
  },
  {
    q: 'Did you hear what the clumsy cryptographer did to their password?',
    a: 'Made a hash of it.'
  },
  {
    q: 'What are clouds made of?',
    a: 'Mostly linux servers.'
  },
  {
    q: 'A new database query walks into a bar.',
    a: 'The server says "Sorry, cache only."'
  },
  {
    q: 'What\'s the best tool for automatically ignoring long email threads about tech buzzwords?',
    a: '"Block-chain"'
  }
];

module.exports = seedJokes;
