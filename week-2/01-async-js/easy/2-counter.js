function counter(num){
    console.log(num+1);
    return num+1;
}

function StopWatch(End, start=0){
    let timeOut;
    new Promise((resolve, reject)=>{
            timeOut = setTimeout(()=>{
                let num = counter(start);
                if(num == End){
                    clearTimeout(timeOut);
                    resolve("Time's up")
                }else{
                    StopWatch(End, num)
                }
            }, 1000)
    }).then((value)=>{
        console.log(value)
    })
}

StopWatch(10)
