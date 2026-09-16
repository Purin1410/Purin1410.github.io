import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { credentials, aioModules } from '../src/data/credentials.mjs';

test('credential inventory preserves unique verified IDs and six featured groups', () => {
  const hasPrivateSources = existsSync('PORTFOLIO/coursera_cert');
  assert.equal(credentials.length, 18);
  assert.equal(credentials.filter(c => c.featured).length + 1, 6);
  assert.equal(new Set(credentials.map(c => c.id)).size, 18);
  assert.equal(new Set(credentials.map(c => c.url)).size, 18);
  assert.equal(aioModules.length, 4);
  assert.equal(credentials.filter(c => c.kind === 'Professional Certificate').length, 2);
  assert.equal(credentials.filter(c => c.kind === 'Specialization').length, 9);
  assert.equal(credentials.filter(c => c.kind === 'Course').length, 7);
  for (const c of credentials) {
    assert.match(c.url, /^https:\/\/coursera\.org\/verify\/(?:specialization\/|professional-cert\/)?[A-Z0-9]+$/);
    assert.match(c.date, /^\d{4}-\d{2}-\d{2}$/);
    if (hasPrivateSources) assert.ok(existsSync(`PORTFOLIO/coursera_cert/${c.source}`));
    assert.ok(existsSync(`public${c.image}`));
  }
  for (const c of aioModules) assert.ok(existsSync(`public${c.image}`));
});
