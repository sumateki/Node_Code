const fs=require('fs')
fs.readFile('Hello.txt', 'utf8',(err,data) =>{
    if(err) throw err;
    console.log(data);
});
console.log("aftr read file");