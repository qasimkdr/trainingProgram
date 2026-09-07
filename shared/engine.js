export const uid = () => globalThis.crypto.randomUUID();
export const clone = value => structuredClone(value);
export function monday(date = new Date()) { const d=new Date(date); d.setUTCDate(d.getUTCDate()-((d.getUTCDay()+6)%7));return d.toISOString().slice(0,10); }
export function seed() {
 const subjects=['JavaScript','React','Node.js','Databases'];
 const teachers=subjects.map((s,i)=>({id:`t${i}`,name:['Adeel Khan','Sara Ahmed','Haris Ali','Hina Noor'][i],subjects:[s,subjects[(i+1)%4]],maxWeekly:24,maxDaily:6,unavailable:[]}));
 teachers.push({id:'t4',name:'Zubair Ahmed',subjects,maxWeekly:24,maxDaily:6,unavailable:[]});
 const classes=['A1','B2','C3','D4'].map((name,i)=>({id:`c${i}`,name,branch:['CS','IT','AI','Data Science'][i],term:1,size:24+i*3,subjects:subjects.map((name,j)=>({id:`s${i}${j}`,name,weekly:5,total:60,completed:0,roomType:j===3?'Lab':'Any',double:j===3,early:j===0}))}));
 return {version:2,school:'Aptech Training Academy',rules:{days:['Monday','Tuesday','Wednesday','Thursday','Friday'],periods:6,start:'09:00',duration:50,breaks:[3]},teachers,classes,rooms:[{id:'r1',name:'Studio 01',capacity:40,type:'Classroom'},{id:'r2',name:'Studio 02',capacity:40,type:'Classroom'},{id:'r3',name:'Lab 01',capacity:40,type:'Lab'},{id:'r4',name:'Lab 02',capacity:40,type:'Lab'}],weeks:{[monday()]:{sessions:[],published:false}},log:[]};
}
const integer=(v,min,max)=>Number.isInteger(v)&&v>=min&&v<=max;
const safeId=v=>typeof v==='string'&&/^[A-Za-z0-9_-]{1,80}$/.test(v);
const str=(v,max=120)=>typeof v==='string'&&v.trim().length>0&&v.length<=max;
export function validateState(s) {
 const errors=[];
 if(!s||s.version!==2)return ['Unsupported backup version.'];
 if(!str(s.school)) errors.push('Enter a valid academy name.');
 const r=s.rules;
 if(!r||!Array.isArray(r.days)||r.days.length<1||r.days.length>7||new Set(r.days).size!==r.days.length||r.days.some(d=>!['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].includes(d))||!integer(r.periods,1,12)||!integer(r.duration,15,180)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(r.start)||!Array.isArray(r.breaks)||r.breaks.some(p=>!integer(p,0,r.periods-1))||new Set(r.breaks).size!==r.breaks.length) errors.push('Invalid working days, period length, start time, or breaks.');
 if(r && /^\d\d:\d\d$/.test(r.start) && Number(r.start.slice(0,2))*60+Number(r.start.slice(3))+r.periods*r.duration>1440)errors.push('Periods must finish before midnight.');
 for(const kind of ['teachers','classes','rooms']) {
  if(!Array.isArray(s[kind])||s[kind].length>150) {errors.push(`Invalid ${kind} list (maximum 150).`);continue;}
  if(new Set(s[kind].map(e=>e?.id)).size!==s[kind].length)errors.push(`Duplicate ${kind} IDs.`);
  for(const e of s[kind]) { if(!e||typeof e!=='object'){errors.push(`Invalid ${kind} record.`);continue;} if(!safeId(e.id)||!str(e.name))errors.push(`Invalid ${kind} name or ID.`);
   if(kind==='teachers'&&(!Array.isArray(e.subjects)||e.subjects.some(v=>!str(v))||!integer(e.maxWeekly,1,84)||!integer(e.maxDaily,1,12)||!Array.isArray(e.unavailable)||e.unavailable.some(a=>!a||!integer(a.day,0,6)||!integer(a.period,-1,11))))errors.push(`Invalid availability or workload for ${e.name}.`);
   if(kind==='rooms'&&(!integer(e.capacity,1,10000)||!str(e.type)))errors.push(`Invalid room ${e.name}.`);
   if(kind==='classes') {if(!str(e.branch)||!integer(e.term,1,20)||!integer(e.size,1,10000)||!Array.isArray(e.subjects)||e.subjects.length>30)errors.push(`Invalid class ${e.name}.`);else {if(new Set(e.subjects.map(x=>x?.id)).size!==e.subjects.length)errors.push(`Duplicate subject IDs in ${e.name}.`);for(const sub of e.subjects)if(!sub||!safeId(sub.id)||!str(sub.name)||!integer(sub.weekly,0,84)||!integer(sub.total,0,10000)||!integer(sub.completed,0,sub.total)||!str(sub.roomType)||typeof sub.double!=='boolean'||typeof sub.early!=='boolean')errors.push(`Invalid subject in ${e.name}.`);}}
  }
 }
 if(!s.weeks||typeof s.weeks!=='object'||Array.isArray(s.weeks)||Object.keys(s.weeks).length>104)errors.push('Invalid history (maximum 104 weeks).');
 else for(const [key,w]of Object.entries(s.weeks))if(!/^\d{4}-\d{2}-\d{2}$/.test(key)||!Number.isFinite(Date.parse(key))||!w||!Array.isArray(w.sessions)||w.sessions.length>10000||new Set(w.sessions.map(e=>e?.id)).size!==w.sessions.length||typeof w.published!=='boolean'||w.sessions.some(e=>!e||!safeId(e.id)||!safeId(e.classId)||!safeId(e.subjectId)||!safeId(e.teacherId)||!safeId(e.roomId)||!integer(e.day,0,6)||!integer(e.period,0,11)||typeof e.locked!=='boolean'))errors.push(`Invalid week ${key}.`);
 if(s.weeks&&typeof s.weeks==='object')for(const w of Object.values(s.weeks)){if(w?.snapshot){const errorsInSnapshot=validateState({...w.snapshot,version:2,weeks:{},log:[]});if(errorsInSnapshot.length)errors.push('Invalid published week snapshot.');}}
 if(!Array.isArray(s.log)||s.log.length>200)errors.push('Invalid activity history.');
 return errors;
}
export function week(s,key){return s.weeks[key]||{sessions:[],published:false};}
export function subject(s,e){return s.classes.find(c=>c.id===e.classId)?.subjects.find(x=>x.id===e.subjectId);}
export function reasons(s,sessions,e,ignoreId=e.id) {
 const out=[];const c=s.classes.find(c=>c.id===e.classId),t=s.teachers.find(t=>t.id===e.teacherId),r=s.rooms.find(r=>r.id===e.roomId),sub=subject(s,e);
 if(!c||!t||!r||!sub)return ['A class, subject, teacher, or room no longer exists.'];
 if(!integer(e.day,0,s.rules.days.length-1)||!integer(e.period,0,s.rules.periods-1))out.push('Outside working hours.');
 if(s.rules.breaks.includes(e.period))out.push('This period is a break.');
 if(!t.subjects.some(x=>x.toLowerCase()===sub.name.toLowerCase()))out.push(`${t.name} is not qualified for ${sub.name}.`);
 if(t.unavailable.some(x=>x.day===e.day&&(x.period===-1||x.period===e.period)))out.push(`${t.name} is unavailable.`);
 if(r.capacity<c.size)out.push(`${r.name} is too small for ${c.name}.`);
 if(sub.roomType!=='Any'&&sub.roomType!==r.type)out.push(`${sub.name} needs a ${sub.roomType} room.`);
 const others=sessions.filter(x=>x.id!==ignoreId);
 const simultaneous=others.filter(x=>x.day===e.day&&x.period===e.period);
 if(simultaneous.some(x=>x.classId===c.id))out.push(`${c.name} already has a session.`);
 if(simultaneous.some(x=>x.teacherId===t.id))out.push(`${t.name} is already teaching.`);
 if(simultaneous.some(x=>x.roomId===r.id))out.push(`${r.name} is already occupied.`);
 if(others.filter(x=>x.teacherId===t.id).length>=t.maxWeekly)out.push(`${t.name} has reached their weekly limit.`);
 if(others.filter(x=>x.teacherId===t.id&&x.day===e.day).length>=t.maxDaily)out.push(`${t.name} has reached their daily limit.`);
 const count=others.filter(x=>x.classId===c.id&&x.subjectId===sub.id).length;
 if(count>=Math.min(sub.weekly,sub.total-sub.completed))out.push(`${sub.name} has reached its weekly or remaining course requirement.`);
 return out;
}
export function conflicts(s,sessions){return sessions.flatMap(e=>reasons(s,sessions,e).map(reason=>({sessionId:e.id,reason})));}
export function missing(s,sessions){return s.classes.flatMap(c=>c.subjects.map(sub=>({classId:c.id,subjectId:sub.id,className:c.name,subjectName:sub.name,remaining:Math.max(0,Math.min(sub.weekly,sub.total-sub.completed)-sessions.filter(e=>e.classId===c.id&&e.subjectId===sub.id).length)}))).filter(x=>x.remaining>0);}
function options(s,sessions,c,sub,round){
 const teachers=s.teachers.filter(t=>t.subjects.some(x=>x.toLowerCase()===sub.name.toLowerCase()));
 const rooms=s.rooms.filter(r=>r.capacity>=c.size&&(sub.roomType==='Any'||sub.roomType===r.type));
 let best=null,bestScore=Infinity;
 for(let d=0;d<s.rules.days.length;d++)for(let p=0;p<s.rules.periods;p++){
  if(s.rules.breaks.includes(p)||sessions.some(e=>e.day===d&&e.period===p&&e.classId===c.id))continue;
  for(const t of teachers){ if(t.unavailable.some(x=>x.day===d&&(x.period===-1||x.period===p)))continue;
   for(const r of rooms){const e={id:'candidate',classId:c.id,subjectId:sub.id,teacherId:t.id,roomId:r.id,day:d,period:p,locked:false};if(reasons(s,sessions,e).length)continue;
    const daily=sessions.filter(x=>x.classId===c.id&&x.day===d),teacherDaily=sessions.filter(x=>x.teacherId===t.id&&x.day===d);
    const adjacent=teacherDaily.some(x=>Math.abs(x.period-p)===1);
    const sameAdjacent=daily.some(x=>x.subjectId===sub.id&&Math.abs(x.period-p)===1);
    const score=daily.length*3+daily.filter(x=>x.subjectId===sub.id).length*4+teacherDaily.length+(adjacent?-1:1)+(sub.early?p*.6:0)+(sub.double&&sameAdjacent?-7:0)+sessions.filter(x=>x.teacherId===t.id).length/t.maxWeekly+((d+round)%s.rules.days.length)*.05+((p+round)%s.rules.periods)*.01;
    if(score<bestScore){best=e;bestScore=score;}
   }
  }
 }
 return best;
}
export function generate(s,current=[],rounds=3){
 const locked=current.filter(e=>e.locked);const invalid=conflicts(s,locked);
 if(invalid.length)return {sessions:clone(current),missing:missing(s,current),errors:invalid.map(x=>`Locked session: ${x.reason}`),notes:[]};
 const needs=s.classes.flatMap(c=>c.subjects.map(sub=>({c,sub,scarcity:s.teachers.filter(t=>t.subjects.some(x=>x.toLowerCase()===sub.name.toLowerCase())).length*s.rooms.filter(r=>r.capacity>=c.size&&(sub.roomType==='Any'||sub.roomType===r.type)).length}))).sort((a,b)=>a.scarcity-b.scarcity||b.sub.weekly-a.sub.weekly);
 let best=clone(locked);
 for(let round=0;round<rounds;round++){
  const sessions=clone(locked);let progress=true;
  while(progress){progress=false;for(const {c,sub} of needs){const count=sessions.filter(e=>e.classId===c.id&&e.subjectId===sub.id).length;if(count>=Math.min(sub.weekly,sub.total-sub.completed))continue;const e=options(s,sessions,c,sub,round);if(e){e.id=uid();sessions.push(e);progress=true;}}}
  if(sessions.length>best.length)best=sessions;
  if(!missing(s,best).length)break;
 }
 const unfilled=missing(s,best);const notes=unfilled.map(x=>{
  const c=s.classes.find(c=>c.id===x.classId),sub=c.subjects.find(y=>y.id===x.subjectId);
  const ts=s.teachers.filter(t=>t.subjects.some(y=>y.toLowerCase()===sub.name.toLowerCase()));
  const rs=s.rooms.filter(r=>r.capacity>=c.size&&(sub.roomType==='Any'||sub.roomType===r.type));
  let explanation=!ts.length?'No qualified teacher.':!rs.length?'No room with the required type and capacity.':'Available periods are blocked by class/teacher/room bookings, availability, or workload limits. Try adjusting rules or unlocking sessions.';
  return `${c.name} · ${sub.name}: ${x.remaining} unfilled. ${explanation}`;
 });
 return {sessions:best,missing:unfilled,errors:[],notes};
}
export function replacements(s,sessions,e){return s.teachers.filter(t=>t.id!==e.teacherId&&!reasons(s,sessions,{...e,teacherId:t.id}).length);}
export function audit(s,label,user='Local workspace'){s.log=[{id:uid(),at:new Date().toISOString(),user,label},...(s.log||[])].slice(0,200);}
export function slotTime(r,p){const total=Number(r.start.slice(0,2))*60+Number(r.start.slice(3))+p*r.duration;return `${String(Math.floor(total/60)).padStart(2,'0')}:${String(total%60).padStart(2,'0')}`;}
