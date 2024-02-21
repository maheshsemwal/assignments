function counter(num) {
    console.log(num + 1);
    return num + 1;
}

function StopWatch(End) {
    num = 0;
    console.log("Your Time Starts :");
    new Promise((resolve, reject) => {
        let c = setInterval(() => {
            num = counter(num);
            if (num == End) {
                resolve("Time's up")
                clearInterval(c)
            }
        }, 1000)
    }).then((value)=>{
        console.log(value)
    })
}

StopWatch(5)