//  Input: none
//  Output: console log

// function logOdds() {
//   for (let count = 1; count <= 99; count += 2) {
//     console.log(count);
//   }
// }

// function logOdds() {
//   for (let count = 1; count <= 99; count += 1) {
//     if (count % 2 === 0) continue;

//     console.log(count);
//   }
// }

// logOdds();

const rl = require('readline-sync');

const limit = +rl.question(`Specify a maximum integer:\n`);

for (let count = 1; count <= limit; count += 2) {
  console.log(count);
}