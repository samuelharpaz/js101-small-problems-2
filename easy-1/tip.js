// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

const rl = require('readline-sync');

const bill = +rl.question('What is the bill?\n');
const tipPercent = +rl.question('What is the tip percentage?\n') / 100;

const tip = bill * tipPercent;
const total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);