//  Input: number
//  Output: number

//  Algorithm:
//  - IF 'num' is less than 0, return 'num'
//  - IF 'num' is greater than 0, return -'num'
//  - IF 'num' equals 0, return -0

// function negative(num) {
//   return num < 0
// }

const negative = (num) => Math.sign(num) < 0 ? num : -num;

console.log(negative(5));
console.log(negative(-3));