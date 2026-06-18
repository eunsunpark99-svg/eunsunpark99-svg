import { cp, mkdir, rm, writeFile } from 'node:fs/promises';

await rm('docs', { force: true, recursive: true });
await mkdir('docs', { recursive: true });
await cp('dist', 'docs', { recursive: true });
await writeFile('docs/.nojekyll', '');

console.log('Copied dist to docs for GitHub Pages.');
