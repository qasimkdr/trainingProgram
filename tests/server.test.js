import test from 'node:test';import assert from 'node:assert/strict';import {spawn} from 'node:child_process';import {mkdtemp,rm} from 'node:fs/promises';import {tmpdir} from 'node:os';import {join} from 'node:path';import {once} from 'node:events';
import {generate,monday,clone} from '../shared/engine.js';
test('server enforces sign-in, CSRF, roles, revisions, durable state and session revocation',async()=>{
 const dir=await mkdtemp(join(tmpdir(),'training-studio-test-'));let child;
 async function start(){child=spawn(process.execPath,['server.js'],{env:{...process.env,HOST:'127.0.0.1',PORT:'0',DATA_DIR:dir,ADMIN_EMAIL:'admin@example.test',ADMIN_PASSWORD:'Test-only-password-12345'},stdio:['ignore','pipe','pipe']});return new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('Server startup timeout')),10000);child.stdout.on('data',data=>{const m=data.toString().match(/port (\d+)/);if(m){clearTimeout(timer);resolve('http://127.0.0.1:'+m[1]);}});child.once('exit',code=>{clearTimeout(timer);reject(new Error('Server exited '+code));});});}
 async function stop(){if(child&&child.exitCode===null){child.kill();await once(child,'exit');}}
 try{let base=await start();const req=(path,method='GET',body,cookie='',extra={})=>fetch(base+path,{method,headers:{'Content-Type':'application/json',...(cookie?{Cookie:cookie}:{}),...extra},body:body===undefined?undefined:JSON.stringify(body),redirect:'manual'});
 assert.equal((await req('/api/state')).status,401);
 assert.equal((await req('/.env')).status,404);
 assert.equal((await req('/server.js')).status,404);
 assert.equal((await req('/shared/engine.js')).status,200);
 assert.equal((await req('/vendor/exceljs.min.js')).status,200);
 assert.equal((await req('/try.html')).status,302);
 let r=await req('/api/login','POST',{email:'admin@example.test',password:'Test-only-password-12345'});assert.equal(r.status,200);const cookie=r.headers.get('set-cookie').split(';')[0];assert.match(r.headers.get('set-cookie'),/HttpOnly/);
 r=await req('/api/state','GET',undefined,cookie);const original=await r.json();assert.equal(original.revision,0);
 const state=clone(original.state),w=state.weeks[monday()];w.sessions=generate(state).sessions;w.published=true;w.snapshot={school:state.school,rules:clone(state.rules),classes:clone(state.classes),teachers:clone(state.teachers),rooms:clone(state.rooms)};
 r=await req('/api/state','PUT',{state,revision:0},cookie,{Origin:'https://malicious.test'});assert.equal(r.status,403);
 r=await req('/api/state','PUT',{state,revision:0},cookie);assert.equal(r.status,200);
 r=await req('/api/state','PUT',{state,revision:0},cookie);assert.equal(r.status,409);
 r=await req('/api/users','POST',{name:'Teacher test',email:'teacher@example.test',password:'Test-only-password-67890',role:'teacher',teacherId:'t0'},cookie);assert.equal(r.status,200);
 r=await req('/api/login','POST',{email:'teacher@example.test',password:'Test-only-password-67890'});const teacherCookie=r.headers.get('set-cookie').split(';')[0];
 r=await req('/api/state','GET',undefined,teacherCookie);const teacherState=(await r.json()).state;assert.equal(Object.values(teacherState.weeks).length,1);assert.ok(Object.values(teacherState.weeks).every(w=>w.published&&w.sessions.every(e=>e.teacherId==='t0')));
 assert.equal((await req('/api/state','PUT',{state,revision:1},teacherCookie)).status,403);
 assert.equal((await req('/api/users','GET',undefined,teacherCookie)).status,403);
 r=await req('/api/state','PUT',{state:{...state,teachers:[null]},revision:1},cookie);assert.equal(r.status,400);
 r=await req('/api/users','GET',undefined,cookie);const teacher=(await r.json()).users.find(u=>u.role==='teacher');assert.equal((await req('/api/users/'+teacher.id,'DELETE',undefined,cookie)).status,200);assert.equal((await req('/api/state','GET',undefined,teacherCookie)).status,401);
 await stop();base=await start();r=await req('/api/state','GET',undefined,cookie);assert.equal(r.status,200);assert.equal((await r.json()).revision,1);
 await req('/api/logout','POST',{},cookie);assert.equal((await req('/api/state','GET',undefined,cookie)).status,401);
 }finally{await stop();await rm(dir,{recursive:true,force:true});}
});
