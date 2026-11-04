const fs=require('node:fs');
const html=fs.readFileSync('index.html','utf8').replace('<script type="module" src="/src/app.ts"></script>','<script defer src="./assets/entry.js"></script>');
fs.writeFileSync('dist/index.html',html);
