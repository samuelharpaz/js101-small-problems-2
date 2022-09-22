//  Input: str
//  Output: boolean

//  Rules:
//  - case does not matter
//  - non-alphanumeric characters should be ignored

//  Algorithm:
//  - reassign str to str converted to lowercase
//  - filter out non-alphanumeric characters
//    - 1) regex, replace with empty string
//    - 2) convert to array, filter out, join back together
//  - return result of calling 'isPalindrome' on cleanedStr

function isRealPalindrome(str) {
  str = str.toLowerCase();

  str = str.split('').filter(char => isAlphaNumeric(char)).join('');

  return isPalindrome(str);
}

function isAlphaNumeric(char) {
  const isAlpha = char >= 'a' && char <= 'z';
  const isNumeric = char >= '0' && char <= '9';

  return isAlpha || isNumeric;
}

function isPalindrome(str) {
  const reversed = [...str].reverse().join('');
  
  return str === reversed;
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome(`Madam, I'm Adam`));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));
