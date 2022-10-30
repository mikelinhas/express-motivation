# express-motivation

Motivational plugin for [Expressjs](https://expressjs.com/).

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install express-motivation
```

## Example

The `motivation` acts as a small middleware which will append an `X-Motivation` header to each response.

You can also use the `motivationErrorHandler` which will print out a standard `Oh no!` error if there is an `INTERNAL_SERVER_ERROR`.

```js
const express = require('express')
const app = express()
const {motivation, motivationErrorHandler} = require('express-motivation')

app.use(motivation)
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/error', function (req, res, next) {
  next(new Error("Big Error!"))
}
app.use(motivationErrorHandler)

app.listen(3000)
```

## Philosophy

We spend a whole lot of time writing, testing, and using RESTful APIs. This plugin helps to motivate you along the way.

If you are stuck trying to fix a bug on one of your endpoints, take a step back, and check what motivational phrase you are getting.

## Contributing

This is my first opensource project so I have no clue how to organize this. It would be cool to add different languages and configurations for this silly (yet fun) project.

[npm-install-size-image]: https://badgen.net/packagephobia/install/express-motivation
[npm-install-size-url]: https://packagephobia.com/result?p=express-motivation
[npm-url]: https://npmjs.org/package/express-motivation
[npm-version-image]: https://badgen.net/npm/v/express-motivation
