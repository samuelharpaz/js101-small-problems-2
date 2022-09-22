//  Input: string
//  Output: boolean

//  Rules:
//  - ignore non-alphabetic characters
//  - empty string => return true

//  Algorithm:
//  - iterate over str
//    - IF uppercase version of character is not equal to the character, return false
//  - return true

function isUppercase(str) {
  return str.toUpperCase() === str;
}

console.log(isUppercase('t')); // false
console.log(isUppercase('T')); // true
console.log(isUppercase('Four Score')); // false
console.log(isUppercase('FOUR SCORE')); // true
console.log(isUppercase('4SCORE')); // true
console.log(isUppercase('')); // true