const fs = require('node:fs');
const entries = fs.readdirSync('dist/assets').filter(name => /^entry-[\w-]+\.js$/.test(name));
if (entries.length !== 1) throw new Error('Expected exactly one built entry script');
const source = fs.readFileSync('index.html', 'utf8');
const marker = '<script type="module" src="/src/app.ts"></script>';
if (!source.includes(marker)) throw new Error('Source entry script was not found');
const html = source.replace(marker, `<script defer src="./assets/${entries[0]}"></script>`);
fs.writeFileSync('dist/index.html', html);
