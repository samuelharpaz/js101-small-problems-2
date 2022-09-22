//  Input: number (integer): num
//  Output: boolean

//  Rules:
//  - return true if absolute value of 'num' is odd

//  Algorithm:
//  - get absolute value of 'num'
//  - check if abs value of 'num', when divided by 2, has a remainder equal to 1
//  - return boolean

function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

// function isOdd(num) {
//   return num % 2 !== 0;
// }

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true