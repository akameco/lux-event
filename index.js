'use strict';
const EventEmitter = require('events').EventEmitter;
const ambientLight = require('ambient-light');

class LuxEvent extends EventEmitter {
	constructor() {
		super();
		this.lux = 0;
		this.time = null;
		this.on('close', () => {
			clearInterval(this.time);
		});
		this._tick();
	}

	_tick() {
		this.time = setInterval(() => {
			this._notify();
		}, 10);
	}

	_notify() {
		ambientLight().then(lux => {
			if (lux !== this.lux) {
				this.lux = lux;
				this.emit('change', this.lux);
			}
		});
	}
}

module.exports = new LuxEvent();
