# [metalsmith](http://www.metalsmith.io/)-timestamp [![Build Status](https://travis-ci.org/danielhusar/metalsmith-timestamp.svg?branch=master)](https://travis-ci.org/danielhusar/metalsmith-timestamp)

> Add timestamp to html files

## Installation

```sh
npm install --save metalsmith-timestamp
```

## Getting Started

If you haven't checked out [Metalsmith](http://metalsmith.io/) before, head over to their website and check out the
documentation.

## CLI Usage

If you are using the command-line version of Metalsmith, you can install via npm, and then add the
`metalsmith-timestamp` key to your `metalsmith.json` file:

```json
{
  "plugins": {
    "metalsmith-timestamp": {}
  }
}
```

## JavaScript API

If you are using the JS Api for Metalsmith, then you can require the module and add it to your `.use()` directives:

```js
var timestamp = require('metalsmith-timestamp');

metalsmith.use(timestamp());
```

## Options

None yet

## License

MIT © [Daniel Husar](https://github.com/danielhusar)
