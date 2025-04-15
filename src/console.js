// // Basic console logging example

// // This file is part of the "console" module.
// console.log('Hello World!!!');

// // This is a log message
// console.info('This is an info message');

// // This is a debug message
// console.warn('This is a warning message');

// // This is an error message
// console.error('This is an error message');

// Tables

// const users = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Doe', age: 40 }
// ];

// console.log(users);
// console.table(users, ["name"]);


// Timers
console.time('Operation');

for (let i = 0; i < 1000000; i++) {

}
console.timeEnd('Operation');

// Count 
console.count('Counter');
console.count('Counter');
console.count('Counter');
console.countReset('Counter');
console.count('Counter');

// Grouping
console.group('Group 1');
console.log('Inside Group 1');
console.group('Group 2');
console.log('Inside Group 2');
console.groupEnd();

// Afirmations
console.assert(1 === 2, 'This will not be shown');
console.assert(1 === 1, 'This will be shown');

// Clearing the console
// console.clear();

// Trace

console.trace('Trace message');