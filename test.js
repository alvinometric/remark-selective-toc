import test from 'node:test';
import assert from 'node:assert/strict';
import { remark } from 'remark';
import selectiveTOC from './index.js';
import { readSync } from 'to-vfile';

const markdown = readSync('./test.md');

test('no argument', async () => {
  const file = await remark().use(selectiveTOC, { className: 'hi' }).process(markdown);

  console.log(file.toString());
});
