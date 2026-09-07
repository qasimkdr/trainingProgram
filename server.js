import http from 'node:http';
import {readFile,mkdir,stat} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
import {randomBytes,scryptSync,timingSafeEqual,createHash} from 'node:crypto';
import {DatabaseSync} from 'node:sqlite';
import {seed,validateState,conflicts,audit} from './shared/engine.js';
const dataDir=resolve(process.env.DATA_DIR||'data');await mkdir(dataDir,{recursive:true});
const db=new DatabaseSync(resolve(dataDir,'scheduler.sqlite'));db.exec(`PRAGMA journal_mode=WAL; CREATE TABLE IF NOT EXISTS users(id TEXT PRIMARY KEY,email TEXT UNIQUE,name TEXT,password TEXT,role TEXT,teacher_id TEXT);CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY,user_id TEXT,expires INTEGER);CREATE TABLE IF NOT EXISTS workspace(id INTEGER PRIMARY KEY CHECK(id=1),revision INTEGER,state TEXT);`);
function hash(password,salt=randomBytes(16).toString('hex')){return salt+':'+scryptSync(password,salt,64).toString('hex');}
function verify(password,stored){const [salt,key]=stored.split(':');return timingSafeEqual(Buffer.from(key,'hex'),Buffer.from(hash(password,salt).split(':')[1],'hex'));}
if(!db.prepare('SELECT id FROM users LIMIT 1').get()){
 const password=process.env.ADMIN_PASSWORD||'';if(password.length<12)throw new Error('Set ADMIN_PASSWORD to a unique password of at least 12 characters in .env before first start.');
 db.prepare('INSERT INTO users VALUES(?,?,?,?,?,?)').run(randomBytes(16).toString('hex'),(process.env.ADMIN_EMAIL||'admin@example.com').toLowerCase(),'Administrator',hash(password),'admin',null);
}
if(!db.prepare('SELECT id FROM workspace WHERE id=1').get())db.prepare('INSERT INTO workspace VALUES(1,0,?)').run(JSON.stringify(seed()));
const limits=new Map();function limited(key,max=30){const now=Date.now();let entry=limits.get(key);if(!entry||entry.until<now){entry={count:0,until:now+60000};limits.set(key,entry);}if(limits.size>10000)for(const [k,v]of limits)if(v.until<now)limits.delete(k);return ++entry.count>max;}
const tokenHash=t=>createHash('sha256').update(t).digest('hex');
function currentUser(req){const raw=(req.headers.cookie||'').split(';').map(s=>s.trim()).find(s=>s.startsWith('session='))?.slice(8);if(!raw)return null;return db.prepare('SELECT u.id,u.email,u.name,u.role,u.teacher_id AS teacherId FROM users u JOIN sessions s ON u.id=s.user_id WHERE s.token=? AND s.expires>?').get(tokenHash(raw),Date.now());}
function cookie(token,age=259200){return `session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${age}${process.env.COOKIE_SECURE==='true'?'; Secure':''}`;}
function json(res,status,body,headers={}){res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store',...headers});res.end(JSON.stringify(body));}
async function body(req){if(!req.headers['content-type']?.startsWith('application/json'))throw Object.assign(new Error('JSON content required.'),{status:415});let chunks=[],n=0;for await(const c of req){n+=c.length;if(n>4_000_000)throw Object.assign(new Error('Request too large.'),{status:413});chunks.push(c);}try{return JSON.parse(Buffer.concat(chunks).toString());}catch{throw Object.assign(new Error('Invalid JSON.'),{status:400});}}
function fail(message,status=400){throw Object.assign(new Error(message),{status});}
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.png':'image/png','.svg':'image/svg+xml'};
const server=http.createServer(async(req,res)=>{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');res.setHeader('X-Frame-Options','DENY');res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; worker-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");
 try{
 const url=new URL(req.url,'http://localhost'),path=url.pathname;
 if(!['GET','HEAD','POST','PUT','DELETE'].includes(req.method))return json(res,405,{error:'Method not allowed.'});
 if(path.startsWith('/api/')){
  if(!['GET','HEAD'].includes(req.method)&&req.headers.origin){let origin;try{origin=new URL(req.headers.origin);}catch{fail('Invalid origin.',403);}if(origin.host!==req.headers.host)fail('Cross-origin request rejected.',403);}
  const user=currentUser(req);
  if(path==='/api/info'&&req.method==='GET')return json(res,200,{mode:'server',user,ai:!!(process.env.AI_API_URL&&process.env.AI_API_KEY&&process.env.AI_MODEL)});
  if(path==='/api/login'&&req.method==='POST'){
   if(limited('login:'+req.socket.remoteAddress,10))fail('Too many login attempts. Try again in a minute.',429);
   const b=await body(req);if(typeof b.email!=='string'||typeof b.password!=='string'||b.password.length>256)fail('Invalid credentials.',401);
   const u=db.prepare('SELECT * FROM users WHERE email=?').get(b.email.toLowerCase());if(!u||!verify(b.password,u.password))fail('Email or password is incorrect.',401);
   const token=randomBytes(32).toString('hex');db.prepare('DELETE FROM sessions WHERE expires<?').run(Date.now());db.prepare('INSERT INTO sessions VALUES(?,?,?)').run(tokenHash(token),u.id,Date.now()+259200000);
   return json(res,200,{ok:true},{'Set-Cookie':cookie(token)});
  }
  if(path==='/api/logout'&&req.method==='POST'){const raw=(req.headers.cookie||'').match(/(?:^|;\s*)session=([^;]+)/)?.[1];if(raw)db.prepare('DELETE FROM sessions WHERE token=?').run(tokenHash(raw));return json(res,200,{ok:true},{'Set-Cookie':cookie('',0)});}
  if(!user)fail('Sign in to continue.',401);
  if(path==='/api/state'&&req.method==='GET'){
   const row=db.prepare('SELECT * FROM workspace WHERE id=1').get();const state=JSON.parse(row.state);
   if(user.role==='teacher'){state.weeks=Object.fromEntries(Object.entries(state.weeks).filter(([,w])=>w.published).map(([k,w])=>[k,{...w,sessions:w.sessions.filter(e=>e.teacherId===user.teacherId)}]));state.log=[];}
   return json(res,200,{state,revision:row.revision});
  }
  if(user.role!=='admin')fail('Administrator access required.',403);
  if(path==='/api/state'&&req.method==='PUT'){
   const b=await body(req),errors=validateState(b.state);if(errors.length)fail(errors.slice(0,8).join(' '));
   for(const [key,w]of Object.entries(b.state.weeks))if(w.published&&conflicts(w.snapshot||b.state,w.sessions).length)fail(`Published week ${key} contains conflicts. Unpublish it before changing these rules.`);
   const current=db.prepare('SELECT revision,state FROM workspace WHERE id=1').get();if(b.revision!==current.revision)fail('Someone else updated the workspace. Reload before saving your changes.',409);
   b.state.log=JSON.parse(current.state).log;audit(b.state,typeof b.action==='string'?b.action.slice(0,180):'Updated workspace',user.name);
   const result=db.prepare('UPDATE workspace SET state=?,revision=revision+1 WHERE id=1 AND revision=?').run(JSON.stringify(b.state),b.revision);if(!result.changes)fail('Workspace changed. Reload and try again.',409);
   return json(res,200,{revision:b.revision+1,log:b.state.log});
  }
  if(path==='/api/users'&&req.method==='GET')return json(res,200,{users:db.prepare('SELECT id,email,name,role,teacher_id AS teacherId FROM users ORDER BY name').all()});
  if(path==='/api/users'&&req.method==='POST'){
   const b=await body(req);if(typeof b.email!=='string'||!/^\S+@\S+\.\S+$/.test(b.email)||b.email.length>200||typeof b.name!=='string'||!b.name.trim()||b.name.length>120||!['admin','teacher'].includes(b.role))fail('Enter a valid name, email and role.');
   const state=JSON.parse(db.prepare('SELECT state FROM workspace WHERE id=1').get().state);if(b.role==='teacher'&&!state.teachers.some(t=>t.id===b.teacherId))fail('Link the teacher account to an instructor.');
   if(b.id){const existing=db.prepare('SELECT * FROM users WHERE id=?').get(b.id);if(!existing)fail('Account not found.',404);if(existing.id===user.id&&b.role!=='admin')fail('You cannot remove your own administrator access.');}
   if((!b.id||b.password)&&(!(typeof b.password==='string')||b.password.length<12||b.password.length>256))fail('Use a password between 12 and 256 characters.');
   try{if(b.id){db.prepare('UPDATE users SET email=?,name=?,role=?,teacher_id=? WHERE id=?').run(b.email.toLowerCase(),b.name,b.role,b.role==='teacher'?b.teacherId:null,b.id);if(b.password)db.prepare('UPDATE users SET password=? WHERE id=?').run(hash(b.password),b.id);db.prepare('DELETE FROM sessions WHERE user_id=?').run(b.id);}else db.prepare('INSERT INTO users VALUES(?,?,?,?,?,?)').run(randomBytes(16).toString('hex'),b.email.toLowerCase(),b.name,hash(b.password),b.role,b.role==='teacher'?b.teacherId:null);}catch(e){if(e.code?.includes('SQLITE'))fail('That email is already in use.');throw e;}
   return json(res,200,{ok:true});
  }
  if(path.startsWith('/api/users/')&&req.method==='DELETE'){const id=path.split('/').pop();if(id===user.id)fail('You cannot delete your own account.');db.prepare('DELETE FROM sessions WHERE user_id=?').run(id);db.prepare('DELETE FROM users WHERE id=?').run(id);return json(res,200,{ok:true});}
  if(path==='/api/assistant'&&req.method==='POST'){
   if(limited('ai:'+user.id,8))fail('Please wait before requesting another suggestion.',429);
   if(!process.env.AI_API_URL||!process.env.AI_API_KEY||!process.env.AI_MODEL)fail('AI is not configured. Use the absence planner below.',503);
   const b=await body(req);if(typeof b.prompt!=='string'||b.prompt.length>2000)fail('Keep the request under 2,000 characters.');
   const state=JSON.parse(db.prepare('SELECT state FROM workspace WHERE id=1').get().state);
   const response=await fetch(process.env.AI_API_URL,{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${process.env.AI_API_KEY}`},signal:AbortSignal.timeout(25000),body:JSON.stringify({model:process.env.AI_MODEL,messages:[{role:'system',content:'Convert a teacher absence request to JSON only: {"teacherId":"...","day":0}. Day is zero-based in days. Choose only supplied IDs. If ambiguous return {"error":"Ask a clear question"}. Do not invent teachers or change other rules. Teachers: '+JSON.stringify(state.teachers.map(t=>({id:t.id,name:t.name})))+'; days: '+JSON.stringify(state.rules.days)},{role:'user',content:b.prompt}],temperature:0})});
   if(!response.ok)fail('The AI provider could not complete the request.',502);
   let proposal;try{const result=await response.json();proposal=JSON.parse(result.choices[0].message.content.replace(/^```(?:json)?\s*|\s*```$/g,''));}catch{fail('The assistant returned an invalid suggestion. Use the absence planner.',502);}
   if(proposal.error)return json(res,200,{error:String(proposal.error).slice(0,300)});
   if(!state.teachers.some(t=>t.id===proposal.teacherId)||!Number.isInteger(proposal.day)||proposal.day<0||proposal.day>=state.rules.days.length)fail('The assistant suggestion did not pass validation.',422);
   return json(res,200,{teacherId:proposal.teacherId,day:proposal.day});
  }
  return json(res,404,{error:'Endpoint not found.'});
 }
 if(!['GET','HEAD'].includes(req.method))return json(res,405,{error:'Method not allowed.'});
 if(['/try.html','/attempt.html'].includes(path)){res.writeHead(302,{Location:'/'});return res.end();}
 let file;if(path==='/vendor/exceljs.min.js')file=resolve('node_modules/exceljs/dist/exceljs.min.js');else{const root=path.startsWith('/shared/')?resolve('shared'):resolve('public');file=resolve(root,'.'+(path==='/'?'/index.html':path.startsWith('/shared/')?path.slice(7):path));if(!file.startsWith(root+'/'))fail('Not found.',404);}
 try{if(!(await stat(file)).isFile())fail('Not found.',404);const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:data);}catch(e){if(e.code==='ENOENT')return json(res,404,{error:'Not found.'});throw e;}
 }catch(e){if(!e.status)console.error(e);json(res,e.status||500,{error:e.status?e.message:'The server could not complete this request.'});}
});
server.listen(Number(process.env.PORT||3000),process.env.HOST||'0.0.0.0',()=>console.log('Training Studio listening on port '+server.address().port));
