import {readFile} from 'node:fs/promises';
const html=await readFile('public/index.html','utf8')+await readFile('public/privacy.html','utf8');
const urls=[...new Set([...html.matchAll(/href="(https:[^"]+)"/g)].map(m=>m[1]))];
let failed=0;
for(const url of urls){try{const r=await fetch(url,{signal:AbortSignal.timeout(30000)});console.log(r.status,url);if(!r.ok)failed++;}catch(e){console.log('FAILED',url,e.message);failed++;}}
if(failed)process.exitCode=1;
