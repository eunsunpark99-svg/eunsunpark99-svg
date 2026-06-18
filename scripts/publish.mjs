import { spawnSync } from 'node:child_process';

const message = process.argv.slice(2).join(' ').trim() || 'Update site';
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function run(command, args) {
  const result = spawnSync(command, args, { shell: false, stdio: 'inherit' });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run(npmCommand, ['run', 'deploy']);
run('git', [
  'add',
  'src',
  'docs',
  'public',
  'index.html',
  'package.json',
  'package-lock.json',
  'vite.config.js',
  'scripts',
]);
run('git', ['commit', '-m', message]);
run('git', ['push', 'origin', 'main']);
