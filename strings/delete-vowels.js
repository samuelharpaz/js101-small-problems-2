//  Problem: Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

//  Input: array (of strings)
//  Output: array

//  Rules:
//  - remove all vowels, regardless of case

//  Algorithm:
//  function removeVowelsStr(str)
//  *****************************
//  - create constant with string made up of lowercase vowels
//  - convert string to array of characters
//  - iterate over array
//    - filter for characters that when converted to lowercase are not included in a list of lowercase vowels
//  - return filtered array joined back into a string
//  function removeVowels(arr)
//  *****************************
//  - map over arr
//    - replace each string element 'str' with value of removeVowelsStr(str)
//  - return mapped arr

function removeVowelsStr(str) {
  const VOWELS = 'aeiou';

  const strArr = str.split('');
  return strArr.filter(char => !VOWELS.includes(char.toLowerCase())).join('');
}

function removeVowels(arr) {
  return arr.map(removeVowelsStr);
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));