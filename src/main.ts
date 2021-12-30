#!/usr/bin/env node
import spawn from './spawn.js';

const args = process.argv.slice(2);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  await spawn('npm', ['run', 'r', '--', ...args]);
})();
