// Build directory is used only by the existing Sites publication.
// Hostinger serves index.html and assets directly from the repository root.
const fs=require('node:fs');
fs.mkdirSync('dist',{recursive:true});
for(const file of ['index.html','style.css','app.js'])fs.copyFileSync(file,'dist/'+file);
fs.cpSync('assets','dist/assets',{recursive:true});
console.log('Static site prepared in dist.');
