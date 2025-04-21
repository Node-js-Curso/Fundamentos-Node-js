console.log(`Initial Hour: ${new Date().toLocaleTimeString()}`);

const timeOut = setTimeout(() => {
    console.log(`The message is shown after 2 seconds`);
    console.log(`Final Hour: ${new Date().toLocaleTimeString()}`);
},2000)

setImmediate(() =>{
    console.log(`This message is shown in next iteration`);
    console.log(`Hour actual: ${new Date().toLocaleTimeString()}`);
});

const intervalId = setInterval(() =>{
    console.log(`This message is shown every 3 seconds`);
    console.log(`Hour actual: ${new Date().toLocaleTimeString()}`);
}, 3000);

setTimeout(()=>{
    console.log(`Canceling the timeout next 10 seconds`);
    clearInterval(intervalId);
},10000);

const timeOutId = setTimeout(() => {
    console.log(`This message will not be shown`);
},10000);

clearTimeout(timeOutId);

console.log(`Final Hour: ${new Date().toLocaleTimeString()}`);
