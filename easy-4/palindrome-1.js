//  Input: string
//  Output: boolean

//  Problem:
//  - write a function that returns a boolean depending on whether input string is a palindrome

//  Rules:
//  - case does matter
//  - all characters matter, including spaces

//  Questions:
//  - non-string input?

//  Data Structures
//  - arrays, strings

//  Algorithm:
//  - convert string to array
//  - reverse array
//  - join array elements back together, saved to variable 'reversed'
//  - return the result of comparing input string's strict equality to 'reversed'

function isPalindrome(str) {
  const reversed = [...str].reverse().join('');
  
  return str === reversed;
}

// function isPalindrome(str) {
//   let reversed = '';

//   for (let idx = 0; idx < str.length; idx++) {
//     const char = str[idx];
//     reversed = char + reversed;
//   }

//   return str === reversed;
// }

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome(`madam I'm adam`));
console.log(isPalindrome('356653'));