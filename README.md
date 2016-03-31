# lux-event [![Build Status](https://travis-ci.org/akameco/lux-event.svg?branch=master)](https://travis-ci.org/akameco/lux-event)

> get lux value by eventemitter for osx user

## Installation

```
$ npm install --save lux-event
```

## Usage

```js
const LuxEvent = require('lux-event');
const lux = new LuxEvent();
lux.on('change', v => {
	console.log(v);
	// => 120
});
```

## License

MIT
