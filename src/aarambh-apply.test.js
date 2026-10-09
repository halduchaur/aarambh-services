import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const cssSource = fs.readFileSync(path.join(process.cwd(), 'src/aarambh-apply.js'), 'utf8');

test('inline apply form header does not inherit sticky page-header behavior', () => {
  const hasExplicitRelativeHeader = /\.sa_head\s*\{[^}]*position\s*:\s*relative/i.test(cssSource);
  const hasStickyHeaderOverride = /\.sa_head\s*\{[^}]*position\s*:\s*sticky/i.test(cssSource);

  assert.equal(hasExplicitRelativeHeader, true, 'The inline form header should explicitly reset to static/relative positioning.');
  assert.equal(hasStickyHeaderOverride, false, 'The form header must not keep the app-level sticky header behavior.');
});
