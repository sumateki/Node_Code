const fs= require('fs');
var data= fs.readFileSync('Hello.txt', 'utf8');
console.log(data);
console.log(" aftr read file");