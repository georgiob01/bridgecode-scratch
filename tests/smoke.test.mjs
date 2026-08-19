import test from 'node:test'
import assert from 'node:assert'

test('smoke', () => {
  assert.strictEqual(1 + 1, 5) // deliberately broken (exit-test step 5)
})
