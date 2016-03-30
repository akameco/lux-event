import test from 'ava';
import LuxEvent from '.';

test('change event', async t => {
	const lux = new LuxEvent();
	lux.on('change', v => {
		t.true(v >= 0);
	});
	lux.emit('change', 1);
});
