import {cp,mkdir,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
await cp('public','dist',{recursive:true});await cp('shared','dist/shared',{recursive:true});
await mkdir('dist/vendor',{recursive:true});await cp('node_modules/exceljs/dist/exceljs.min.js','dist/vendor/exceljs.min.js');
console.log('Static local-workspace build ready in dist. Use npm start for shared accounts and database storage.');
