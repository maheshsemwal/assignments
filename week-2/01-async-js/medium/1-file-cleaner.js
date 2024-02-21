const fs = require("node:fs");

let p = new Promise((resolve, reject)=>{
    fs.readFile("E:/programming/0-100 Course/Assignments/assignments/week-2/01-async-js/medium/file.txt", 'utf-8', (err, data)=>{
        if(err){
            reject("No file found");
        }
        resolve(data);
    })
})

p.then((str)=>{
    str = str.split(" ").filter((i) => {
        return i.trim()!== ''
    }).join(" ")
    
    console.log(str);

    fs.writeFile("E:/programming/0-100 Course/Assignments/assignments/week-2/01-async-js/medium/file.txt",str, err =>{
        if(err){
            return new Error("Some Error occured while writing to file")
        }
        else{
            console.log("File successfully cleaned")
        }
    })
})


