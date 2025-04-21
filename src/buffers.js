const { buffer } = require('buffer');

const bufferFromString = Buffer.from('Hello World!!!', 'utf-8');
console.log(bufferFromString);

const bufferAlloc = Buffer.alloc(10);
console.log(bufferAlloc);

bufferAlloc.write('Hello');
console.log(bufferAlloc);

const buffertoString = bufferAlloc.toString('utf-8', 0, 5);
console.log(buffertoString);

