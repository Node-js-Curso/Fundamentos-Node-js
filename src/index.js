const args = process.argv.slice(2);

let min = 1;

let max = 100;

if (args.length >= 2) {
    const parsEdMin = parseInt(args[0], 10);
    const parsEdMax = parseInt(args[1], 10);

    if (!isNaN(parsEdMin) && !isNaN(parsEdMax) && parsEdMin < parsEdMax) {
        min = parsEdMin;
        max = parsEdMax;
    } else {
        console.log('Invalid arguments. Using default values: min = 1, max = 100');
    }
}

const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

console.log(`Random number between ${min} and ${max}: ${randomNumber}`);
