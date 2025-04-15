const { log } = require('console');
const fs = require('fs');

const fileName = 'example.txt';

// Create a file

fs.writeFileSync(fileName, 'Hola esto es un ejemplo de escritura en un archivo');

console.log('Archivo creado');

// Read the file

const cnten = fs.readFileSync(fileName, 'utf-8');

console.log('Contenido del archivo: ', cnten);

// Update the file

fs.appendFileSync(fileName, '\n\n Esto es un ejemplo de actualizacion de un archivo \n');

console.log('Archivo actualizado');

// Delete the file

fs.unlinkSync(fileName);
console.log('Archivo eliminado');