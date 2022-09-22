//  Problem: Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

//  Input: string
//  Output: object

//  Algorithm:
//  - create object 'result' with 3 properties, lowercase, uppercase, and neither, all init to 0
//  - iterate over str
//    - IF char is lowercase, increment lowercase
//    - ELSE IF char is uppercase, increment uppercase
//    - ELSE increment neither
//  return 'result'

//  function isLower(char)
//  *********************
//  - check if char is between 'a' and 'z'

//  function isUpper(char)
//  ***********************
//  - check if char is bet 'A' and 'Z'

function isLower(char) {
  return char >= 'a' && char <= 'z';
}

function isUpper(char) {
  return char >= 'A' && char <= 'Z';
}

function letterCaseCount(str) {
  const result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  for (let char of str) {
    if (isLower(char)) {
      result.lowercase += 1;
    } else if (isUpper(char)) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }

  return result;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));