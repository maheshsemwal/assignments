const fs = require('node:fs')
const txt = "hey there, how are you?\n I'm Good how are you?\nI'm also Godd. "
async function writeToFile(){
    try{

        const data =  fs.writeFileSync('week-2/01-async-js/easy/file.txt', txt, )
        if(data){
            console.log("done")
        }
    }
    catch(err){
        console.log(err)
    }
} 