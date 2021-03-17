const fs = require('fs'); 
const data = fs.readFileSync(process.argv[2],{encoding:'utf8', flag:'r'}); 
var t= data.split('\n');
console.log(t.length-1);