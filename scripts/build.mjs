import {readFile,writeFile,mkdir,readdir,rm} from 'node:fs/promises';
const types={html:'text/html; charset=utf-8',js:'application/javascript; charset=utf-8',css:'text/css; charset=utf-8',svg:'image/svg+xml'};
for(const name of ['index.html','app.js','agency.js','styles.css','favicon.svg'])await rm('dist/'+name,{force:true});
const files={};for(const name of await readdir('web'))files['/'+name]={body:await readFile('web/'+name,'utf8'),type:types[name.split('.').pop()]||'text/plain'};
const importer=await readFile('worker/importer.mjs','utf8'),server=(await readFile('worker/index.mjs','utf8')).replace("import {importBrand,retrieve} from './importer.mjs';",'');
await mkdir('dist/server',{recursive:true});await mkdir('dist/.openai',{recursive:true});await writeFile('dist/server/index.js','const STATIC_FILES='+JSON.stringify(files)+';\n'+importer+'\n'+server);await writeFile('dist/.openai/hosting.json',await readFile('.openai/hosting.json','utf8'));
const module=await import('data:text/javascript;base64,'+Buffer.from(await readFile('dist/server/index.js','utf8')).toString('base64'));if(typeof module.default?.fetch!=='function')throw new Error('Worker fetch missing');console.log('Built and validated embedded Astoria Worker.');
