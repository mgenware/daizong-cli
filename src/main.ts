#!/usr/bin/env node
import detectInstalled from 'detect-installed';
import spawn from './spawn.js';

const args = process.argv.slice(2);
const daizongCmd = 'daizong';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  try {
    if (await detectInstalled(daizongCmd, { local: true })) {
      await spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'r', '--', ...args]);
    } else {
      // eslint-disable-next-line no-console
      console.log('Preparing global daizong...');
      await spawn('npx', [daizongCmd, ...args]);
    }
  } catch (err) {
    console.error(err instanceof Error ? err.message : `${err}`);
  }
})();
