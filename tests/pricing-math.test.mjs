import test from 'node:test'
import assert from 'node:assert'
import { readFileSync } from 'node:fs'

test('package metadata', () => {
  const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
  assert.strictEqual(pkg.name, 'scratch-site')
})
