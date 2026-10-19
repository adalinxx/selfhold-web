import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile, access,readdir} from 'node:fs/promises';
const html=await readFile('public/index.html','utf8');
test('store links use the established item without stale release assertions',()=>{assert.match(html,/detail\/selfhold\/amcobhbipbblfjonmoiicihhfglkhpce/);assert.doesNotMatch(html,/uploaded draft|not yet live|Lattice Wallet 0\.3\.1/);});
test('local assets and page anchors resolve',async()=>{for(const file of ['index.html','privacy.html']){const content=await readFile('public/'+file,'utf8');for(const [,url] of content.matchAll(/(?:href|src)="([^"]*)"/g)){if(url==='#')continue;if(url.startsWith('#'))assert.ok(content.includes('id="'+url.slice(1)+'"'),url);else if(!/^(https:|mailto:)/.test(url))await access('public/'+url);}}});
test('no analytics, forms, wallet connections or external asset requests',()=>{assert.doesNotMatch(html,/<script|<form|<iframe|window\.lattice|https?:\/\/selfhold\.app/i);for(const [,url] of html.matchAll(/src="([^"]+)"/g))assert.ok(!url.startsWith('http'));});
test('published text contains no local identity or paths',async()=>{for(const file of await readdir('public')){if(!/\.(html|css)$/.test(file))continue;assert.doesNotMatch(await readFile('public/'+file,'utf8'),/\/Users\/|\/home\/|Co-authored-by|@proton\./i);}});
