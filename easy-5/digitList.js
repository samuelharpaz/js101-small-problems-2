//  Input: number (positive integer)
//  Output: array of digits

//  Rules:
//  - adding my own restriction - can't convert the numbers to strings

//  Algorithm:
//  - create empty 'result' array
//  - create loop, WHILE num is greater than 0
//    - save remainder of 'num' when divided by 10 to a variable ('lastDigit')
//    - add 'lastDigit' to beginning of 'result'
//    - reassign num to the value of num minus 'lastDigit', divided by 10
//    - exit loop when num is equal to 0
//  - return 'result'

function digitList(num) {
  const result = [];

  while (num > 0) {
    const lastDigit = num % 10;
    result.unshift(lastDigit);
    num = (num - lastDigit) / 10;
  }

  return result;

}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));