const fs = require('fs');

const readableStream = fs.createReadStream('book.txt',{encoding: 'utf-8'});
const writableStream = fs.createWriteStream('book-copy.txt');

readableStream.on('data', (chunk) => {
    console.log('Chunk:', chunk);
    writableStream.write(chunk);
});

readableStream.on('end', () => {
    console.log('Finished reading the file');
    writableStream.end();
});

readableStream.on('error', (err) => {
    console.log('Error read file:', err);
});

writableStream.on('error', (err) => {
    console.log('Error write file:', err);
});
