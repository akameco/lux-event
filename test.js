import test from 'ava';
import luxEvent from './';

test('change event', async t => {
	luxEvent.on('change', v => {
		t.true(v >= 0);
	});
	luxEvent.emit('change', 1);
});
