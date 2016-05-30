[![Build Status](https://travis-ci.org/mamal72/node-yahoo-weather.svg?branch=master)](https://travis-ci.org/mamal72/node-yahoo-weather)
[![npm version](https://badge.fury.io/js/yahoo-weather.svg)](https://badge.fury.io/js/yahoo-weather)
# node-yahoo-weather
**node-yahoo-weather** is a dead simple isomorphic JavaScript weather module in 10 lines of code.

The code is written using [ES2015](https://babeljs.io/docs/learn-es2015/) and simply transformed back using [babel](https://babeljs.io) to the `dist` directory using a [Grunt](http://gruntjs.com/) task.

I made this module cause I need it and I feel it may be used by someone, someday. Let's get started! :grin:


## Installation

Clone the repo or install it from `npm`:
```bash
npm install yahoo-weather --save
```


## Usage

Dead simple, as I said! Just one required param. Check it:
```js
import weather from 'yahoo-weather'; // or require it

weather('tehran').then(info => {
  // Do what you want with `info`!
}).catch(err => {
  // Oops! Errors! :(
});

weather('tehran', 'f').then(info => { // second arg is the weather unit. you can pass 'c' or 'f'. defaults to 'c'.
  // Do what you want with `info`!
}).catch(err => {
  // Oops! Errors! :(
});

// or use it with awesome async & await
async () => {
  try {
    const info = await weather('tehran');
    // Do what you want with `info`!
  } catch (err) {
    // Oops! Errors! :(
  }
}();
```


## Tests

Run the tests with following command:

```bash
npm test
```


## Ideas?

Just fill an issue and describe it. I'll check it ASAP. :grin:


## Contribution

You can fork the repository, improve or fix it and then send the pull requests back if you want to see them here. I really appreciate that. :heart:

Remember to lint your code before sending pull requests. Execute the linter script by running the following command and fix the errors if you get any.

```bash
npm run lint
```
