//  Input: string of digits
//  Output: number

//  Algorithm:
//  - create an object 'DIGITS', each property is a string digit and the value is the equivalent number
//  - convert 'str' into an array of characters
//  - map over input 'strArr'
//    - replace each string digit with actual number digit using 'DIGITS'
//  - reduce mapped digits array into a number:
//    - multiply current value (starting at 0) * 10 and add the current element
//  - return result of reduce

function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }

  const strArr = str.split('');
  const mapped = strArr.map(char => DIGITS[char]);

  return mapped.reduce((acc, curr) => {
    return (acc * 10) + curr;
  }, 0);
}

function hexadecimalToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  }

  const strArr = str.split('');
  const mapped = strArr.map(char => DIGITS[char.toLowerCase()]);

  return mapped.reduce((acc, curr) => {
    return (acc * 16) + curr;
  }, 0);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(hexadecimalToInteger('4D9f') === 19871);