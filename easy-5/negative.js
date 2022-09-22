//  Input: number
//  Output number (always negative)

//  Rules:
//  - if num is positive, return negative version
//  - if num is negative, return num
//  - if num is 0, return -0

//  Algorithm:
//  - IF Math.sign of num is not greater than 0
//    - return num
//  - ELSE return -num

// function negative(num) {
//   if (Math.sign(num) < 0 || Object.is(-0, num)) return num;

//   return -num;
// }

// function negative(num) {
//   return -Math.sign(num) * num;
// }


// function negative(num) {
//   return -Math.abs(num);
// }

function negative (integer) {
  return integer >= 0 ? -integer : +integer
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
console.log(negative(-0));