import assert from 'node:assert';
import { suma } from '../src/app.js';

test('suma 2 + 3 debe ser 5', () => {
  assert.strictEqual(suma(2, 3), 5);
});
