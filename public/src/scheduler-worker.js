import {generate} from '/shared/engine.js';
self.onmessage=({data})=>{try{self.postMessage({result:generate(data.state,data.sessions)});}catch(e){self.postMessage({error:e.message});}};
