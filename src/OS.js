const os = require('os');

function showSistemInfo() {
    console.log(`Operative System: ${os.type()}`);
    console.log(`Platform: ${os.platform()}`);
    console.log(`Architecture: ${os.arch()}`);
    console.log(`OS Version: ${os.release()}`);
    const upTime = os.uptime();
    console.log(`System Uptime: ${upTime} seconds`);
    console.log(`Total Memory: ${os.totalmem() / 1024 / 1024} MB`);
    const freeMemory = os.freemem();
    console.log(`Free Memory: ${freeMemory / 1024 / 1024} MB`);
    console.log(`CPU Info:`);
    const cpus = os.cpus();
    cpus.forEach((cpu, index) => {
        console.log(`Core : ${index + 1}: ${cpu.model} @ ${cpu.speed / 1000} MHz`);
    });
    console.log(`Home Directory: ${os.homedir()}`);
    console.log(`Hostname: ${os.hostname()}`);
}

showSistemInfo();