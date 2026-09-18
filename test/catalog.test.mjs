import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEntry, renderCatalog, loadCatalog } from '../scripts/catalog.mjs';

const categories = { search: 'Search', sdk: 'SDK', other: 'Other' };
const entry = { name: 'Example', repository: 'owner/repo', description: 'A search project.', category: 'search', evidence: ['src/search.ts'] };

test('invalid entries cannot enter generated output', () => {
  for (const change of [{ repository: 'https://evil.example' }, { evidence: ['../secret'] }, { evidence: ['/etc/passwd'] }, { category: '__proto__' }, { description: 'two\nlines' }, { extra: true }]) assert.throws(() => validateEntry({ ...entry, ...change }, 'owner--repo.json', categories));
  assert.throws(() => validateEntry(entry, 'another-name.json', categories));
});

test('generated README is sorted, escapes markup and includes each entry once', () => {
  const out = renderCatalog('# Directory', [{ ...entry, name: 'Zebra <img>' }, { ...entry, name: 'Alpha', repository: 'owner/another' }], categories);
  assert.ok(out.indexOf('Alpha') < out.indexOf('Zebra'));
  assert.ok(out.includes('&lt;img&gt;'));
  assert.equal(out.split('https://github.com/owner/repo').length, 2);
  assert.ok(!out.includes('### Other'));
});

test('committed catalog is valid', async () => {
  const { entries } = await loadCatalog(); assert.ok(entries.length >= 1);
});
