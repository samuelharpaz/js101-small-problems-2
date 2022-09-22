//  Input: str
//  Output: array

//  Rules:
//  - case-sensitive
//  - two chars or more

//  Algorithm:
//  - create array 'substrings and init to value of calling 'substrings' with the argument 'str'
//  - return filtered array by filtering 'substrings' for any string that is a palindrome 
//  function: isPalindrome(str)
//  **************************
//  - convert 'str' to array of characters
//  - reverse the array
//  - join it back together to a string
//  - compare joined string with original
//  - return result of comparison

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

function isPalindrome(str) {
  if (str.length <= 1) return false;

  return [...str].reverse().join('') === str;
}


function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));

