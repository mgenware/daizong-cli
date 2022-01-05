#!/usr/bin/env node
import spawn from './spawn.js';

const args = process.argv.slice(2);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  try {
    await spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['daizong', ...args]);
  } catch (err) {
    console.error(err instanceof Error ? err.message : `${err}`);
  }
})();
