function clock(){
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    console.log(hour + " : " + min + " : " + sec);
}
setInterval(clock, 1000)
