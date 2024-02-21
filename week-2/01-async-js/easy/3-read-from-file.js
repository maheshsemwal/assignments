const fs = require('node:fs');
let p = new Promise((resolve, reject)=>{fs.readFile('week-2/01-async-js/easy/file.txt', 'utf-8', (err, data)=>{
    if(err){
        reject("No file found")
    }
    console.log(data);
    resolve("done")
})
})


p.then(()=>{for(let i=0;i<1000;i++){
    console.log(i);
}}).catch((e)=>{
    console.log(e);
})