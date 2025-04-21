console.log(`ID the process: ${process.pid}`);
console.log(`Directory: ${process.cwd()}`);
console.log(`Node version: ${process.versions.node}`);
console.log(`Platform: ${process.platform}`);
console.log(`Aquitement: ${process.arch}`);
console.log(`Time execution: ${process.uptime()} seconds\n`);

console.log(process.env);
console.log(`PATH: ${process.env.PATH}`);
console.log(`User Profile: ${process.env.USERPROFILE}`);
console.log(`Home Directory: ${process.env.HOME}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'Not defined'}`);

const memoryData = process.memoryUsage();
console.log(`Memory usage: ${memoryData.rss / 1024 / 1024} MB`);
console.log(`Memory usage: ${memoryData.heapTotal / 1024 / 1024} MB`);
console.log(`Memory usage: ${memoryData.heapUsed / 1024 / 1024} MB`);
console.log(`Memory usage: ${memoryData.external / 1024 / 1024} MB`);
console.log(`Memory usage: ${memoryData.arrayBuffers / 1024 / 1024} MB`);


process.on('exit', code => {
    console.log('The process is finishing',code);
});

process.on('SIGINT', () => {
    console.log(`The process was interrupted (Ctrl + C)`);
    process.exit(0);
});

console.log('The process is running...');

process.stdin.on('data', data => {
    const input = data.toString().trim();
    if (input.toLowerCase() === 'exit') {
        console.log('The process was interrupted');
        process.exit(0);
    }else{
        console.log(`You wrote: ${input}`);
        console.log('You can write "exit" to finish the process');
    }
});
