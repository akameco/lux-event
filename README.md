# lux-event [![Build Status](https://travis-ci.org/akameco/lux-event.svg?branch=master)](https://travis-ci.org/akameco/lux-event)

> get lux value by eventemitter for osx user

## Installation

```
$ npm install --save lux-event
```

## Usage

```js
const luxEvent = require('lux-event');
luxEvent.on('change', v => {
	console.log(v);
	// => 120
});
```

## License

MIT
