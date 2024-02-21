/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const start = Date.now()
    while(Date.now() - start < milliseconds){

    }
    return Promise.resolve();
}   

sleep(5000).then(()=>{
    console.log("Hello");
}).catch((e)=>{
    console.log(e);
})
module.exports = sleep;
