import { readFile, readdir, writeFile, lstat } from 'node:fs/promises';
import { resolve, join, basename } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/@/g, '&#64;').replace(/([\\`*_{}\[\]()#+.!|~])/g, '\\$1');

export function validateEntry(entry, filename, categories) {
  assert(entry && typeof entry === 'object' && !Array.isArray(entry), 'Entry must be an object');
  assert(Object.keys(entry).every(k => ['name', 'repository', 'description', 'category', 'evidence'].includes(k)), 'Unknown entry field');
  for (const [key, limit] of [['name', 80], ['description', 350]]) {
    assert(typeof entry[key] === 'string' && entry[key].trim().length > 0 && entry[key].length <= limit && !/[\u0000-\u001f]/.test(entry[key]), `Invalid ${key}`);
  }
  assert(typeof entry.repository === 'string' && /^[A-Za-z0-9][A-Za-z0-9-]{0,38}\/[A-Za-z0-9][A-Za-z0-9_.-]{0,99}$/.test(entry.repository), 'Invalid GitHub repository');
  assert(filename === `${entry.repository.toLowerCase().replace('/', '--')}.json`, 'Entry filename must match owner--repository.json');
  assert(Object.hasOwn(categories, entry.category) && entry.category !== 'other', 'Unsupported category');
  if (entry.evidence !== undefined) {
    assert(Array.isArray(entry.evidence) && entry.evidence.length <= 6 && new Set(entry.evidence).size === entry.evidence.length, 'Optional evidence must contain at most 6 distinct paths');
    for (const path of entry.evidence) assert(typeof path === 'string' && path.length <= 240 && !/[\\\u0000-\u001f?#]/.test(path) && path.split('/').every(p => p && p !== '.' && p !== '..'), 'Invalid evidence path');
  }
  return entry;
}

export async function loadCatalog(directory = root) {
  const policy = JSON.parse(await readFile(join(directory, '.github/jev-review.json'), 'utf8'));
  const names = await readdir(join(directory, 'entries'));
  assert(names.length <= 1000, 'Catalog exceeds the current validation limit');
  const entries = [];
  const seen = new Set();
  for (const name of names.sort()) {
    assert(name.endsWith('.json'), 'Only JSON entry files are allowed');
    const path = join(directory, 'entries', name);
    const stat = await lstat(path);
    assert(stat.isFile() && !stat.isSymbolicLink() && stat.size <= 8000, 'Entry must be a regular file of at most 8 KB');
    const entry = validateEntry(JSON.parse(await readFile(path, 'utf8')), name, policy.categories);
    const key = entry.repository.toLowerCase();
    assert(!seen.has(key), 'Duplicate repository'); seen.add(key);
    entries.push(entry);
  }
  return { policy, entries };
}

export function renderCatalog(introduction, entries, categories, footer = '') {
  const lines = [introduction.trimEnd(), '', '## Projects', '', `${entries.length} projects.`, ''];
  for (const category of Object.keys(categories).filter(c => c !== 'other')) {
    const group = entries.filter(e => e.category === category).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'en'));
    if (!group.length) continue;
    const title = category === 'sdk' ? 'SDKs' : category.replace(/_/g, ' ');
    lines.push(`### ${title[0].toUpperCase()}${title.slice(1)}`, '');
    for (const entry of group) lines.push(`- [${escape(entry.name)}](https://github.com/${entry.repository}) — ${escape(entry.description)}`);
    lines.push('');
  }
  if (footer.trim()) lines.push(footer.trim(), '');
  return `${lines.join('\n')}`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const command = process.argv[2] ?? 'check';
    assert(['check', 'build'].includes(command), 'Use check or build');
    const { policy, entries } = await loadCatalog();
    if (command === 'build') await writeFile(join(root, 'README.md'), renderCatalog(await readFile(join(root, 'docs/introduction.md'), 'utf8'), entries, policy.categories, await readFile(join(root, 'docs/footer.md'), 'utf8')));
    console.log(`${basename(root)}: ${entries.length} valid entries${command === 'build' ? '; README generated' : ''}`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
