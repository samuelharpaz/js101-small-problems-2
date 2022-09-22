//  Input: array (arr)
//  Output: number

//  Algorithm:
//  - create variable 'n' and init to 'arr' length + 1
//  - get sum of numbers from 1 to n inclusive
//  - sum array
//  - subtract array sum from number sum and return

// function findNumber(arr) {
//   const n = arr.length + 1;
  
//   const numberSum = Array.from({ length: n }, (_, idx) => idx + 1).reduce((sum, curr) => sum + curr, 0);
//   const arraySum = arr.reduce((sum, curr) => sum + curr, 0);
  
//   return numberSum - arraySum;
// }

// console.log(findNumber([1, 3, 4])); // 2
// console.log(findNumber([1, 2, 3])); // 4
// console.log(findNumber([4, 2, 3])); // 1

// Create a function that takes a string and returns the number (count) of vowels contained within it.


/*
Input: string(str)
Output: number

Algorithm:
- convert 'str' to array
- filter array for letters that when converted to lowercase are included in a string 'aeiou'
- return length of filtered array
*/

// function countVowels(str) {
//   // return [...str].filter(char => 'aeiou'.includes(char.toLowerCase())).length;
//   const VOWELS = 'aeiou';
  
//   const strArr = str.split('');
//   const filtered = strArr.filter(char => VOWELS.includes(char.toLowerCase()));

//   return filtered.length;
// }

// console.log(countVowels("Celebration")); // ➞ 5
// console.log(countVowels("Palm")); // ➞ 1
// console.log(countVowels("Prediction")); // ➞ 4
// console.log(countVowels("Addiction")); // ➞ 4

// console.log(countVowels("Celebration")); // 5
// console.log(countVowels("Palm")); // 1
// console.log(countVowels("Prediction")); // 4
// console.log(countVowels("Suite")); // 3
// console.log(countVowels("Quote")); // 3
// console.log(countVowels("Portrait")); // 3
// console.log(countVowels("Steam")); // 2
// console.log(countVowels("Tape")); // 2
// console.log(countVowels("Nightmare")); // 3
// console.log(countVowels("Convention")); // 4

// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

/*
Input: number(n)
Output: number

Algorithm:
- create variable 'result', init to 0
- create loop from 1 to n, inc by 1
  - add current index to 'result'
- return 'result'
*/

// function triangle(n) {
//   let result = 0;

//   for (let idx = 1; idx <= n; idx++) {
//     result += idx;
//   }

//   return result;
// }

// console.log(triangle(1)); // ➞ 1
// console.log(triangle(6)); // ➞ 21
// console.log(triangle(215)); // ➞ 23220

// Create a function that takes a string and returns a string in which each character is repeated once.

/* 
Input: string(str)
Output: string

Algorithm:
- convert 'str' to array
- map array:
  - return a string that consists of each character doubled (char + char)
- join mapped array back into a string and return
*/

// function doubleChar(str) {
//   return [...str].map(char => char + char).join('');
// }

// console.log(doubleChar("String")); // ➞ "SSttrriinngg"
// console.log(doubleChar("Hello World!")); // ➞ "HHeelllloo  WWoorrlldd!!"
// console.log(doubleChar("1234!_ ")); // ➞ "11223344!!__  "

// console.log(doubleChar("String"));
// console.log(doubleChar("Hello World!"));
// console.log(doubleChar("1234!_ "));
// console.log(doubleChar("##^&%%*&%%$#@@!"));
// console.log(doubleChar("scandal"));
// console.log(doubleChar("economics"));
// console.log(doubleChar(" "));
// console.log(doubleChar("_______"));
// console.log(doubleChar("equip gallon read") === "eeqquuiipp  ggaalllloonn  rreeaadd");
// console.log(doubleChar("baby increase") === "bbaabbyy  iinnccrreeaassee");

// Create a function to return the amount of potatoes there are in a string.

/* 
input: string(str)
output: number

Qs:
- case?

Algorithm:
- create variable 'count', init to 0
- create variable 'searchStart', init to 0
- create loop
  - get index of 'potato' searching from 'searchStart'
  - IF index is not equal to -1:
    - increment 'count' by 1
  - ELSE: break out of loop
  - 'searchStart' updated to current val of 'searchStart' plus length of 'potato'
- return 'count'
*/

// function potatoes(str) {
//   const WORD = 'potato';
//   const LENGTH =  WORD.length;
  
//   let count = 0;
//   let searchStart = 0;

//   while (true) {
//     const idx = str.indexOf(WORD, searchStart);

//     if (idx === -1) break;

//     count += 1;
//     searchStart = searchStart + LENGTH;
//   }

//   return count;
// }

// // function potatoes(str) {
// //   return str.match(/potato/g).length;
// // }

// console.log(potatoes("potato")); // ➞ 1
// console.log(potatoes("potatopotato")); // ➞ 2
// console.log(potatoes("potatoapple")); // ➞ 1

/* 
input: string(str)
output: object

Algorithm:
- create empty object called 'charMap'
- iterate over 'str':
  - IF current char is a lowercase letter:
    - create a key from 'char' if it doesn't exist and set value to 1, or else increment by 1 if it already exists
- return 'charMap'

*/

// function letterCount(str) {
//   const charMap = {};

//   for (let char of str) {
//     if (char >= 'a' && char <= 'z') {
//       charMap[char] = (charMap[char] || 0) +
//     }
//   }

//   return charMap;
// }


// console.log(letterCount('arithmetics')); //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

/* 
input: array(arr)
output: number

Rules:
- IF empty array or has 1 value, return 0

Algorithm:
- IF empty array or has 1 value, return 0
- declare variable 'count', init to 0
- create empty object 'numMap'
- iterate over 'arr':
  - IF current el exists as key in 'numMap', increment value by 1
  - ELSE add current el as key in 'numMap' and set value to 1    {1: 1, 2: 4, 20: 2, 6: 2}
- convert 'numMap' to array of keys
- filter for keys whose value in 'numMap' is greater than 1  [2, 20, 6]
- iterate over filtered keys:
  - divide value in 'numMap' for each key by 2, and round down (Math.floor)
  - add result to 'count'
- return 'count'

*/

// function duplicates(arr) {
//   if (arr.length <= 1) return 0;
  
//   let count = 0;

//   const numMap = {};

//   arr.forEach(el => {
//     numMap[el] = (numMap[el] || 0) + 1;
//   });

//   const keys = Object.keys(numMap);
//   const keysWithPairs = keys.filter(key => numMap[key] > 1);

//   keysWithPairs.forEach(key => {
//     const pairs = Math.floor(numMap[key] / 2);
//     count += pairs;
//   });

//   return count;
// }

// console.log(duplicates([1, 2, 5, 6, 5, 2])); // 2
// console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])); // 4

/* 
input: string(fullText), string(searchText)
output: number

Algorithm:
- return number of matches using regex of 'searchText' with global flag

Algorithm 2 (without regex):
- create variable 'count', init to 0
- create variable 'startSearch', init to 0
- create WHILE loop
  - get index of 'searchText' in 'fullText', starting search from 'startSearch'
  - IF index is -1, break
  - increment 'count' by 1
  - update 'startSearch' to current value of 'startSearch' plus length of 'searchText'
- return 'count'
*/

// function solution(fullText, searchText) {
//   let count = 0;
//   let startSearch = 0;

//   while (true) {
//     const idx = fullText.indexOf(searchText, startSearch);
//     if (idx === -1) break;

//     count += 1;
//     startSearch = idx + searchText.length;
//   }

//   return count;
// }


// function solution(fullText, searchText) {
//   const regex = new RegExp(`${searchText}`, 'g');
//   const matches = fullText.match(regex) || [];
//   return matches.length;
// }

// console.log(solution('aa_bb_cc_dd_bb_e', 'bb')); // should return 2 since bb shows up twice
// console.log(solution('aaabbbcccc', 'bbb')); // should return 1

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

/* 
input: string(str)
output: number

Algorithm:
- create variable 'max' and init to 0
- create variable 'current' and init to 0
- iterate over 'str':
  - IF current char is not a vowel:
    - IF max less than 'current', set max to current
    - set current to 0
  - ELSE
    - increment 'current' by 1
    - IF current index is equal to str length - 1:
      - IF max less than 'current', set max to current
- return 'max'
*/

// function solve(str) {
//   let max = 0;
//   let current = 0;

//   for (let idx = 0; idx < str.length; idx++) {
//     const char = str[idx];

//     if (!'aeiou'.includes(char)) {
//       current = 0;
//     } else {
//       current += 1;

//       if (current > max) {
//         max = current;
//       }
//     }

//   }

//   return max;
// }

// const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);

// function solve(str) {
//   return str.split(/[^aeiou]/);
// }


// console.log(solve("codewarriorswq")); // 2
// console.log(solve("suoidea")); // 3
// console.log(solve("ultrarevolutionariees")); // 3
// console.log(solve("strengthlessnesses")); // 1
// console.log(solve("cuboideonavicuare")); // 2
// console.log(solve("chrononhotonthuooaos")); // 5
// console.log(solve("iiihoovaeaaaoougjyaw")); // 8

/* 
input: string(str)
output: number

Algorithm:
- create constant variable with all vowels
- convert str to an array of characters
- filter array for characters that are included in 'aeiou'
- return length of filtered array
*/

// function countVowels(str) {
//   const VOWELS = 'aeiouAEIOU';  

//   return [...str].filter(char => VOWELS.includes(char)).length;
// }

// console.log(countVowels("Celebration")); // ➞ 5
// console.log(countVowels("Palm")); // ➞ 1
// console.log(countVowels("Prediction")); // ➞ 4
// console.log(countVowels("Amazon")); // ➞ 3


// Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

/*
input: number(int)
output: number

Algorithm:
- create variable 'result', initialize to 1;
- create loop from 2 (multiplier) to 'int' inclusive, incrementing by 1
  - update result to: current value of result * multiplier
- return 'result'
*/

// function factorial(int) {
//   let result = 1;

//   for (let mult = 2; mult <= int; mult++) {
//     result *= mult;
//   }

//   return result;
// }

// console.log(factorial(3)); // ➞ 6
// console.log(factorial(5)); // ➞ 120
// console.log(factorial(13)); // ➞ 6227020800

// Create a function that takes a string and returns a new string with all vowels removed.

/* 
input: string(str)
output: string

Rules:
- implicit:
  - remove all vowels, upper and lower

Qs:
- empty string?
- non-string input?

Algorithm:
- create constant variable 'VOWELS', init to 'aeiou'
- convert str to array of characters
- filter array for characters which, when converted to lowercase, are NOT included in VOWELS
- join filtered array back into string
- return joined string

Algorithm V2 (by word):
fn: removeVowelsByWord(str)
- convert str to an array of words named 'words' (on space)     ['I', 'have', 'never']
- map 'words': replace each word with vowel-removed words, using 'removeVowels'   ['', 'hv', 'nvr']
- filter mapped 'words' for elements which have a length greater than 0  ['hv', 'nvr']
- join filtered words back into string, separated by space
- return joined result

*/

// function removeVowelsByWord(str) {
//   const words = str.split(' ');  

//   return words.map(word => removeVowels(word)).filter(word => word.length).join(' ');
// }

// function removeVowels(str) {
//   const VOWELS = 'aeiou';

//   return str.split('').filter(char => !VOWELS.includes(char.toLowerCase())).join('');
// }

// console.log(removeVowelsByWord("I have never seen a thin person drinking Diet Coke.")); // ➞ " hv nvr sn  thn prsn drnkng Dt Ck."
// console.log(removeVowelsByWord("We're gonna build a wall!")); // ➞ "W'r gnn bld  wll!"
// console.log(removeVowelsByWord("Happy Thanksgiving to all--even the haters and losers!")); // ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

// Given a string of integers, return the number of odd-numbered substrings that can be formed.

// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

/* 
input: string(str)
output: number

Qs:
- non-string input?
- string with non-digits/spaces?
- empty string?

Algorithm:
fn: solve(str)
- create variable 'substrings', init to value of calling 'getAllSubstrings' and passing in 'str'
- filter 'substrings' for substrings that, when converted to a number, are odd (% 2 is not equal to 0)
- return length of filtered substrings

fn: getAllSubstrings(str)
- create empty array 'substrings'
- create outer loop from 0 up to str length not inclusive:
  - create inner loop from (index + 1) to str length inclusive
    - get slice from outer loop index to inner loop index
    - append slice to 'substrings'
- return 'substrings'

*/

// function solve(str) {
//   if (!str.length) return 0;
  
//   const substrings = getAllSubstrings(str);

//   return substrings.filter(sub => +sub % 2 !== 0).length;
// }

// function getAllSubstrings(str) {
//   const substrings = [];

//   for (let startIdx = 0; startIdx < str.length; startIdx++) {
//     for (let endIdx = startIdx + 1; endIdx <= str.length; endIdx++) {
//       substrings.push(str.slice(startIdx, endIdx));
//     }
//   }

//   return substrings;
// }


// function solve(s){
//   return [...s].reduce((total, num, idx)=> total + (+num % 2 ? idx + 1 : 0), 0); // 1 3 3 7 => 7
// };


// console.log(solve("1341")); // 7
// console.log(solve("1357")); // 10
// console.log(solve("13471")); // 12
// console.log(solve("134721")); // 13
// console.log(solve("1347231")); // 20
// console.log(solve("13472315")); // 28

// For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

// The input string consists of lowercase latin letters.

/* 
input: string(str)
output: array

Qs:
- empty string?
- can substring be one character? assuming yes

Algorithm:
- IF str is empty, return -1
- create variable 'midpoint', init to (flooring (str length / 2) minus 1)  // length: 6 => check until 2 inclusive   length: 5 => check until 1 inclusive
- create loop from 1 to 'midpoint' inclusive:
  - get slice of str from 0 to current idx and save to variable 'slice'
  - create variable repeatTimes, init to (str length divided by slice length)
  - repeat slice 'repeatTimes' times
  - IF equal to str:
    - return an array, first element is the slice, 2nd element is 'repeatTimes'
- return array with str as first element, 1 as 2nd element

*/

// function repeatedSub(str) {
//   if (!str.length) return -1;

//   const midpoint = Math.floor(str.length / 2) - 1;
  
//   for (let idx = 0; idx <= midpoint; idx++) {
//     const slice = str.slice(0, idx + 1);
//     const repeatTimes = str.length / slice.length;
    
//     if (slice.repeat(repeatTimes) === str) {
//       return [slice, repeatTimes];
//     }
//   }

//   return [str, 1];
// }

// console.log(repeatedSub('ababab')); // ['ab', 3];  'a'  'ab'
// console.log(repeatedSub('abcde')); // ['abcde', 1];
// console.log(repeatedSub('')); // -1


/* 
input: string(str)
output: boolean

Rules:
- ignore numbers and punctuation
- case does not matter

Qs:
- non-string input?

Algorithm:
- create constant variable 'ALPHABET', init to a string with entire lowercase alphabet
- convert 'str' to lowercase and update 'str'
- iterate over ALPHABET:
  - IF current character is not included in 'str', return false
- return true

*/

// function isPangram(str) {
//   const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
//   str = str.toLowerCase();

//   for (let idx = 0; idx < ALPHABET.length; idx++) {
//     const char = ALPHABET[idx];

//     if (!str.includes(char)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
// console.log(isPangram("This is not a pangram.")); // false


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

/* 
input: number(num)
output: number

Rules:
- IF 'num' is negative, return 0
- IF the number is a multiple of both 3 and 5, only count it once.

Algorithm:
- IF 'num' is negative, return 0
- create empty 'multiples' array
- create loop (counter var = 'idx') from 1 to num EXCLUSIVE, incrementing by 1
  - IF 'idx' % 3 equals 0 OR idx % 5 equals 0:
    - add 'idx' to 'multiples' array
- return sum of multiples array (using reduce method)

*/

// function solution(num) {
//   if (num < 0) return 0;

//   const multiples = [];

//   for (let idx = 1; idx < num; idx++) {
//     if ((idx % 3 === 0) || (idx % 5 === 0)) {
//       multiples.push(idx);
//     }
//   }

//   return multiples.reduce((sum, curr) => sum + curr, 0);
// }

// console.log(solution(13)); // 23

// Greatest Product

//  Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

/*
input: string(input)
output: number

Algorithm:
- convert 'input' to an array of characters
- map array to array of numbers (convert each character to a number equivalent)
- use reduce method, accumulator = 'max', init 'max' to 0
  - get slice from current index to (current index + 5)
  - get product of number elements in slice using 'calcProduct'
  - IF product is greater than 'max':
    - update max to 'product' and return
  - return current value of 'max'
- return result of reduce method

fn: calcProduct(arr)
- use reduce method, accum = product, init to 1
  - return product * current number element
- return result of reduce

*/

// function greatestProduct(input) {
//   const nums = [...input].map(Number);

//   return nums.reduce((max, _, idx) => {
//     if (idx > nums.length - 5) {
//       return max;
//     }
    
//     const slice = nums.slice(idx, idx + 5);
//     console.log(slice);
//     const product = calcProduct(slice);
    
//     if (product > max) {
//       max = product;
//     }

//     return max;
//   }, 0)
// }

// function calcProduct(arr) {
//   if (arr.includes(0)) return 0;

//   return arr.reduce((product, curr) => product * curr, 1);
// }


// // console.log(greatestProduct("123834539327238239583")) // should return 3240);
// console.log(greatestProduct("92494737828244222221111111532909999")) // should return 5292);

// (0, 5)
// (1, 6)

/* 
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

input: string(str1), string(str2)
output: boolean

Algorithm:
- IF str1 length is less than str2 length: return false
- convert 'str2' to an array with only unique elements using 'getUnique'
- iterate over 'uniqueStr2Arr' using EVERY method:
  - for each character element in 'uniqueStr2Arr':
    - check whether getCharCount for current character in 'str1' is at least as great as getCharCount for current char in 'str2'
- return result of every method

fn: getCharCount(str, char)
- convert 'str' to array of characters
- filter array for elements equal to 'char'
- return length of filtered array
*/

// function scramble(str1, str2) {
//   if (str1.length < str2.length) return false;

//   const uniqueStr2Arr = [...new Set([...str2])];

//   return uniqueStr2Arr.every(char => {
//     return getCharCount(str1, char) >= getCharCount(str2, char);
//   });
// }

// function getCharCount(str, char) {
//   return [...str].filter(el => el === char).length;
// }

// function scramble(str1, str2) {
//   if (str1.length < str2.length) return false;

//   const charMap1 = getCharMap(str1);
//   const charMap2 = getCharMap(str2);

//   return Object.keys(charMap2).every(char => {
//     return charMap1[char] >= charMap2[char];
//   });
// }

// function getCharMap(str) {
//   const charMap = {};

//   for (let char of str) {
//     charMap[char] = (charMap[char] || 0) + 1;
//   }

//   return charMap;
// }


// console.log(scramble('rkqodlw', 'world')); // ==> True
// console.log(scramble('cedewaraaossoqqyt', 'codewars')); // ==> True
// console.log(scramble('katas', 'steak')); // ==> False

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

/* 
input: string(str)
output: number

Qs:
- non-string input?

Rules:
- case INsensitive

Algorithm:
- convert 'str' to lowercase and updating 'str'
- get unique string from 'str', named 'uniqueStr', using fn: getUnique  'abbcdee' => 'abcde'
- create variable 'count', init to 0
- iterate over 'uniqueStr':
  - IF current character's character count in 'str' is greater than 1:
    - increment 'count' by 1
- return 'count'

fn: getCharCount(str, char)
- convert str to array of characters
- filter array for elements equal to 'char'
- return length of filtered array

fn: getUnique(str)
- convert 'str' to an array of characters
- convert array to a set
- convert set back to an array
- join array back into string
- return joined string

*/

// function duplicateCount(str) {
//   str = str.toLowerCase();

//   const uniqueStr = getUnique(str);

//   let count = 0;

//   for (let char of uniqueStr) {
//     if (getCharCount(str, char) > 1) {
//       count += 1;
//     }   
//   }

//   return count;
// }

// function getUnique(str) {
//   return [...new Set([...str])].join('');
// }

// function getCharCount(str, char) {
//   return [...str].filter(el => el === char).length;
// }

// function duplicateCount(text){
//   const filtered = text.toLowerCase().split('').filter(function(char, idx, arr){
//      const test = arr.indexOf(char) !== idx && arr.lastIndexOf(char) === idx;
//      console.log(test);
//      return test;
//   });

//   console.log(filtered);

//   return filtered.length;
// }

// function duplicateCount(str) {
//   str = str.toLowerCase();
//   const charMap = {};

//   for (let char of str) {
//     charMap[char] = (charMap[char] || 0) + 1;
//   }

//   return Object.keys(charMap).reduce((totalRepeats, curr) => {
//     if (charMap[curr] > 1) {
//       totalRepeats += 1;
//     }

//     return totalRepeats;
//   },  0);
// }


// console.log(duplicateCount("abcde")); // -> 0 # no characters repeats more than once
// console.log(duplicateCount("aabbcde")); // -> 2 # 'a' and 'b'
// console.log(duplicateCount("aabBcde")); // -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// console.log(duplicateCount("indivisibility")); // -> 1 # 'i' occurs six times
// console.log(duplicateCount("Indivisibilities")); // -> 2 # 'i' occurs seven times and 's' occurs twice
// console.log(duplicateCount("aA11")); // -> 2 # 'a' and '1'
// console.log(duplicateCount("ABBA")); // -> 2 # 'A' and 'B' each occur twice

/* 
input: array(nums)
output: number

Algorithm:
fn: isPrime(num)
- IF 'num' is 2, return true;
- IF 'num' is less than 2, return false;
- IF 'num' is even, return false;
- create loop ('idx') from 3 up to the square root of 'num' inclusive, increment by 1   // 25 => 3 4 5
  - IF 'num' % 'idx' equals 0, return false
- return true

fn: minimumNumber(nums)
- calculate sum of numbers in 'nums' using reduce method
- IF sum itself is prime, return 0
- create variable 'idx', init to (sum + 1)
- create loop:
  - IF 'idx' is prime (check using 'isPrime'):
    - calculate difference between 'idx' and 'sum'
    - return difference
  - increment 'idx' by 1
*/

// function minimumNumber(nums) {
//   const sum = nums.reduce((sum, curr) => sum + curr, 0);
  
//   if (isPrime(sum)) return 0;

//   let idx = sum + 1;

//   while (true) {
//     if (isPrime(idx)) {
//       return idx - sum;
//     }

//     idx += 1;
//   }

// }

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;

//   for (let idx = 3; idx <= Math.sqrt(num); idx += 2) {
//     if (num % idx === 0) return false;
//   }

//   return true;
// }


// console.log(minimumNumber([3, 1, 2])); // 1
// console.log(minimumNumber([3, 1, 2, 2])); // 3
// console.log(minimumNumber([2, 12, 8, 4, 6])); // 5
// console.log(minimumNumber([50, 39, 49, 6, 17, 28])); // 2

/* 
input: array(arr)
output: number

Algorithm:
- create variable 'result', init to value of 1st element in the array
- IF 2nd element equals 'result':
    - return result of calling find method on array, looking for an element that is not equal to 'result'
- ELSE: (2nd element is not equal to 1st element)
  - IF 3rd element is equal to 'result': return 2nd element of array
  - ELSE: return result

*/

// function findUniq(arr) {

//   if (arr[0] === arr[1]) {
//     return arr.find(num => num !== arr[0]);
//   }

//   if (arr[2] === arr[0]) {
//     return arr[1];
//   }

//   return arr[0];
// }

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2);
// console.log(findUniq([ 1, 2, 1, 1, 1, 1 ]) === 2);
// console.log(findUniq([ 2, 1, 1, 1, 1, 1 ]) === 2);
// console.log(findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55);

/* 
input: array(arr)
output: object

rules:
- IF 'arr' is empty or null, return null

Algorithm:
- IF arr double equals null, return null
- IF arr is empty, return null

- create empty 'result' object
- iterate over 'arr':
  - IF current element does not exist as key within 'result': add current element as key in 'result', and set value to 1
  - ELSE increment value of result at key of current element
return 'result'

*/

// function groupAndCount(arr) {
//   if (arr == null) return null;
//   if (!arr.length) return null;

//   const result = {};

//   for (let num of arr) {
//     result[num] = (result[num] || 0) + 1;
//   } 

//   return result;
// }

// console.log(groupAndCount([1, 1, 2, 2, 2, 3])); // {1: 2, 2: 3, 3:1}
// console.log(groupAndCount([0,1,1,0])); // {0: 2, 1: 2}

/* 
input: string(str)
output: string

Rules:
- each word starts over
- even index = uppercase, odd = lowercase

Qs:
- non-string input?
- empty string/ just spaces?

Algorithm:
- convert 'str' to an array of words
- map 'words':
  - create 'weirdStr' variable, init to empty string
  - iterate over 'word':
    - IF current index is even: append the current character UPPERCASED to 'weirdStr'
    - ELSE: append the current character LOWERCASED to 'weirdStr'
  - return 'weirdStr'
- join mapped words with space in between
- return joined string

*/

// function toWeirdCase(str) {
//   return str.split(' ')
//     .map(word => {
//       let weirdStr = '';

//       for (let idx = 0; idx < word.length; idx++) {
//         const char = word[idx];
//         if (idx % 2 === 0) {
//           weirdStr += char.toUpperCase();
//         } else {
//           weirdStr += char.toLowerCase();
//         }
//       }

//       return weirdStr;
//     }).join(' ');
// }

// console.log(toWeirdCase( "String" )); //=> returns "StRiNg"
// console.log(toWeirdCase( "Weird string case" )); //=> returns "WeIrD StRiNg CaSe"

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

/* 
input: array(arr)
output: array

Rules:
- IF arr length is 1, return [0]

Qs:
- empty array?
- non-array input?

Algorithm:
- map 'arr':
  - get unique array from 'arr' by converting 'arr' to set, then converting back to an array [8, 1, 2, 3]
  - filter 'uniqueArr' for numbers smaller than current element
  - return length of filtered array
- return mapped array

Algorithm 2: (without using set)
- map 'arr':
  - create empty 'unique' array
  - iterate over 'arr':
    - IF current element exists in 'unique': continue
    - ELSE: add current element to unique
  - filter 'unique' for numbers smaller than current element
  - return length of filtered array;
- return mapped array;

*/

// function smallerNumbersThanCurrent(arr) {
//   if (arr.length === 1) return [0];
  
//   return arr.map(num => {
//     const uniqueArr = [...new Set(arr)];
//     return uniqueArr.filter(el => el < num).length;
//   });
// }

// function smallerNumbersThanCurrent(arr) {
//   if (arr.length === 1) return [0];
  
//   return arr.map(num => {
//     const uniqueArr = [...new Set(arr)];
//     return uniqueArr.filter(el => el < num).length;
//   });
// }

// Examples:

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent([1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]

/* 
input: string(n)
output: string

Algorithm:
- convert 'n' to a number - this will remove unnecessary zeros
- convert number back to a string and return

Algorithm 2:
fn: isZero(n)
- convert 'n' to array of characters
- filter out '.'
- return whether every element is equal to 0

fn: removeLeading(n)
- create variable 'leadingZeros', init to 0
- create variable 'idx', init to 0
- create loop that runs WHILE 'n' at position 'idx' is equal to 0:
  - increment 'leadingZeros' by 1
  - increment 'idx' by 1
- return 'n' sliced from 'leadingZeros'

fn: removeTrailing(n)
- IF 'n' does not contain '.', return 'n'
- create variable 'trailingZeros', init to 0
- create variable 'idx', init to 'n' length minus 1
- create loop that runs WHILE 'n' at position 'idx' is equal to 0
  - increment 'trailingZeros' by 1
  - decrement 'idx' by 1
- return 'n' sliced from 0 until -(trailingZeros)

fn: removeLeadingTrailing(n)
- IF isZero of 'n' is true, return '0'
- update 'n' to value of calling 'removeLeading' and passing in 'n'
- update 'n' to value of calling 'removeTrailing' and passing in 'n'
- return final value of 'n'

*/

// function removeLeadingTrailing(n) {
//   if (isZero(n)) return '0';

//   n = removeTrailing(removeLeading(n));

//   // return n.endsWith('.') ? n.slice(0, -1) : n;
//   return n.indexOf('.') === n.length - 1 ? n.slice(0, -1) : n;
// }

// function isZero(n) {
//   return [...n].filter(el => el !== '.').every(el => el === '0');
// }

// function removeTrailing(n) {
//   if (!n.includes('.')) return n;

//   let trailingZeros = 0;
//   let idx = n.length - 1;

//   while (n[idx] === '0') {
//     trailingZeros += 1;
//     idx -= 1;
//   }

//   return n.slice(0, -trailingZeros);
// }

// function removeLeading(n) {
//   let leadingZeros = 0;
//   let idx = 0;

//   while (n[idx] === '0') {
//     leadingZeros += 1;
//     idx += 1;
//   }

//   return n.slice(leadingZeros);
// }




// // function removeLeadingTrailing(n) {
// //   return String(+n);
// // }


// // function removeLeadingTrailing(n) {
// //   return String(+n);
// // }

// console.log(removeLeadingTrailing("230.000")); // ➞ "230"
// console.log(removeLeadingTrailing("00402")); // ➞ "402"
// console.log(removeLeadingTrailing("03.1400")); // ➞ "3.14"
// console.log(removeLeadingTrailing("30")); // ➞ "30"
// console.log(removeLeadingTrailing("0")); // ➞ "30"
// console.log(removeLeadingTrailing("0000")); // ➞ "30"
// console.log(removeLeadingTrailing("00.0000")); // ➞ "30"

/* 
input: string(str)
output: number

Rules:
- case does not matter

Algorithm:
- create constant 'VOWELS', init to a string 'aeiou'
- convert 'str' to all lowercase
- convert 'str' to an array of characters
- use 'findIndex' method to find first array element included in 'VOWELS'
- return value returned by 'findIndex'

*/

// function firstVowel(str) {
//   const VOWELS = 'aeiou';
//   str = str.toLowerCase();

//   return [...str].findIndex(char => VOWELS.includes(char));
// }

// console.log(firstVowel("apple")); // ➞ 0
// console.log(firstVowel("hello")); // ➞ 1
// console.log(firstVowel("STRAWBERRY")); // ➞ 3
// console.log(firstVowel("pInEaPPLe")); // ➞ 1

/* 
input: array (arr)
output: array (nested)

Algorithm:
- map over 'arr':
  - create array of (arr.length) length
  - fill with current element
- return mapped array

*/

// function multiply(arr) {
//   return arr.map(el => {
//     return Array(arr.length).fill(el, 0);
//   });
// }

// console.log(multiply([4, 5])); // ➞ [[4, 4], [5, 5]]
// console.log(multiply(["*", "%", "$"])); // ➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]
// console.log(multiply(["A", "B", "C", "D", "E"])); // ➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]

/* 
input: array(names)
output: string

rules:
- all uppercase

Qs:
- non-array input?
- array doesn't contain strings?
- no arguments provided/undefined?

Algorithm:
- create copy of 'names' and sort
- map 'namesCopy':
  - get first letter of each name and convert to uppercase
- join array into string and return

*/

// function societyName(names) {
//   const namesCopy = [...names].sort();

//   return namesCopy.map(name => name[0].toUpperCase()).join('');
// }

// console.log(societyName(["Adam", "Sarah", "Malcolm"])); // ➞ "AMS"
// console.log(societyName(["Harry", "Newt", "Luna", "Cho"])); // ➞ "CHLN"
// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])); // ➞ "CJMPRR"

/* 
input: array(arr), number(n)
output: number

Rules:
- If n is larger than the length of the array, return the sum of the whole array.

Algorithm:
- get slice of 'arr' from 0 to 'n'
- use reduce to calculate sum of slice, and return
*/

// function sliceSum(arr, n) {
//   return arr.slice(0, n).reduce((sum, curr) => sum + curr, 0);
// }

// console.log(sliceSum([1, 3, 2], 2)); //  ➞ 4
// console.log(sliceSum([4, 2, 5, 7], 4)); // ➞ 18
// console.log(sliceSum([3, 6, 2], 0)); //  ➞ 0

/* 
input: array(integers)
output: array

Algorithm:
- create 'result' array, init to a copy of 'integers'
- create loop from (integers length - 2) down to 0, decrementing by 1
  - append value of 'integers' at position of current 'idx' to 'result'
- return 'result'

*/

// function mirror(integers) {
//   const result = [...integers];

//   for (let idx = integers.length - 2; idx >= 0; idx--) {
//     const currentInt = integers[idx];
//     result.push(currentInt);
//   }

//   return result;
// }

// console.log(mirror([0, 2, 4, 6])); // ➞ [0, 2, 4, 6, 4, 2, 0]
// console.log(mirror([1, 2, 3, 4, 5])); // ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
// console.log(mirror([3, 5, 6, 7, 8])); // ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

/* 
input: array(arr), string(char)
output: string

Algorithm:
- map over 'arr':
  - return 'char' repeated (current element) times
- join mapped array with newline and return

*/

// function histogram(arr, char) {
//   return arr.map(num => {
//     return char.repeat(num);
//   }).join('\n');
// }

// console.log(histogram([1, 3, 4], "#")); // ➞ "#\n###\n####"
// console.log(histogram([6, 2, 15, 3], "=")); // ➞ "======\n==\n===============\n==="
// console.log(histogram([1, 10], "+")); // ➞ "+\n++++++++++"

/* 
input: array(nums)
output: number

Algorithm:
- create loop from 1 to 10 inclusive
  - IF 'idx' is not included in 'nums', return 'idx'
- return undefined

*/

// function missingNum(nums) {
//   for (let idx = 1; idx <= 10; idx++) {
//     if (!nums.includes(idx)) {
//       return idx;
//     }
//   }

//   return undefined;
// }

// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // ➞ 5
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // ➞ 10
// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // ➞ 7

/* 
input: string(str)
output: number

Algorithm:
- iterate over 'str':
  - convert current 'char' to a Number
  - IF converted number is NOT NaN (use methods, not equality comparison): return converted number
- return undefined

*/

// function leftDigit(str) {
//   for (let char of str) {
//     const num = +char;
    
//     if (!Number.isNaN(num)) return num;
//   }

//   return undefined;
// }

// console.log(leftDigit("TrAdE2W1n95!")); // ➞ 2
// console.log(leftDigit("V3r1ta$")); // ➞ 3
// console.log(leftDigit("U//DertHe1nflu3nC3")); // ➞ 1
// console.log(leftDigit("J@v@5cR1PT")); // ➞ 5

/* 
input: array(arr), value(val)
output: boolean

Algorithm:
- return whether every 'subArr' in 'arr' includes 'val'

*/

// function isOmnipresent(arr, val) {
//   return arr.every(subArr => subArr.includes(val));
// }

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // ➞ true
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // ➞ false
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)); // ➞ true
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)); // ➞ false

/* 
input: number(num)
output: number

Algorithm:
fn: fibonacci(num)
- IF 'num' is 1 or 2: return 1;

- return sum of fibonacci(num - 1) and fibonacci(num - 2)

Algorithm 2:
fn: fibonacci(num)
- IF 'num' is 1 or 2, return 1
- create variable 'first', init to 1
- create variable 'second', init to 1
- create loop from 3 to 'num' inclusive, inc by 1:
  - update 'second' to sum of 'first' and 'second'
  - update 'first' to value of 'second' before previous operation
- return 'second'

*/

// function fibonacci(num) {
//   if ([1, 2].includes(num)) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// function fibonacci(num) {
//   if ([1, 2].includes(num)) return 1;

//   let first = 1;
//   let second = 1;

//   for (let idx = 3; idx <= num; idx++) {
//     [ first, second ] = [second, first + second];
//   }

//   return second;
// }

// console.log(fibonacci(3)); // ➞ 3
// console.log(fibonacci(7)); // ➞ 21
// console.log(fibonacci(12)); // ➞ 233

/* 
input: string(str)
output: string

Qs:
- case sensitive? assuming not

Algorithm:
- create constant CODE, init to an object that shows conversion (e.g. a:4)
- convert 'str' to an array of characters
- map over array:
  - IF current char, when converted is included in an array of keys in object 'CODE':
    - replace current char with value of that key in 'CODE'
  - ELSE return current char
- join mapped array and return

*/

// function hackerSpeak(str) {
//   const CODE = {
//     a: 4,
//     e: 3,
//     i: 1,
//     o: 0,
//     s: 5
//   };

//   const keys = Object.keys(CODE);

//   return [...str].map(char => {
//     if (keys.includes(char.toLowerCase())) {
//       return CODE[char];
//     }

//     return char;
//   }).join('');
// }


// console.log(hackerSpeak("javascript is cool")); // ➞ "j4v45cr1pt 15 c00l"
// console.log(hackerSpeak("programming is fun")); // ➞ "pr0gr4mm1ng 15 fun"
// console.log(hackerSpeak("become a coder")); // ➞ "b3c0m3 4 c0d3r"


/* 
input: array(logins)
output: number

Algorithm:
- IF every element in 'logins' is false, return 0;
- create variable 'max', init to 0
- create variable 'current', init to 0
- iterate through 'logins':
  - IF curr element is true:
    - increment 'current' by 1
  - IF current is greater than max, update max to the value of current
  - IF curr element is false:
    - update current to 0;
- return max

*/

// function dailyStreak(logins) {
//   if (logins.every(el => el === false)) return 0;

//   let max = 0;
//   let current = 0;

//   for (let login of logins) {
//     if (login) {
//       current += 1;
//     }

//     if (current > max) {
//       max = current;
//     }

//     if (!login) {
//       current = 0;
//     }
//   }

//   return max;
// }

// console.log(dailyStreak([true, true, false, true])); // ➞ 2
// console.log(dailyStreak([false, false, false])); // ➞ 0
// console.log(dailyStreak([true, true, true, false, true, true])); // ➞ 3


/* 
input: array(arr)
output: string

Rules:
- empty array => 'z'

Algorithm:
- IF array is empty, return 'z'
- create constant variable 'ALPHABET', string of entire lowercase alphabet
- use reduce to get "sum" of elements in 'arr':
  - init 'acc' to 0
  - convert current letter to number by getting indexOf from ALPHABET plus 1
  - add to acc and return acc
- divide 'sum' by 26 and get remainder
- subtract 1 from remainder, and get letter that corresponds to that number using ALPHABET
- return letter

*/

// function addLetters(arr) {
//   if (!arr.length) return 'z';

//   const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

//   const sum = arr.reduce((total, curr) => ALPHABET.indexOf(curr) + 1 + total, 0);
//   const remainder = sum % 26;

//   return remainder ? ALPHABET[remainder - 1] : 'z';
// }

// console.log(addLetters(["a"])); // ➞ "a"
// console.log(addLetters(["a", "b"])); // ➞ "c"
// console.log(addLetters(["a", "b", "c"])); // ➞ "f"
// console.log(addLetters(["a", "b", "c", "d", "e", "f"])); // ➞ "u"
// console.log(addLetters(["y", "a"])); // ➞ "z"
// console.log(addLetters(["y", "c"])); // ➞ "b"
// console.log(addLetters(["z", "a"])); // ➞ "a"
// console.log(addLetters(["x", "y", "z"])); // ➞ "w"
// console.log(addLetters([])); // ➞ "z"

/* 
input: array(nums)
output: array

Algorithm:
fn isPrime(num)
- IF 'num' is 1 or less: return false
- IF 'num' is 2: return true
- IF 'num' is even: return false
- create loop from 3 (count) to (square root of num):
  - IF 'num' divided by 'count' equals 0: return false
- return true

fn: filterPrimes(nums)
- filter 'nums' for nums that are prime, using fn: isPrime
- return filtered 'nums'

*/

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;

//   for (let count = 3; count <= Math.sqrt(num); count++) {
//     if (num % count === 0) return false;
//   }

//   return true;
// }

// function filterPrimes(arr) {
//   return arr.filter(isPrime);
// }


// console.log(filterPrimes([7, 9, 3, 9, 10, 11, 27])); // ➞ [7, 3, 11]
// console.log(filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70])); // ➞ [10007, 1009]
// console.log(filterPrimes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097])); // ➞ [1009, 3, 61, 1087, 1091, 1093, 1097]

/* 
input: variable amount of numbers
output: number

Algorithm:
fn: combinations(...nums)
- use reduce to multiply nums
- return product

*/

// function combinations(...nums) {
//   return nums.reduce((product, num) => product * num, 1);
// }

// console.log(combinations(2, 3)); // ➞ 6
// console.log(combinations(3, 7, 4)); // ➞ 84
// console.log(combinations(2, 3, 4, 5)); // ➞ 120

/* 
input: number(num)
output: array

Algorithm:
- create empty 'factors' array
- create loop from 1 (count) up to (square root of num) exclusive, increment by 1
  - IF 'num' divided by 'count' yields no remainder:
    - append to 'factors': count and (num divided by count)
- IF square root of 'num' is an integer, append to factors
- sort 'factors' ascending and return

*/

// function factorize(num) {
//   const factors = [];
  
//   const sqrt = Math.sqrt(num);

//   for (let count = 1; count < sqrt; count++) {
//     if (num % count === 0) {
//       factors.push(count, num / count);
//     }
//   }

//   if (Number.isInteger(sqrt)) {
//     factors.push(sqrt);
//   }

//   return factors.sort((a, b) => a - b);
// }

// console.log(factorize(12)); // ➞ [1, 2, 3, 4, 6, 12]
// console.log(factorize(4)); // ➞ [1, 2, 4]
// console.log(factorize(17)); // ➞ [1, 17]

// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

/* 
input: array
output: boolean

Algorithm:
fn: testJackpot(slots)
- return whether EVERY element within 'slots' equals the first element

Algorithm 2:
fn: testJackpot(slots)
- create loop from 1 to slots length minus 1:
  - IF current el does not equal first element in slots: return false
- return true;

*/

// function testJackpot(slots) {
//   const [ first ] = slots;
  
//   for (let idx = 1; idx < slots.length; idx++) {
//     const currEl = slots[idx];

//     if (currEl !== first) return false;
//   }

//   return true;
// }

// function testJackpot(slots) {
//   return slots.every(slot => slot === slots[0]);
// }

// console.log(testJackpot(["@", "@", "@", "@"])); // ➞ true
// console.log(testJackpot(["abc", "abc", "abc", "abc"])); // ➞ true
// console.log(testJackpot(["SS", "SS", "SS", "SS"])); // ➞ true
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); // ➞ false
// console.log(testJackpot(["SS", "SS", "SS", "Ss"])); // ➞ false

/* 
input: array
output: number

Algorithm:
fn: secondLargest(nums)
- create copy of nums (numsCopy)
- get largest number using fn: getLargest
- get index of largest number
- splice largest number out of 'numsCopy'
- get current largest number from 'numsCopy'
- return number 

fn: getLargest(nums)
- spread 'nums' into Math.max and return value

Alt Algorithm:
- create variable 'largest', init to 0;
- create variable 'second', init to 0:

- iterate over 'nums':
  - IF el is greater than 'largest':
    - update 'second' to value of 'largest'
    - update 'largest' to value of el
  - ELSE IF el is greater than 'second': update 'second' to value of el
- return 'second'
*/

// function secondLargest(nums) {
//   let largest = 0;
//   let second = 0;

//   for (let num of nums) {
//     if (num > largest) {
//       second = largest;
//       largest = num;
//     } else if (num > second) {
//       second = num;
//     }
//   }

//   return second;
// }

// function getLargest(nums) {
//   return Math.max(...nums);
// }

// function secondLargest(nums) {
//   const numsCopy = [...nums];
//   const largest = getLargest(numsCopy);
//   const largestIdx = numsCopy.indexOf(largest);

//   numsCopy.splice(largestIdx, 1);

//   return getLargest(numsCopy);

// }


// function secondLargest(nums) {
//   return [...nums].sort((a, b) => b - a)[1];
// }

// console.log(secondLargest([10, 40, 30, 20, 50])); // ➞ 40
// console.log(secondLargest([25, 143, 89, 13, 105])); // ➞ 105
// console.log(secondLargest([54, 23, 11, 17, 10])); // ➞ 23

/* 
input: number(er), number(ip)
output: number

Algorithm:
- IF 'er' is 0, return 0;
- IF after converting 'ip' to a string it ends in '.1':
  - update 'ip' to (integer of ip) plus .333333
- ELSE IF it ends in '.2':
  - update 'ip' to (integer of ip) plus .666666
return 9 * (er divided by ip), rounded to 2 decimal places, then converted to a number

*/

// function era(er, ip) {
//   if (era === 0) return 0;

//   if (String(ip).endsWith('.1')) {
//     ip = Math.floor(ip) + .333333;
//   } else if (String(ip).endsWith(.2)) {
//     ip = Math.floor(ip) + .666666;
//   }

//   return +(9 * (er / ip)).toFixed(2);
// }

// console.log(era(22, 99)); // ➞ 2.00
// console.log(era(23, 99.1)); // ➞ 2.08
// console.log(era(24, 99.2)); // ➞ 2.17


/* 
input: object(customers), number(minOrders), number(minPrice)
output: array

Rules:
- Sort the returned array of customer names in alphabetical order.

Algorithm:
- get keys of 'customers'
- filter 'keys':
  - for key in 'customers' that when filtered for orders greater or equal to 'minPrice', the length of filtered array is at least 'minOrders'
- return filtered keys

*/

// function pizzaPoints(customers, minOrders, minPrice) {
//   const keys = Object.keys(customers);

//   return keys.filter(key => customers[key].filter(order => order >= minPrice).length >= minOrders);
// }


// customers = {
//   "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
//   "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
// }

// console.log(pizzaPoints(customers, 5, 20)); // ➞ ["Spider-Man"]
// console.log(pizzaPoints(customers, 3, 10)); // ➞ ["Batman", "Spider-Man"]
// console.log(pizzaPoints(customers, 5, 100)); // ➞ []

/* 
input: array(numDigits), array(numbers)
output: boolean

Algorithm:
fn: canBuildOne(numDigits, num)
- convert 'num' to string
- create character map of 'numStr' { 1: 1, 2: 1, 3: 1 }
- check for EVERY key within charMap:
  - if value of key is less than or equal to: 'numDigits' at position [+key]
- return result of EVERY;

fn: canBuild(numdigits, numbers)
- return if EVERY number in numbers can be built by 'numDigits', using fn: canBuildOne

*/

// function canBuild(numDigits, numbers) {
//   return numbers.every(num => canBuildOne(numDigits,num));
// }

// function canBuildOne(numDigits, num) {
//   const numStr = String(num);

//   const charMap = {};

//   for (let char of numStr) {
//     charMap[char] = (charMap[char] || 0) + 1;
//   }

//   return Object.keys(charMap).every(key => {
//     return charMap[key] <= numDigits[+key];
//   });
// }

// console.log(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92])); // ➞ true
// console.log(canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44])); // ➞ false
// console.log(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [])); // ➞ true
// console.log(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3])); // ➞ false

/* 
input: number(total), array(coinTypes)
output: number

Algorithm:


*/

// console.log(coinsCombinations(4, [1, 2])); // ➞ 3
// console.log(coinsCombinations(10, [5, 2, 3])); // ➞ 4
// console.log(coinsCombinations(11, [5, 7])); // ➞ 0


/* 
input: array(words)
output: array

Algorithm:
fn: listVowels(word)
- create constant VOWELS, init to string 'aeiou'
- convert 'word' to array of characters
- convert to 'unique' array of characters
- filter for characters that are included in VOWELS
- return filtered array

fn: sameVowelGroup(words)
- create variable 'first', init to first element of 'words'
- filter 'words' for words whose:
  - vowel list is same length as 'first''s vowel list
  - every vowel in 'first''s vowel list is included in current word's vowel list
- return filtered array

*/

// function sameVowelGroup(words) {
//   const first = words[0];
//   return words.filter(word => {
//     const wordVowels = listVowels(word);
//     const firstVowels = listVowels(first);
    
//     const hasSameLength = wordVowels.length === firstVowels.length;
//     const hasSameVowels = wordVowels.every(vowel => firstVowels.includes(vowel));

//     return hasSameLength && hasSameVowels;
//   });
// }

// function listVowels(word) {
//   const VOWELS = 'aeiou';

//   const unique = [...new Set([...word])];
  
//   return unique.filter(char => VOWELS.includes(char));
// }


// console.log(sameVowelGroup(["toe", "ocelot", "maniac"])); // ➞ ["toe", "ocelot"]
// console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])); // ➞ ["many"]
// console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])); // ➞ ["hoops", "bot", "bottom"]

/* 
input: array(words)
output: object

Rules:
- The object entries have to be sorted by the number of capital letters
- The groups have to be sorted alphabetically (ignoring case)

Algorithm:
fn: countCapitals(word)
- convert 'word' to array of characters
- filter for characters that are between 'A' and 'Z'
- return length of filtered array

fn: grouping(words)
- create empty 'result' object
- create copy of words and sort alphabetically
- iterate over 'sortedWords':
  - get # of capitals in current word
  - IF numCapitals exists as a key in 'result':
    - append current word to array value for key in result
  - ELSE:
    - create key in 'result' for numCapitals
    - set to an array and add current word to array
- return 'result'
*/

// function grouping(words) {
//   const result = {};
//   const sortedWords = [...words].sort((a, b) => {
//     if (a.toLowerCase() < b.toLowerCase()) return -1;
//     if (b.toLowerCase() < a.toLowerCase()) return 1;
//     return 0;
//   });

//   for (let word of sortedWords) {
//     const numCaps = countCapitals(word);
    
//     if (result[numCaps] !== undefined) {
//       result[numCaps].push(word);
//     } else {
//       result[numCaps] = [word];
//     }
//   }

//   return result;
// }

// function countCapitals(word) {
//   return [...word].filter(char => char >= 'A' && char <= 'Z').length;
// }

// console.log(grouping(["HaPPy", "mOOdy", "yummy", "mayBE"])); // ➞ {
// //   0: ["yummy"],
// //   2: ["mayBE", "mOOdy"],
// //   3: ["HaPPy"]
// // }

// console.log(grouping(["eeny", "meeny", "miny", "moe"])); // ➞ {
// //   0: ["eeny", "meeny", "miny", "moe"]
// // }

// console.log(grouping(["FORe", "MoR", "bOR", "tOR", "sOr", "lor"])); // ➞ {
  // 0: ["lor"],
  // 1: ["sOr"],
  // 2: ["MoR", "bOR", "tOR"],
  // 3: ["FORe"]
// }

/* 
input: array(integers)
output: number

Qs:
- in case of tie of highest?

Algorithm:
fn: calcSum(nums, sign = 'positive')
- IF 'sign' equals 'positive':
  - filter nums for positive (greater than 0) numbers
- ELSE:
  - filter nums for negative (less than 0) numbers
- use reduce to get sum
- return sum

fn: countZeros(nums)
- filter 'nums' for just zeros, and return length of filtered array

fn: majorSum(nums)
- get positive sum
- get absolute value of negative sum
- get zeroCount
- return largest of these values using Math.max

*/

// function majorSum(nums) {
//   const positiveSum = calcSum(nums);
//   const negativeSum = calcSum(nums, 'negative');
//   const zeroCount = countZeros(nums);

//   const max = Math.max(positiveSum, Math.abs(negativeSum), zeroCount);

//   return max !== Math.abs(negativeSum) ? max : -max;
// }

// function calcSum(nums, sign = 'positive') {
//   const filteredNums = nums.filter(num => {
//     return sign === 'positive' ? num > 0 : num < 0;
//   });

//   return filteredNums.reduce((sum, curr) => sum + curr, 0);
// }

// function countZeros(nums) {
//   return nums.filter(num => num === 0).length;
// }

// console.log(majorSum([1, 2, 3, 4, 0, 0, -3, -2])); // ➞ 10
// console.log(majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0])); // ➞ -27
// console.log(majorSum([0, 0, 0, 0, 0, 1, 2, -3])); // ➞ 5

/* 
input: array(hand)
output: array or boolean

Rules:
- Hands with three or more of the same card still count as containing a pair

Algorithm:
- create unique array from 'hand'
- filter 'unique':
  - for cards that appear more than once in 'hand'
- IF filteredUnique is empty:
  - return false
- ELSE:
  - return array with elements:
    - true
    - result of calling fn:getHighest on filteredUnique

fn: getHighest(cards)
- create constant CARD_VALUES, init to an array i.e. [2, 3, 4, ... J, Q, K, A]
- map cards:
  - to their index in CARD_VALUES
- get max of mapped cards
- return string value: CARD_VALUES at position[max]

*/

// function highestPair(hand) {
//   const unique = [...new Set([...hand])];
  
//   const pairs = unique.filter(card => hand.filter(cardEl => cardEl === card).length > 1);
  
//   return pairs.length > 0 ? [true, getHighest(pairs)] : false;
// }

// function getHighest(cards) {
//   const CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q', 'K', 'A'];

//   const values = cards.map(card => CARD_VALUES.indexOf(card));
//   const max = Math.max(...values);
//   const maxCard = CARD_VALUES[max];

//   if (Number.isNaN(+maxCard)) {
//     return maxCard;
//   } else {
//     return +maxCard;
//   }
// }

// console.log(highestPair(["A", "A", "Q", "Q", "6" ])); // ➞ [true, "A"]
// console.log(highestPair(["J", "6", "3", "10", "8"])); // ➞ false
// console.log(highestPair(["K", "7", "3", "9", "3"])); // ➞ [true, 3]
// console.log(highestPair(["K", "9", "10", "J", "Q"])); // ➞ false
// console.log(highestPair(["3", "5", "5", "5", "5"])); // ➞ [true, 5]

/* 
input: array(arr)
output: 2darray

Rules:
- The subarrays should be returned in the order of each element's first appearance in the given array

Algorithm:
fn: getUnique(arr)
- create empty 'unique' array
- iterate over 'arr':
  - IF el does not yet exist in 'unique':
    - append el to 'unique'
- return 'unique'

fn: getCount(arr, el)
- filter 'arr' for elements equal to 'el', and return length

fn: advancedSort(arr)
- create variable 'unique', init to fn:getUnique on 'arr'
- map over 'unique':
  - replace with new array, value = current element, length = getCount of current element in ORIGINAL 'arr'
- return mapped array

*/

// function advancedSort(arr) {
//   const unique = getUnique(arr);

//   return unique.map(el => Array(getCount(arr, el)).fill(el));
// }

// function getCount(arr, el) {
//   return arr.filter(element => element === el).length;
// }

// function getUnique(arr) {
//   const unique = [];

//   for (let el of arr) {
//     if (!unique.includes(el)) {
//       unique.push(el);
//     }
//   }

//   return unique;
// }

// function advancedSort(arr) {
//   const unique = [...new Set([...arr])];
//   return unique.map(el => {
//     const count = arr.filter(arrEl => arrEl === el).length;
    
//     return Array(count).fill(el);
//   });
// }


// console.log(advancedSort([2, 1, 2, 1])); // ➞ [[2, 2], [1, 1]]
// console.log(advancedSort([5, 4, 5, 5, 4, 3])); // ➞ [[5, 5, 5], [4, 4], [3]]
// console.log(advancedSort(["b", "a", "b", "a", "c"])); // ➞ [["b", "b"], ["a", "a"], ["c"]]


/* 
input: array(nums)
output: number

fn: isBoomerang(arr)
- IF arr length is not equal to 3, return false
- IF all 3 values are equal, return false
- return whether 1st and last value are equal

fn: countBoomerangs(arr)
- create variable 'numBoomerangs', init to 0
- create loop from 0 to ('arr' length minus 3) inclusive, inc by 1
  - get slice of 'arr' from 'idx' to ('idx' plus 3)
  - IF slice is a boomerang (using fn:isBoomerang), increment 'numBoomerangs' by 1
- return 'numBoomerangs'

*/

// function countBoomerangs(arr) {
//   let numBoomerangs = 0;

//   for (let idx = 0; idx <= arr.length - 3; idx++) {
//     const slice = arr.slice(idx, idx + 3);
    
//     if (isBoomerang(slice)) {
//       numBoomerangs += 1;
//     }
//   }

//   return numBoomerangs;
// }

// function isBoomerang(arr) {
//   if (arr.length !== 3) return false;
//   if (arr.every(el => el === arr[0])) return false;

//   return arr[0] === arr[arr.length - 1];
// }


// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); // ➞ 2
// console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); // ➞ 1
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); // ➞ 0
// console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1])); // ➞ 5


/* 
input: array(nums)
output: number or null

rules:
- If the array contains less than 5 elements, the function should return null

Algorithm:
fn: minimumSum(nums)
- IF 'nums' length less than 5, return null
- create variable 'minSum', init to value of calling fn:calcSum for slice of 'nums' from 0 to 5
- create loop from 1 to ('nums' length - 5), inclusive, incrementing by 1:
  - get slice of 'nums' from 'idx' to ('idx' + 5)
  - calculate sum of slice using fn:calcSum
  - IF sum is LESS than 'minSum':
    - update 'minSum' to current sum
- return 'minSum'

fn: calcSum(nums)
- use reduce to calculate sum and return

*/

// function minimumSum(nums) {
//   if (nums.length < 5) return null;

//   let minSum = calcSum(nums.slice(0, 5));
  
//   for (let idx = 1; idx <= nums.length - 5; idx++) {
//     const slice = nums.slice(idx, idx + 5);
//     const sum = calcSum(slice);
    
//     if (sum < minSum) {
//       minSum = sum;
//     }
//   }

//   return minSum;
// }

// function calcSum(nums) {
//   return nums.reduce((sum, curr) => sum + curr, 0);
// }

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

/* 
input: array(nums)
output: number

Algorithm:
- create copy of 'nums' and sort numerically ascending
- iterate over 'numsCopy:
  - IF current element equals 'idx' plus 2:
    - return current element minus 1
- return undefined;

*/

// function missingNum(nums) {
//   const numsCopy = [...nums].sort((a, b) => a - b);

//   for (let idx = 0; idx < numsCopy.length; idx++) {
//     const curr = numsCopy[idx];
//     if (curr === idx + 2) {
//       return curr - 1;
//     }
//   }

//   return 10;
// }

// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // ➞ 5
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // ➞ 10
// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // ➞ 7

/* 
input: string(str)
output: string

Algorithm:
- convert 'str' to array of words
- map 'words':
  - IF current word has an even index: return word as is
  - ELSE:
    - convert current word to array of characters 'chars'
    - map over 'chars:
      - IF current char's index plus 1 is divisible evenly by 4:
        - return current char converted to uppercase
      - ELSE return current char as is
      - join mapped chars into string
      - return joined string
- join 'words' by space, and return

*/

// function toWeirdCase(str) {
//   const words = str.split(' ');
  
//   return words.map((word, wordIdx) => {
//     if (wordIdx % 2 === 0) {
//       return word;
//     } else {
//       return [...word].map((char, charIdx) => {
//         if ((charIdx + 1) % 4 === 0) {
//           return char.toUpperCase();
//         } else {
//           return char;
//         }
//       }).join('');
//     }
//   }).join(' ');
// }

// console.log(toWeirdCase('Lorem Ipsum is simply dummy text of the printing world'));


// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//               'Lorem IpsUm is simPly dummy texT of the printing worLd');
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');


/* 
input: array(nums)
output: array

Algorithm:
- create 'result' array, init to [null, null]
- create variable 'minDifference', init to Infinity
- create loop from 0 to 'nums' length - 1 exclusive (or nums - 2 inclusive), inc by 1
  - create inner loop from (idx + 1) to nums length exclusive, inc by 1
    - calculate difference between value at nums[idx] and nums[innerIdx]
    - IF difference is less than 'minDifference':
      - update 'minDifference' to current difference
      - set first 2 values of 'result' to nums[idx] and nums[innerIdx]
- return 'result'

*/

// function closestNumbers(nums) {
//   const result = [null, null];
//   let minDifference = Infinity;

//   for (let idx = 0; idx < nums.length - 1; idx++) {
//     for (let innerIdx = idx + 1; innerIdx < nums.length; innerIdx++) {
//       const first = nums[idx];
//       const second = nums[innerIdx];
//       const difference = Math.abs(first - second);
      
//       if (difference < minDifference) {
//         minDifference = difference;
//         [ result[0], result[1] ] = [first, second];
//       }
//     }
//   }

//   return result;
// }

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]

/* 
input: string(str)
output: string

rules:
- ignore case

Algorithm:
- convert 'str' to lowercase
- convert 'str' to unique array
- create variable 'minCount', init to Number.MAX_SAFE_INTEGER
- create variable 'minChar', init to ''
- iterate over 'unique':
  - get count of char in 'str'
  - IF count is less than 'minCount':
    - update 'minCount' to current count
    - update 'minChar' to current char
- return 'minChar'

*/

// function leastCommonChar(str) {
//   str = str.toLowerCase();
//   const uniqueStr = [...new Set([...str])];
  
//   let minCount = Number.MAX_SAFE_INTEGER;
//   let minChar = '';

//   for (let char of uniqueStr) {
//     const count = [...str].filter(el => el === char).length;
    
//     if (count < minCount) {
//       minCount = count;
//       minChar = char;
//     }
//   }

//   return minChar;
// }

// console.log(leastCommonChar("Hello World"));
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers"));
// console.log(leastCommonChar("Mississippi"));
// console.log(leastCommonChar("Happy birthday!"));
// console.log(leastCommonChar("aaaaaAAAA"));

// Every time I sat down to solve a problem, I didn't jump straight to the algorithm or code. Instead, I took time to understand the problem enough, as well as how to spot edge cases and ask the right questions. I don't think I’ve talked about this before, but I came up with a mnemonic device called BEYOND that helped with this. Here's a breakdown:

// 1. Bad input: is there bad input that my function should guard against? For example, if the problem only talks about positive integers as input, should I guard against negative integers? What should my function return if a negative integer is passed in as an argument?

// 2. Empty input: if my function accepts strings, arrays or objects, what should it return if they're empty?

// 3. You make no assumptions: just because all examples the interviewer provides are happy paths doesn't mean your function should only handle happy paths. If you notice a pattern but aren’t sure it'll always be true or hold up, don't assume —ask.

// 4. Order of input: if my function expects more than one argument, what should it return if they're passed in in the wrong order?

// 5. No input: should I always expect an argument to be passed in? What should my function return if no argument is passed in?

// 6. Data type of input: should my function only expect one data type to be passed in as argument? What should it return if a different data type is passed in?

/* 
input: number(numSubArrays), number(numItems), number or string(item)
output: array (2d)

Qs:
- missing arguments?
- wrong type of input?

Algorithm:
- create empty 'result' array
- create loop from 1 to 'numSubArrays' inclusive, inc by 1
  - create new array of length 'numItems', and fill with 'item'
  - append new array to 'result'
- return 'result'

*/

// function matrix(numSubarrays, numItems, item) {
//   const result = [];

//   for (let count = 1; count <= numSubarrays; count++) {
//     const arr = Array(numItems).fill(item);
//     result.push(arr);
//   }

//   return result;
// }


// console.log(matrix(3, 2, 3)); // ➞ [[3, 3], [3, 3], [3, 3]]
// console.log(matrix(2, 1, "edabit")); // ➞ [["edabit"], ["edabit"]]
// console.log(matrix(3, 2, 0)); // ➞ [[0, 0], [0, 0], [0, 0]]

/* 
input: array(arr1), array(arr2)
output: value

Rules:
- there can be duplicates

Algorithm:
- create copy of arr2: 'arr2Copy'
- iterate over arr1:
  - IF current el exists within 'arr2Copy':
    - get index of element within 'arr2Copy' and remove (splice) it
  - ELSE:
    - return current el
- return undefined

*/

// function missing(arr1, arr2) {
//   const arr2Copy = [...arr2];

//   for (let el of arr1) {
//     if (arr2Copy.includes(el)) {
//       const idx = arr2Copy.indexOf(el);
//       arr2Copy.splice(idx, 1);
//     } else {
//       return el;
//     }
//   }

//   return undefined;

// }

// console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8])); // ➞ 2
// console.log(missing([true, true, false, false, true], [false, true, false, true])); // ➞ true
// console.log(missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"])); // ➞ "ugly"

/* 
input: array(arr)
output: object

Rules:
- If given an empty array, return an empty hash
- The object should be in the same order as in the input array

Qs:
- does case matter:
- objects as array elements?

Algorithm:
- create empty 'result' object
- iterate through 'arr':
  - IF element already exists as a key within 'result':
    - increment value of that key by 1
  - ELSE add element as key of 'result' and set value to 1
- return 'result'

*/

// function getFrequencies(arr) {
//   const result = {};

//   for (let el of arr) {
//     result[el] = (result[el] || 0) + 1;
//   }

//   return result;
// }

// console.log(getFrequencies(["A", "B", "A", "A", "A"])); // ➞ { "A"=>4, "B"=>1 }
// console.log(getFrequencies([1, 2, 3, 3, 2])); // ➞ { 1=>1, 2=>2, 3=>2 }
// console.log(getFrequencies([true, false, true, false, false])); // ➞ { true=>2, false=>3 }
// console.log(getFrequencies([])); // ➞ {}

/* 
input: object(studentScores)
output: string

Algorithm:
- create variable 'maxAvg', init to 0
- create variable 'highestAvgStudent', init to null;
- get keys of 'studentScores' as an array and iterate over it:
  - get average of current student using fn:calcAvg
  - IF average is higher than 'maxAvg'
    - update 'maxAvg' to current average
    - update 'highestAvgStudent' to current key
- return 'highestAvgStudent'

fn: calcAvg(nums)
- use reduce to get sum of 'nums'
- divide 'sum' by 'nums' length and return result

*/

// function getBestStudent(studentScores) {
//   let maxAvg = 0;
//   let highestAvgStudent = null;

//   Object.keys(studentScores).forEach(student => {
//     const avg = calcAvg(studentScores[student]);
    
//     if (avg > maxAvg) {
//       maxAvg = avg;
//       highestAvgStudent = student;
//     }
//   });

//   return highestAvgStudent;
// }

// function calcAvg(nums) {
//   return nums.reduce((sum, curr) => sum + curr, 0) / nums.length;
// }

// console.log(getBestStudent({
//   John: [100, 90, 80],
//   Bob: [100, 70, 80]
// })); // ➞ "John"

// // John's avg = 90
// // Bob's avg = 83.33

// console.log(getBestStudent({
//   Susan: [67, 84, 75, 63],
//   Mike: [87, 98, 64, 71],
//   Jim: [90, 58, 73, 86]
// })); // ➞ "Mike"

/* 
input: number(num)
output: array (2d)

Algorithm:
- create empty 'result' array
- create variable 'count', init to 1
- create variable 'increment', init to 1
- create loop that runs WHILE 'count' is greater than or equal to 1
  - create array of length 'count', and fill with 'count'
  - append array to 'result'
  - IF 'count' equals 'num':
    - update 'increment' value to -1
  - update 'count' to: current value of 'count' plus 'increment'  // 3: 1 2 3 2 1
- return 'result'

*/

// function diamondArrays(num) {
//   const result = [];
  
//   let count = 1;
//   let increment = 1;

//   while (count >= 1) {
//     const arr = Array(count).fill(count);
//     result.push(arr);

//     if (count === num) {
//       increment = -1;
//     }

//     count += increment;
//   }

//   return result;
// }

// console.log(diamondArrays(1)); // ➞ [[1]]
// console.log(diamondArrays(2)); // ➞ [[1], [2, 2], [1]]
// console.log(diamondArrays(5)); // ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

/* 
input: string(str)
output: number

Algorithm:
- get 'midPoint' of 'str': ('str' length divided by 2, rounded down if necessary, minus 1) //  8 => 3 |  7 => 2
- create loop from ('idx') 0 to 'midPoint' inclusive, inc by 1:
  - get slice of 'str' from 0 to ('idx' + 1) // 'a' 'ab' 'abc'
  - create variable 'reps', init to 'str' length divided by 'slice' length // 12 / 1 = 12  12 / 2 = 6
  - IF 'slice' repeated 'reps' times equals 'str':
    - return 'reps'
- return 1

*/

// function numberOfRepeats(str) {
//   const midPoint = Math.floor(str.length / 2) - 1;
  
//   for (let idx = 0; idx <= midPoint; idx++) {
//     const strLen = str.length;

//     if (strLen % (idx + 1) !== 0) continue;

//     const slice = str.slice(0, idx + 1);
//     const reps = strLen / slice.length;

//     if (slice.repeat(reps) === str) {
//       return reps;
//     }
//   }

//   return 1;
// }

// console.log(numberOfRepeats("abcabcabcabc" )); // ➞ 4
// console.log(numberOfRepeats("bcbcbc")); // ➞ 3
// console.log(numberOfRepeats("llbllbllbllbllbllb")); // ➞ 6
// console.log(numberOfRepeats("kc")); // ➞ 1
// console.log(numberOfRepeats("kckck")); // ➞ 1

/* 
input: string(str)
output: string

Algorithm:
fn: isCapital(char)
- return if 'char' is between 'A' and 'Z' inclusive

fn: capToFront(str)
- convert 'str' to array of characters
- create variable 'caps', init to 'strArr' filtered for capitals and joined back into string
- create variable 'lower', init to 'strArr' filtered for non-capitals and joined back into string
- return 'caps' concatenated with 'lower'

*/

// function capToFront(str) {
//   const strArr = [...str];
  
//   const caps = strArr.filter(isCapital).join('');
//   const lower = strArr.filter(char => !isCapital(char)).join('');

//   return caps + lower;  
// }

// function isCapital(char) {
//   return char >= 'A' && char <= 'Z';
// }

// console.log(capToFront("hApPy")); // ➞ "APhpy"
// console.log(capToFront("moveMENT")); // ➞ "MENTmove"
// console.log(capToFront("shOrtCAKE")); // ➞ "OCAKEshrt"

/* 
input: array(num1), array(num2)
output: array

Rules:
- can be duplicates in each array (return only 1)

Algorithm:
- IF either input array is empty, return []
- create empty 'result' array
- convert both arrays to unique arrays using fn:getUnique
- create variable 'shorterArr', init to array with smaller length
- create variable 'longerArr', init to the other array
- iterate over 'shorterArr':
  - IF number exists in 'longerArr': append to 'result'
- return 'result'

fn: getUnique(arr)
- convert 'arr' into a set, then convert back to an array and return

*/

// function commonElements(arr1, arr2) {
//   if (!arr1.length || !arr2.length) return [];

//   const result = [];

//   const unique1 = getUnique(arr1);
//   const unique2 = getUnique(arr2);

//   const [ short, long ] = unique1.length < unique2.length ? [unique1, unique2] : [unique2, unique1];

//   for (let idx = 0; idx < short.length; idx++) {
//     const num = short[idx];

//     if (long.includes(num)) {
//       result.push(num);
//     }
//   }

//   return result;
// }

// function getUnique(arr) {
//   return [...new Set(arr)];
// }

// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); // ➞ [3]
// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // ➞ [1, 3, 4, 7]
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // ➞ [1, 2, 4, 5]
// console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // ➞ []

/* 
input: array(arr), number(num)
output: array

Algorithm:
fn: getCount(arr, el)
- return length of 'arr' filtered for elements equal to 'el'

fn: deleteOccurrences(arr, num)
- create empty 'result' array
- iterate over 'arr':
  - get 'count' of current element in 'result'
  - IF 'count' is less than 'num':
    - append' current element to 'result'
- return 'result' 

*/

// function deleteOccurrences(arr, num) {
//   const result = [];

//   for (let el of arr) {
//     if (getCount(result, el) < num) {
//       result.push(el);
//     }
//   }

//   return result;
// }

// function getCount(arr, el) {
//   return arr.filter(element => element === el).length;
// }


// console.log(deleteOccurrences([1, 1, 1, 1], 2)); // ➞ [1, 1]
// console.log(deleteOccurrences([13, true, 13, null], 1)); // ➞ [13, true, null]
// console.log(deleteOccurrences([true, true, true], 3)); // ➞ [true, true, true]

/* 
input: variable amount of numbers(nums)
output: number

Algorithm:
fn: sumDigProd(...nums)
- use reduce to get sum of 'nums', save as 'sum'
- create variable product, init to 'sum'
- create loop WHILE (product >= 10)
  - update 'product' to value of calling fn:productOfNum on 'product'
- return 'product'

fn: productOfNum(num)
- convert 'num' to a string
- convert string to an array of characters
- use reduce to get product of array, converting each element to a number
- return product

*/

// function sumDigProd(...nums) {
//   const sum = nums.reduce((total, num) => total + num, 0);
//   let product = sum;

//   while (product >= 10) {
//     product = productOfNum(product);
//   }

//   return product;
// }

// function productOfNum(num) {
//   return [...String(num)].reduce((product, curr) => product * curr, 1);
// }

// console.log(sumDigProd(16, 28)); // ➞ 6
// console.log(sumDigProd(0)); // ➞ 0
// console.log(sumDigProd(1, 2, 3, 4, 5, 6)); // ➞ 2

/* 
input: number(discs)
output: number

Algorithm:
- IF 'discs' equals 1: return 1

- return towerHanoi(discs - 1) + (2 ** (discs - 1));

// */

// function towerHanoi(discs) {
//   if (discs <= 0) return 0;
//   if (discs === 1) return 1;

//   return towerHanoi(discs - 1) + (2 ** (discs - 1));
// }

// console.log(towerHanoi(3)); // ➞ 7
// console.log(towerHanoi(5)); // ➞ 31
// console.log(towerHanoi(0)); // ➞ 0
// console.log(towerHanoi(21)); // ➞ 0

/* 
input: variable amount of numbers(movements)
output: array

Rules:
- always starts at [0, 0] facing north

//  North: pos adds to y, neg subtracts from y
//  East: pos adds to x, neg subtracts from x
//  South: pos subtracts from y, neg adds to y
//  West: pos subtracts from x, neg adds to x

Algorithm:
fn: trackRobot(...movements)
- create variable 'pos', init to [0, 0]
- iterate through 'movements':
  - IF 'idx' is divisible by 4:
    - ADD 'movement' to 2nd element of 'pos'
  - IF ('idx' - 1) is divisible by 4:
    - ADD 'movement' to 1st el of 'pos'
  - IF ('idx' - 2) is divisible by 4:
    - SUBTRACT 'movement' to 2nd el of 'pos' 
  - IF ('idx' + 1) is divisible by 4:
    - SUBTRACT 'movement' to 1st el of 'pos'
- return 'pos'

*/

// function trackRobot(...movements) {
//   const pos = [0, 0];

//   movements.forEach((movement, idx) => {
//     switch (0) {
//       case idx % 4:
//         pos[1] += movement;
//         break;
//       case (idx - 1) % 4:
//         pos[0] += movement;
//         break;
//       case (idx - 2) % 4:
//         pos[1] -= movement;
//         break;
//       case (idx + 1) % 4:
//         pos[0] -= movement;
//         break;
//     }
//   });

//   return pos;
// }

// console.log(trackRobot(20, 30, 10, 40)); // ➞ [-10, 10]
// console.log(trackRobot()); // ➞ [0, 0]
// console.log(trackRobot(-10, 20, 10)); // ➞ [20, -20]

/* 
input: string(str1), string(str2)
output: boolean

Rules:
- IF either string is empty: return false
- case does NOT matter = if case doesn't match up, it's still a match!

Qs:
- does case matter? (no)

Algorithm:
- convert both strings to lowercase
- create variable 'short', init to shorter of the two input strings
- create variable 'long', init to the other string (longer one)
- create empty 'shortStrSubs' array
- create outer loop ('start') from 0 to ('short' length - 1) exclusive, inc by 1:
  - create inner loop ('end') from ('idx' + 2) to 'short' length exclusive, inc by 1  // 'Something' = 'So' 'Som' 'Some' etc  'om' 'ome'
    - get slice of 'short' from 'start' to 'end'
    - append slice to 'shortStrSubs'
- return whether ANY of the substrings in 'shortStrSubs' exists in 'long'

*/

// function substringTest(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   if (!str1.length || !str2.length) return false;
  
//   const [ short, long ] = str1.length < str2.length ? [str1, str2] : [str2, str1];
//   const shortStrSubs = [];

//   for (let start = 0; start < short.length - 1; start++) {
//     for (let end = start + 2; end <= short.length; end++) {
//       const slice = short.slice(start, end);
//       shortStrSubs.push(slice);
//     }
//   }

//   return shortStrSubs.some(substring => long.includes(substring));
// }

// console.log(substringTest('Something', 'Fun')); // false
// console.log(substringTest('Something', 'Home')); // true
// console.log(substringTest('Something', '')); // false
// console.log(substringTest('', 'Something')); // false
// console.log(substringTest('BANANA', 'banana'));  // true
// console.log(substringTest('test', 'lllt')); // false
// console.log(substringTest('', '')); // false
// console.log(substringTest('1234567', '541265')); // true
// console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou')); // true

// function toDate(string) {
//   return new Date(string + "T00:00:00");
// }

// const TODAY = toDate("2018-08-05");

// function toString(date) {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const dayOfMonth = String(date.getDate()).padStart(2, '0');
  
//   return `${year}-${month}-${dayOfMonth}`;
// }

// function isInThePast(date) {
//   return date < TODAY;
// }

// function isWeekday(date) {
//   const day = date.getDay();
//   return day >= 1 && day <= 5;
// }

// let myCalendar = {
//   "2018-08-13": ["JS debugging exercises"],
//   "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
//   "2018-08-15": ["Read 'Demystifying Rails'"],
//   "2018-08-16": [],
//   "2018-08-30": ["Drone video project plan"],
//   "2018-09-10": ["Annual servicing of race bike"],
//   "2018-09-12": ["Study"],
//   "2018-11-02": ["Birthday Party"],
//   "2018-11-03": ["Birthday Party"]
// };

// let offeredClasses = {
//   "Back To The Future Movie Night": ["2018-07-30"],
//   "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
//   "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
//   "Mike's Hikes": ["2018-08-16"],
//   "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
//   "Powerboating 101": ["2018-09-15", "2018-09-16"],
//   "Discover Parachuting": ["2018-11-02"]
// };

// function getCompatibleEvents(classes, calendar) {
//   function isAvailable(date) {
//     let dateStr = toString(date);
//     return !calendar[dateStr] || calendar[dateStr].length === 0;
//   }

//   let compatibleClasses = [];

//   Object.keys(classes).forEach(className => {
//     let classDates = classes[className].map(toDate);

//     if (classDates.some(isInThePast)) {
//       return;
//     }

//     if (classDates.filter(isWeekday).every(isAvailable)) {
//       compatibleClasses.push(className);
//     }
//   });

//   return compatibleClasses;
// }

// console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]


// function neutralize(sentence) {
//   let words = sentence.split(" ");

//   return words.filter(word => {
//     return !isNegative(word);
//   }).join(' ');
// };

// function isNegative(word) {
//   return ["dull", "boring", "annoying", "chaotic"].includes(word);
// }
 
// console.log(
//   neutralize("These dull boring cards are part of a chaotic board game.")
// );
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.


//  Write a function to find the longest common prefix string amongst an array of strings

/* 
input: array(strings)
output: string

Rules:
- if no common prefix, return ''
- input strings will all be lowercase

Algorithm:
- make copy of 'strings' called 'strsCopy'
- sort strings by length (ascending)
- create variables 'first' and 'others' using destructuring
- create variable 'result' and init to empty string
- iterate over 'first':
  - check if EVERY string in 'others' starts with ('result' concatenated with current character in 'first')
  - IF yes, append current character to 'result'
  - ELSE: return 'result'
- return 'result'  

*/

// function commonPrefix(strings) {
//   const [ first, ...others ] = [...strings].sort((a, b) => a.length - b.length);
  
//   let result = '';

//   for (let char of first) {
//     if (others.every(str => str.startsWith(result + char))) {
//       result += char;
//     } else {
//       return result;
//     }
//   }

//   return result;
// }

// function commonPrefix(strs) {
//   const firstStr = strs[0];
  
//   let result = '';
  
//   for (let idx = 0; idx < firstStr.length; idx++) {
//     const char = firstStr[idx];

//     if (strs.every(str => str.startsWith(result.concat(char)))) {
//       result += char;  
//     } else return result;
//   }

//   return result;
// }

/* 
Algorithm 2: (different approach)
fn: commonPrefixTwo(str1, str2)
- create variables 'short' and 'long' from two input strings based on length
- create variable 'common', init to empty string // 'flow'
- iterate over 'short':
  - IF 'long' starts with 'common' concatenated with current char: // 'fl'
    - append current char to 'common' // ''
  - ELSE: return 'common'

return 'common'

fn: commonPrefix(strs)
- IF strs length equals 1: return strs[0];
- create variable 'common', init to value returned by calling fn:commonPrefixTwo and passing in first 2 elements of array
- create loop from 2 to strs length exclusive, inc by 1:
  - update 'common' to: fn:commonPrefixTwo called with 'common' and current array element passed in // 'flow', 'flight' => 'fl'
- return 'common'

*/

// function commonPrefix(strs) {
//   if (strs.length === 1) return strs[0];

//   let common = commonPrefixTwo(strs[0], strs[1]);
  
//   for (let idx = 2; idx < strs.length; idx++) {
//     const str = strs[idx];
//     common = commonPrefixTwo(common, str);
//   }

//   return common;
// }

// function commonPrefixTwo(str1, str2) {
//   const [ short, long ] = str1.length < str2.length ? [str1, str2] : [str2, str1];
//   let common = '';


//   for (let char of short) {
//     if (long.startsWith(common + char)) {
//       common += char;
//     } else return common;
//   }

//   return common;
// }

// console.log(commonPrefixTwo('flower', 'flog'));

// console.log(commonPrefix(['flower','flow','flight'])); // fl
// console.log(commonPrefix(['dog','racecar','car'])); // ''
// console.log(commonPrefix(['interspecies','interstellar','interstate'])); // 'inters'
// console.log(commonPrefix(['throne', 'dungeon'])); // ''
// console.log(commonPrefix(['throne', 'throne'])); // 'throne'


// smaller numbers than current

/* 
input: array(nums)
output: array

Qs:
- empty array?
- non-array input?

Algorithm:
fn: smallerNumbersThanCurrent(nums)
- IF nums is empty, return []
- IF nums has 1 element, return [0]
- get unique array from 'nums' using 'fn:getUnique' called 'uniqueNums'
- map over 'nums':
  - use reduce on 'uniqueNums' to count elements smaller than 'num'
  - return result
- return mapped 'nums'

fn: getUnique(arr)
- use reduce to get unique array from arr:
  - accumulator = 'unique', init to empty array
  - IF current element does not exist within unique, append to unique
  - on each iteration, return 'unique'
- return result

*/

// function smallerNumbersThanCurrent(nums) {
//   if (!nums.length) return [];
//   if (nums.length === 1) return [0];
  
//   const unique = getUnique(nums);

//   return nums.map(num => countSmaller(num, unique)); 
// }

// function countSmaller(num, arr) {
//   let count = 0;

//     arr.forEach(el => {
//       if (el < num) {
//         count += 1;
//       }
//     })

//     return count;
// }

// function getUnique(arr) {
//   return arr.reduce((unique, curr) => {
//     if (!unique.includes(curr)) {
//       unique.push(curr);
//     }

//     return unique;
//   }, []);
// }

// function smallerNumbersThanCurrent(nums) {
//   return nums.map(num => {
//     const uniqueSmaller = [];

//     nums.forEach(n => {
//       if (n < num && !uniqueSmaller.includes(n)) {
//         uniqueSmaller.push(n);
//       }
//     })

//     return uniqueSmaller.length;
//   });
// }

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]


// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

/* 
input: array(nums)
output: number

Rules: 
- IF the array contains less than 5 elements, the function should return null

Algorithm:
- IF 'nums' length less than 5, return null
- create variable minSum, init to Infinity
- create loop from 0 to ('nums' length minus 5) inclusive, inc by 1
  - get slice of 'nums' array, from 'idx' to ('idx' + 5)
  - get sum of slice
  - IF sum is less than 'minSum', update 'minSum' to sum
- return 'minSum'

*/

// function minimumSum(nums) {
//   if (nums.length < 5) return null;

//   let minSum = Infinity;

//   for (let idx = 0; idx <= nums.length - 5; idx++) {
//     const slice = nums.slice(idx, idx + 5);
//     const sum = slice.reduce((total, curr) => total + curr, 0);

//     if (sum < minSum) {
//       minSum = sum;
//     }
//   }

//   return minSum;
// }


// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);


// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

/* 
input: string(str)
output: string

Algorithm:
- convert 'str' to an array of words
- map over 'words':
  - IF 'wordIdx' + 1 is divisible by 2: // every 3rd word
    - convert 'word' to array of characters:
    - map over 'word':
      - IF 'charIdx' + 1 is divisible by 3: // every 3rd character
        - return character uppercased
      - ELSE return character as is
      - join mapped 'word' back into string and return
  - ELSE return 'word'
- join mapped 'words' with space and return

*/

// function toWeirdCase(str) {
//   return str.split(' ').map((word, wordIdx) => {
//     if ((wordIdx + 1) % 2 === 0) {
//       return [...word].map((char, charIdx) => {
//         if ((charIdx + 1) % 4 === 0) {
//           return char.toUpperCase();
//         }

//         return char;
//       }).join('');
//     }

//     return word;
//   }).join(' ');
// }

// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world'));
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".

/* 
input: array(nums)
output: array

Qs:
- array of less than 3 values?
- non-array input?
- arrays with types other than numbers?

Algorithm:
- create 'result' array // []
- create variable 'minDifference', init to Infinity
- create outer loop ('outerIdx') from 0 to ('nums' length minus 1) exclusive, inc by 1  //  5 25   5 15   5 11  5 20   25 15
  - create inner loop ('innerIdx') from ('outerIdx' + 1) to 'nums' length, inc by 1
    - create variable 'first', set to element in 'nums' at position ['outerIdx']
    - create variable 'second', set to element in 'nums' at position ['innerIdx']
    - get difference between 'first' and 'second' (subtract 'second' from 'first and obtain absolute value)
    - IF difference is less than 'minDifference':
      - update 'minDifference' to value of difference
      - set 'result' at position 0 to 'first', 'result' at position [1] to 'second'
- return 'result'

*/

// function closestNumbers(nums) {
//   const result = [];
//   let minDifference = Infinity;

//   for (let outerIdx = 0; outerIdx < nums.length - 1; outerIdx++) {
//     for (let innerIdx = outerIdx + 1; innerIdx < nums.length; innerIdx++) {
//       const first = nums[outerIdx];
//       const second = nums[innerIdx];

//       const difference = Math.abs(first - second);
      
//       if (difference < minDifference) {
//         minDifference = difference;
//         result[0] = first;
//         result[1] = second;
//       }
//     }
//   }

//   return result;
// }

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]   
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]

/* 
input: string(str)
output: string

Rules:
- multiple characters with the same lowest number of occurrences => return the one that appears first in the string
- consider uppercase and lowercase versions to be the same

Qs:
- empty string?
- non-string input?

Algorithm:
- convert 'str' to lowercase
- get version of 'str' with only unique letters, using fn:getUnique
- create variable 'minOccurrences', init to Infinity
- create variable 'minChar', init to ''
- iterate over 'uniqueStr':
  - get number of occurrences within 'str':
    - convert 'str' to array of characters, filter array for elements equal to current char, and get length of filtered array
  - IF 'numOccurrences' is less than 'minOccurences':
    - update 'minOccurrences' to 'numOccurrences'
    - update 'minChar' to current character
- return 'minChar'

fn: getUnique(str)
- convert 'str' to array of characters
- convert array to a set
- convert back to an array
- convert back to a string using 'join' method

*/

// function leastCommonChar(str) {
//   str = str.toLowerCase();
//   const charMap = getCharMap(str);

//   let minOccurences = Infinity;
//   let minChar = '';

//   for (let key of Object.keys(charMap)) {
//     if (charMap[key] < minOccurences) {
//       minOccurences = charMap[key];
//       minChar = key;
//     }
//   }

//   return minChar;
// }

// function getCharMap(str) {
//   const charMap = {};

//   for (let char of str) {
//     charMap[char] = (charMap[char] || 0) + 1;
//   }

//   return charMap;
// }

// function getUnique(str) {
//   return [...new Set([...str])].join('');
// }

// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');

// { a: 3, b:2, o: 17 }
// ['a', 'b', 'o]

// function letterCount(s){
//   let res = {}
//   return s.split('').sort()
  
//   // return res;
// }

// console.log(letterCount('hello world'));

// You are given array of integers, your task will be to count all pairs in that array and return their count.

/* 
input: array(arr)
output: number

Rules:
- IF array is empty or has length of 1 => return 0
- IF there are more pairs of a certain number, count each pair only once

Algorithm:
- get "character map" object that shows number of occurrences for every element within 'arr'
- get keys of 'charMap' as array:
  - use reduce to calculate number of pairs:
    - accumulator = 'numPairs', init to 0
    - for each key, Math.floor(value of key divided by 2)
    - add to accumulator, return accumulator
- return result of 'reduce' method

fn: getCharMap(arr)
- create empty 'charMap' object
- iterate over 'arr':
  - IF current element does not exist as key in 'charMap':
    - add current element as key in 'charMap' and set value to 1
  - ELSE:
    - increment value of 'charMap' at position [current element] by 1
- return 'charMap'

*/

// function duplicates(arr) {
//   const charMap = getCharMap(arr);

//   return Object.keys(charMap).reduce((numPairs, curr) => {
//     const pairs = Math.floor(charMap[curr] / 2);
//     return numPairs + pairs;
//   }, 0)
// }

// function getCharMap(arr) {
//   const charMap = {};

//   for (let el of arr) {
//     charMap[el] = (charMap[el] || 0) + 1;
//   }

//   return charMap;
// }


// console.log(duplicates([1, 2, 5, 6, 5, 2])); // 2
// console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])); // 4


// Complete the solution so that it returns the number of times the search_text is found within the full_text.

/* 
input: string(fullText), string(searchText)
output: number

Algorithm:
- create 'count' variable, init to 0
- iterate over 'fullText'
  - get slice of 'fullText' from current char to end
  - IF slice starts with 'searchText':
    - inc 'count' by 1
return 'count'

*/

// function solution(fullText, searchText) {
//   let count = 0;

//   for (let idx = 0; idx < fullText.length; idx++) {
//     const slice = fullText.slice(idx);
    
//     if (slice.startsWith(searchText)) {
//       count += 1;
//     }
//   }

//   return count;
// }


/* 
Algorithm:
- create 'count' variable, init to 0
- create variable 'position', init to 0
- create variable 'index';
- create loop WHILE true
  - update 'index' to index of 'searchText' in 'fullText', searching from 'position'
  - IF 'index' equals -1: BREAK
  - increment 'count' by 1
  - update 'position' to 'index' + 1
- return 'count'

*/

// function solution(fullText, searchText) {
//   let count = 0;
//   let position = 0;
//   let index;

//   while (true) {
//     index = fullText.indexOf(searchText, position);
//     // console.log(`Index: ${index}`);
//     if (index === -1) break;

//     count += 1;
//     position = index + 1;

//     // console.log(`Count: ${count} | Position: ${position}`);
//   }

//   return count;
// }

// function solution(fullText, searchText) {
//   return [...fullText].reduce((count, _, idx) => {
//     const slice = fullText.slice(idx, idx + searchText.length);
//     if (slice === searchText) {
//       count += 1;
//     }

//     return count;
//   }, 0);
// }

// console.log(solution('aa_bb_cc_dd_bb_e', 'bb')); // should return 2 since bb shows up twice
// console.log(solution('aaabbbcccc', 'bbb')); // should return 1
// console.log(solution('abcdeb','b')); // 2
// console.log(solution('abc','b')); // 1
// console.log(solution('abbc','bb')); // 1

//  The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

/* 
input: string(str)
output: number

Qs:
- empty string
- non-string input
- no arguments supplied

Algorithm:
- create variable 'max', init to 0
- create variable 'current', init to 0
- create constant 'VOWELS', init to string 'aeiou'
- convert 'str' to lowercase
- iterate over 'str':
  - IF current char is included in VOWELS:
    - increment 'current' by 1
    - IF current index equals ('str' length minus 1) // last character
      - check IF 'current' is greater than 'max':
      - update 'max' to 'current'
      - set 'current' to 0
  - ELSE:
    - check IF 'current' is greater than 'max':
      - update 'max' to 'current'
    - set 'current' to 0
- return 'max'

*/

// function solve(str) {
//   let max = 0;
//   let current = 0;

//   const VOWELS = 'aeiou';

//   function checkCurrent() {
//     if (current > max) {
//       max = current;
//     }
//   }

//   str = str.toLowerCase();

//   for (let idx = 0; idx < str.length; idx++) {
//     const char = str[idx];

//     if (VOWELS.includes(char)) {
//       current += 1;

//       checkCurrent();      
//     } else {
//       checkCurrent();      

//       current = 0;
//     }    
//   }

//   return max;
// }



// console.log(solve("codewarriors")); // 2
// console.log(solve("suoidea")); // 3
// console.log(solve("ultrarevolutionariees")); // 3
// console.log(solve("strengthlessnesses")); // 1
// console.log(solve("cuboideonavicuare")); // 2
// console.log(solve("chrononhotonthuooaos")); // 5
// console.log(solve("iiihoovaeaaaoougjyaw")); // 8

// console.log('codewarriors'.split(/[^aeiou]/));


// function solution(fullText, searchText) {
//   let count = 0;
//   let currIdx = fullText.indexOf(searchText);

//   while (currIdx > -1) {
//     count += 1;
//     // currIdx = fullText.indexOf(searchText, currIdx + 1);
//     currIdx = fullText.slice(currIdx + 1).indexOf(searchText);
//     // console.log(fullText.slice(currIdx + 1).indexOf(searchText));
//   }

//   return count;
// }

// console.log(solution('aa_bb_cc_dd_bb_e', 'bb')); // # should return 2 since bb shows up twice
// console.log(solution('aaabbbcccc', 'bbb')); // should return 1
// console.log(solution('abcdeb','b')); // 2
// console.log(solution('abc','b')); // 1
// console.log(solution('abbc','bb')); // 1

// console.log(solution('aaabbbcccc', 'bb')); // 2


/* 
input: string(str)
output: string

Rules:
- IF string is empty, return ''

Algorithm:
- IF string has 0 length, return ''
- create empty 'clean' array
- iterate over 'str':
  - IF current char does not equal '#':
    - append char to 'clean'  ['a', 'b', 'c']
  - ELSE:
    - remove last element of 'clean'
- join 'clean' into string and return

*/

// function cleanString(str) {
//   if (!str.length) return '';

//   const clean = [];

//   for (let char of str) {
//     if (char !== '#') {
//       clean.push(char);
//     } else {
//       clean.pop();
//     }
//   }

//   return clean.join('');
// }


// console.log(cleanString("abc#d##c")); //      ==>  "ac"
// console.log(cleanString("abc##d######")); //  ==>  ""
// console.log(cleanString("#######")); //       ==>  ""
// console.log(cleanString("")); //              ==>  ""
// console.log(cleanString('abcde##d##c#')); //   ==> ''

/* 
input: string(str)
output: number

Qs:
- empty string?

Algorithm:
- create variable 'numOdd', init to 0
- create loop from 0 to 'str' length exclusive, inc by 1
  - IF current character, when converted to a number, is even: continue to next iteration
  - ELSE:
    - increment 'numOdd' by (current index + 1) // number of odd substrings that end in current character
- return 'numOdd'

*/

// function solve(str) {
//   let numOdd = 0;

//   for (let idx = 0; idx < str.length; idx++) {
//     const char = str[idx];

//     if (+char % 2 === 0) continue;

//     numOdd += idx + 1;
//   }

//   return numOdd;
// }

// function solve(s){
//   return [...s].reduce((t,n,i) => t + (+n % 2 ? i + 1 : 0), 0);
// };

// console.log(solve('1341')); // 7
// console.log(solve("1341")); //  7
// console.log(solve("1357")); // 10
// console.log(solve("13471")); // 12
// console.log(solve("134721")); // 13
// console.log(solve("1347231")); // 20
// console.log(solve("13472315")); // 28



// For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times

/* 
input: string(str)
output: array

Algorithm:
- create empty 'result' array
- create variable 'midPoint', init to ('str' length divided by 2, then floored)
- create loop (counter variable: 'idx') from 1 to 'midPoint' inclusive, incrementing by 1:
  - get slice of 'str' from 0 to 'idx':
  - create variable 'repeatTimes' and init to (str length divided by slice length)
    - IF 'slice' repeated 'repeatTimes' times equals 'str':
      - set 'result' at position 0 to 'slice'
      - set 'result' at position 1 to 'repeatTimes'
      - return 'result'
- set 'result' at position 0 to 'str'
- set 'result' at position 1 to 1
- return 'result'

*/

// function f(str) {
//   const result = [];
//   const midPoint = Math.floor(str.length / 2);

//   for (let idx = 1; idx <= midPoint; idx++) {
//     const slice = str.slice(0, idx);
//     const repeatTimes = str.length / slice.length;

//     if (slice.repeat(repeatTimes) === str) {
//       result[0] = slice;
//       result[1] = repeatTimes;

//       return result;
//     }
//   }

//   result[0] = str;
//   result[1] = 1;
//   return result;
// }

// console.log(f('ababab')); // ['ab', 3]  length: 6 => index 3
// console.log(f('abcde')); // ['abcde', 1] length: 5 => index 2

/* 
input: array(nums)
output: number

Rules:
- IF array is empty, return 0
- IF all positive, sum entire array
- IF all negative, return 0

Algorithm:
fn: maxSequence(nums)
- IF array is empty, return 0
- IF all numbers are negative (check using 'every'), return 0
- IF all numbers are positive (check using 'every' method), return sum of array, using fn: calcSum
- create variable 'max', init to 0
- create outer loop (counter = 'startIdx') over entire 'nums', inc by 1:
  - create inner loop (counter = 'endIdx') from ('startIdx' + 1) to 'nums' length inclusive, inc by 1
    - get slice of 'nums' from 'startIdx' to 'endIdx'
    - calculate sum of slice using fn:calcSum
    - IF sum is greater than 'max':
      - update 'max' to current sum
- return 'max'

fn: calcSum(nums)
- use reduce to get sum of 'nums'
  - accumulator = 'sum', init to 0
- return result

*/

// function maxSequence(nums) {
//   if (!nums.length) return 0;
//   if (nums.every(num => num <= 0)) return 0;
//   if (nums.every(num => num >= 0)) {
//     return calcSum(nums);
//   }

//   let max = 0;

//   for (let startIdx = 0; startIdx < nums.length; startIdx++) {
//     for (let endIdx = startIdx + 1; endIdx <= nums.length; endIdx++) {
//       const slice = nums.slice(startIdx, endIdx);
//       const sum = calcSum(slice);
      
//       if (sum > max) {
//         max = sum;
//       }
//     }
//   }

//   return max;
// }

// function calcSum(nums) {
//   return nums.reduce((sum, curr) => sum + curr, 0);
// }

// function maxSequence(arr) {
//   var max = 0
  
//   for (let i = 0; i < arr.length; i++) {
//     for (let sum = 0, j = i; j < arr.length; j++) {
//       console.log(arr[j], sum);
//       sum += arr[j]
//       console.log(arr[j], sum);

//       if (sum > max) max = sum
//     }
//   }
  
//   return max
// }

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6: [4, -1, 2, 1]
// console.log(maxSequence([])); // 0
// console.log(maxSequence([-3, -18, -4, 0])); // 0
// console.log(maxSequence([3, 18, 4, 0])); // 0

// Longest Common Prefix

// Write a function to find the longest common prefix string amongs an array of strings

/* 
input: array(strs)
output: string

Qs:
- empty string? => return ''
- empty array? => return ''

Algorithm:
- IF 'strs' is empty: return ''
- IF any string in 'str' is empty, return ''
- sort 'strs' by length, ascending // shortest string first
- create variable 'common', init to ''
- create variables for 'shortest' element, rest of elements 'otherStrs' (destructure)
- iterate over 'shortest':
  - get current character 'char'
  - IF every string in 'otherStrs' has same character as 'char' at current index: //  'flow'[1] = 'l'  'flower'[1] = l? etc
    - append 'char' to 'common'
  ELSE:
    - return 'common'
- return 'common'

*/

// function longestCommonPrefix(strs) {
//   if (!strs.length) return '';
//   if (strs.some(str => str.trim() === '')) return '';

//   const sortedByLength = [...strs].sort((a, b) => a.length - b.length);
//   const [ shortest, ...others ] = sortedByLength;
  
//   let common = '';

//   for (let idx = 0; idx < shortest.length; idx++) {
//     const char = shortest[idx];

//     if (others.every(str => str[idx] === char)) {
//       common += char;
//     } else {
//       return common;
//     }
//   }

//   return common;

// }

// console.log(longestCommonPrefix([]) === ''); // ''
// console.log(longestCommonPrefix(['flower', ''])); // ''
// console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
// console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
// console.log(longestCommonPrefix(['interspecies', 'interstellar', 'interstate'])); // 'inters'
// console.log(longestCommonPrefix(['throne', 'dungeon'])); // ''
// console.log(longestCommonPrefix(['throne', 'throne'])); // 'throne'

/* 
input: array(nums)
output: number

Rules:
- empty array equals 0
- numbers can be negative or positive integers

Qs:
- non-numbers in array?
- NaN?
- non-integers?
- non-array input?

Algorithm:
fn: calcSum(nums)
- use reduce to get sum of 'nums'
  - accumulator = 'sum', init to 0
- return result of reduce

fn: findEvenIndex(nums)
- iterate over 'nums':
  - create variable 'leftSide', init to slice of 'nums' from 0 to 'idx'
  - create variable 'rightSide', init to slice of 'nums' from ('idx' + 1) to end of 'nums'
  - IF sum of 'leftSide' equals sum of 'rightSide' (using fn: calcSum):
    - return 'idx'
- return -1

*/

// function findEvenIndex(nums) {
//   for (let idx = 0; idx < nums.length; idx++) {
//     const leftSide = nums.slice(0, idx);
//     const rightSide = nums.slice(idx + 1);

//     if (calcSum(leftSide) === calcSum(rightSide)) {
//       return idx;
//     }
//   }

//   return -1;
// }

// function calcSum(nums) {
//   return nums.reduce((sum, curr) => sum + curr, 0);
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
// console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20])); // 6
// console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1])); // 3


/* 
input: string(str)
output: boolean

Rules:
- case does not matter
- 'str' must use every letter in alphabet at least once, whether upper or lower case

Qs:
- non-string input?

Algorithm:
- create constant ALPHABET_LENGTH, init to 26
- IF 'str' length is less than ALPHABET_LENGTH: return false
- create constant ALPHABET, init to a string consisting of entire lowercase alphabet
- convert 'str' to lowercase and update value of 'str'
- iterate over ALPHABET:
  - IF any letter does not exist within 'str': return false
- return true

*/

// function isPangram(str) {
//   const ALPHABET_LENGTH = 26;
//   const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

//   if (str.length < ALPHABET_LENGTH) return false;

//   str = str.toLowerCase();

//   for (let char of ALPHABET) {
//     if (!str.includes(char)) {
//       return false;
//     }
//   }

//   return true;
// }


// console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
// console.log(isPangram("This is not a pangram")); // false

/* 
input: string(str1), string(str2)
output: boolean

Algorithm 2:
fn: scramble(str1, str2)
- IF str1 length less than str2 length, return false
- get array of only unique characters from 'str2' using fn:getUnique
- iterate over 'uniqueStr2Arr':
  - check if EVERY character's character count within 'str2' is less than or equal to character's count within str1
- return result oF EVERY

fn: getUnique(str)
- convert 'str' to a set
- convert set to an array and return

fn: charCount(str, char)
- split 'str' on 'char'
- return length of array - 1

*/

// function scramble(str1, str2) {
//   if (str1.length < str2.length) return false;

//   const seen = [];
//   for (let idx = 0; idx < str2.length; idx++) {
//     const char = str2[idx];

//     if (seen.includes(char)) continue;

//     if (str2.split(char).length > str1.split(char).length) {
//       return false;
//     }

//     seen.push(char);
//   }

//   return true
// }


// console.log(scramble('rkqodlw', 'world')); // ==> True
// console.log(scramble('cedewaraaossoqqyt', 'codewars')); // ==> True
// console.log(scramble('katas', 'steak')); // ==> False
// console.log(scramble('scriptjavx','javascript')); // false
// console.log(scramble('scriptingjava','javascript')); // true
// console.log(scramble('scriptsjava','javascripts')); // true
// console.log(scramble('javscripts','javascript')); // false
// console.log(scramble('jscripts','javascript')); // false
// console.log(scramble('aabbcamaomsccdd','commas')); // true
// console.log(scramble('commas','commas')); // true
// console.log(scramble('sammoc','commas')); // true


/* 
input: string(str)
output: num

Qs:
- negative?
- non-string input
- empty string

Algorithm:
- create a variable 'maxProduct', init to -Infinity
- create loop from 0 to ('str' length - 5) inclusive, increment by 1
  - get slice of 'str' from current 'idx' to ('idx' + 5)  // '12383' '23834'
  - convert slice to an array of characters
  - use reduce to get product of the array elements:
    - accumulator = 'product', init to 1
    - one each iteration, convert current element to a number
    - multiply number by current value of 'product', and return result on each iteration
  - IF product of current slice is greater than 'maxProduct':
    - reassign 'maxProduct' to 'product'
- return 'maxProduct'

*/

// function greatestProduct(str) {
//   let maxProduct = -Infinity;

//   for (let idx = 0; idx <= str.length - 5; idx++) {
//     const slice = str.slice(idx, idx + 5);
//     const product = [...slice].reduce((product, curr) => {
//       return +curr * product;
//     }, 1)

//     if (product > maxProduct) {
//       maxProduct = product;
//     }
//   }

//   return maxProduct;
// }

// console.log(greatestProduct("123834539327238239583")); // should return 3240
// console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
// console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
// console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
// console.log(greatestProduct("02494037820244202221011110532909999")); // 0


/* 
input: array(nums)
output: number

Algorithm:
fn: isPrime(num)
- IF 'num' is 1 or less, return false
- IF 'num' equals 2, return true
- IF 'num' is evenly divisible by 2, return false
- create loop (counter = 'count') from 3 to (square root of 'num') inclusive, increment by 1
  - IF 'num' divided by 'count' has 0 remainder, return false
- return true

fn: minimumNumber(nums)
- use reduce to calculate sum of arr
  - accumulator = 'sum', init to 0
- save result in variable 'sum'
- create variable 'count', init to 'sum'
- create loop WHILE true:
  - IF 'count' is prime (using fn:isPrime):
    - return 'count' minus 'sum'
  - ELSE:
    - increment 'count' by 1

*/

// function minimumNumber(nums) {
//   const sum = nums.reduce((total, curr) => total + curr, 0);
//   let count = sum;

//   while (true) {
//     if (isPrime(count)) {
//       return count - sum;
//     }

//     count += 1;
//   }
// }

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;

//   for (let count = 3; count <= Math.sqrt(num); count += 2) {
//     if (num % count === 0) return false;
//   }

//   return true;
// }

// console.log(isPrime(25));

// console.log(minimumNumber([3, 1, 2])); // ==> return (1)
// console.log(minimumNumber([2, 12, 8, 4, 6])); // ==> return (5)
// console.log(minimumNumber([50, 39, 49, 6, 17, 28])); // ==> return (2)

/* 
input: array(nums)
output: number

Rules:
- return the first index that satisfies the problem
- if no such index, return -1
- empty array = 0

Algorithm:
- iterate over 'nums':
  - create variable 'left', init to slice of 'nums' from 0 to current index
  - create variable 'right', init to slice of 'nums' from (current index + 1) to end of 'nums'
  - get sums of 'left' and 'right':
  - IF sums of 'left' and 'right' are equal:
    - return current index
- return -1

fn: calcSum(nums)
- use reduce to calculate sum of 'nums'
  - accumulator = 'sum', init to 0
- return result

*/

// function findEvenIndex(nums) {
//   for (let idx = 0; idx < nums.length; idx++) {
//     const left = nums.slice(0, idx);
//     const right = nums.slice(idx + 1);

//     if (calcSum(left) === calcSum(right)) {
//       return idx;
//     }
//   }

//   return -1;
// }

// function calcSum(nums) {
//   return nums.reduce((sum, curr) => sum + curr, 0);
// }


// console.log(findEvenIndex([1,2,3,4,3,2,1])); // 3
// console.log(findEvenIndex([1,100,50,-51,1,1])); // 1
// console.log(findEvenIndex([1,2,3,4,5,6])); // -1
// console.log(findEvenIndex([20,10,30,10,10,15,35])); // 3

/* 
input: array(nums)
output: number

Qs:
- empty array?

Algorithm:
- create variable 'charMap', init to empty object
- iterate over 'nums':
  - IF current element exists as key in 'charMap':
    - increment value of key by 1
  - ELSE:
    -   add element as key in 'charMap', and set value to 1
- create array of keys of 'charMap'
- use find method on keys:
  - return key whose value in 'charMap' is odd (remainder when divided by 2 is not equal to 0)

*/

// function findOdd(nums) {
//   const charMap = {};

//   for (let num of nums) {
//     charMap[num] = (charMap[num] || 0) + 1;
//   }

//   return Object.keys(charMap).find(key => {
//     return charMap[key] % 2 !== 0;
//   });
// }

/* 
Algorithm 2:
fn: findOdd(nums)
- get unique array from 'nums' called 'uniqueNums'
- use find method on 'uniqueNums':
  - return element whose character count within 'nums' is odd

fn: getUnique(arr)
- convert 'arr' to a set
- convert set back to an array and return

fn: getCharCount(arr, el)
- filter for elements in 'arr' equal to 'el'
- return length of filtered array

*/

// function findOdd(nums) {
//   const seen = [];

//   for (let num of nums) {
//     if (!seen.includes(num) && getCharCount(nums, num) % 2 !== 0) {
//       return num;
//     }

//     seen.push(num);
//   }
// }

// function getCharCount(arr, el) {
//   return arr.filter(element => element === el).length;
// }



// console.log(findOdd([7])); // 7
// console.log(findOdd([0])); // 0
// console.log(findOdd([1, 1, 2])); // 2
// console.log(findOdd([0, 1, 0, 1, 0])); // 0
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // 5
// console.log(findOdd([10])); // 10
// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])); // 10
// console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])); // 1


/* 
input: array(nums)
output: number

Qs:
- empty array?
- non-array input?

Algorithm:
- use find method:
  - return first element for which indexOf equals current index AND lastIndexOf also equals the current index
- return element returned by 'find'

Algorithm 2:
- IF first 2 elements are not equal:
  - IF 3rd element equals the 1st element:
    - return 2nd element
  - ELSE: // 3rd element equals the 2nd element
    - return 1st element
- ELSE: // first 2 elements are equal
  - use find method:
    - return element which is not equal to the first element in 'nums'

*/

// function findUniq(nums) {
//   const [ first, second, third ] = nums;

//   if (first !== second) {
//     return third === first ? second : first;
//   } else {
//     return nums.find(num => num !== first);
//   }
// }

// function findUniq(nums) {
//   return nums.find((num, idx) => nums.indexOf(num) === idx && nums.lastIndexOf(num) === idx);
// }

// function findUniq(nums) {
//   return nums.sort((a, b) => a - b);
// }

// console.log(findUniq([ 1, 1, 1, 0, 1, 1 ])); // === 2
// console.log(findUniq([ 0, 0, 0.55, 0, 0 ])); // === 0.55
// console.log(findUniq([ 1, 0, 0 ])); // 1
// console.log(findUniq([ 0, 1, 0 ])); // 1
// console.log(findUniq([ 0, 0, 1 ])); // 1
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
// console.log(findUniq([ 1, 1, 2, 1, 1 ])); // 2
// console.log(findUniq([ 3, 10, 3, 3, 3 ])); // 10


/* 
input: array(arr1), array(arr2)
output: boolean

Rules:
- IF arr1 or arr2 are null, return false

Qs:
- empty array?

Algorithm:
fn: comp(arr1, arr2)
- IF length of arr1 doesn't equal length of arr2, return false
- use 'every' method on 'arr1':
  - return whether element squared is included within 'arr2'
- return result of 'every'

*/

// function comp(arr1, arr2) {
//   if (arr1 === null || arr2 === null) return false;
//   if (arr1.length !== arr2.length) return false;
  
//   const arr1Sorted = arr1.sort((a, b) => a - b);
//   const arr2Sorted = arr2.sort((a, b) => a - b);

//   return arr1Sorted.every((num, idx) => arr2[idx] === num ** 2);
// }


// const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

// console.log(comp(a1, a2)); // true

// const a = [121, 144, 19, 161, 19, 144, 19, 11]  
// const b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

// console.log(comp(a, b));



/* 
Algorithm 2:
- IF either array is null, return false
- IF length of arrays aren't equal, return false
- create copy of 'arr2' called 'arr2Copy'
- iterate over 'arr1':
  - get 'foundIdx' of current element in 'arr1' squared within 'arr2'
  - IF 'foundIdx' equals -1:
    - return false
  - ELSE:
    - splice 1 element at 'foundIdx'
- return true

*/

// function comp(arr1, arr2) {
//   if (arr1 === null || arr2 === null) return false;
//   if (arr1.length !== arr2.length) return false;

//   const arr2Copy = [...arr2];

//   for (let num of arr1) {
//     const foundIdx = arr2Copy.indexOf(num ** 2);
//     // console.log(foundIdx);
    
//     if (foundIdx === -1) return false;
    
//     arr2Copy.splice(foundIdx, 1);
//   }

//   return true;
// }

// const a1 = [1, 3, 7, 8, 4, 10, 2, 7, 8, 8, 3, 6, 0, 10, 6, 4, 7, 3, 6];
// const a2 = [64, 9, 49, 49, 16, 100, 64, 4, 37, 9, 64, 9, 0, 36, 100, 1, 49, 36, 16];

// console.log(comp(a1, a2));


/* 
input: array(nums), number(targetSum)
output: array OR undefined

Rules:
- numbers can be negative or duplicate
- efficiency matters
- return pair for which the LAST element within pair appears first (ENTIRE pair appears in array first)
- IF no pair, return undefined

Qs:
- empty array?
- non-array input?

Algorithm:
fn: sumPairs(nums, targetSum)
- create loop (counter = 'idx') from 0 to array length - 1 EXCLUSIVE, inc by 1:
  - IF el at 'idx' + el at ('idx' + 1) equals targetSum, return both as array
  - IF el at 'idx' + el at ('idx' + 2) equals targetSum, return both as array
- create outer loop (counter = distance) from 3 to (nums length - 1) inclusive:
  - create inner loop (counter = innerIdx) from 0 to (nums length - 1 minus 'distance') inclusive:
    - IF el at 'innerIdx' + el at 'innerIdx' + 'distance' equals targetSum, return both as array
- return undefined

*/

// function sumPairs(nums, targetSum) {
//   for (let idx = 0; idx < nums.length - 1; idx++) {
//     if (nums[idx] + nums[idx + 1] === targetSum) return [nums[idx], nums[idx + 1]];
//     if (nums[idx] + nums[idx + 2] === targetSum) return [nums[idx], nums[idx + 2]];
//   }

//   for (let distance = 3; distance <= nums.length - 1; distance++) {
//     for (let innerIdx = 0; innerIdx <= nums.length - 1 - distance; innerIdx++) {
//       const first = nums[innerIdx];
//       const second = nums[innerIdx + distance];

//       if (first + second === targetSum) {
//         return [first, second];
//       }
//     }
//   }

//   return undefined;
// }


/* 
Algorithm 2:
fn: sumPairs(nums, targetSum)
- create empty 'result' array
- create outer loop (counter = 'firstIdx') from 0 to (nums length - 1) exclusive, inc by 1  
  - create inner loop (counter = 'secondIdx') from ('firstIdx' + 1) to 'nums' length exclusive, inc by 1
    - create variable 'first', init to el at 'firstIdx'
    - create variable 'second', init to el at 'secondIdx'
    - IF 'first' + 'second' equals targetSum:
      - IF 'result' is empty, push 'first' and 'second' to 'result'
      - ELSE:
        - IF 'secondIdx' is less than 'result'[1]:
          - replace two elements in 'result' with 'first' and 'second'
        - ELSE IF 'secondIdx' is equal to 'result'[1]:
          - IF 'firstIdx' is less than 'result'[0], replace two elements in 'result' with 'first' and 'second'

*/

// function sumPairs(ints, targetSum) {
//   const seen = [];

//   for (let idx = 0; idx < ints.length; idx++) {
//     if (seen.includes(targetSum - ints[idx])) {
//       return [targetSum - ints[idx], ints[idx]];
//     }
//     seen.push(ints[idx]);
//   }
// }

// console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([4, 3, 2, 3, 4], 6)); // [4, 2]
// console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); // [1, 7]
// console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); // [0, -6]
// console.log(sumPairs([20, -13, 40], -7)); // undefined
// console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
// console.log(sumPairs([10, 5, 2, 3, 5, 7], 10)); // [3, 7]
// console.log(sumPairs([4, -2, 3, 3, 4], 8)); // [4, 4]
// console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
// console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]
// console.log(sumPairs([5, 1, 2, 8, 4, 3], 7)); // []


/* 
input: string(str)
output: string

Rules:
- in each word, all even-indexed characters should be UPPERCASE, all odd should be lowercase

Qs:
- empty string?
- non-string input?
- extra spaces?

Algorithm:
- convert 'str' to an array of words  //  ['Weird', 'string', 'case']
- map over words:
  - convert each word to an array of characters:   // ['W', 'e', 'i', 'r', 'd']
    - map over 'characters:
      - IF current index is even (remainder when divided by 2 equals 0):
        - return current character converted to uppercase
      - ELSE:
        - return current character converted to lowercase
  - join mapped characters back into a string and return  ['WeIrD', 'StRiNg', 'CaSe']
- join mapped words back into string by space
- return joined string

*/

// function toWeirdCase(str) {
//   const words = str.split(' ');
  
//   return words.map(word => {
//     const chars = [...word];
//     const weirdChars = chars.map((char, idx) => {
//       return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
//     });

//     return weirdChars.join('');
//   }).join(' ');
// }

// console.log(toWeirdCase("String" )); // "StRiNg"
// console.log(toWeirdCase("Weird string case" )); // "WeIrD StRiNg CaSe"
// console.log(toWeirdCase("This")); // "ThIs"
// console.log(toWeirdCase("is")); // "Is"
// console.log(toWeirdCase('This is a test')); // 'ThIs Is A TeSt'


// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:


/* 
input: array(nums)
output: array

Rules:
- only count UNIQUE values

Qs:
- empty array?
- non-array input?

Algorithm:
fn: smallerNumbersThanCurrent(nums)
- get unique array from 'nums' called 'uniqueNums'
- map over 'nums':
  - create variable 'count', init to 0
  - iterate over 'uniqueNums':
    - IF current el in 'uniqueNums' is less than 'num':
      - increment 'count' by 1
  - return 'count'
- return mapped 'nums'

fn: getUnique(arr)
- use reduce method on 'arr':
  - accum = 'seen', init to empty array
  - IF current element does not exist in 'seen':
    - append element to 'seen'
  - return 'seen'
- return result of reduce method

*/

// function smallerNumbersThanCurrent(nums) {
//   const uniqueNums = getUnique(nums);

//   return nums.map(num => {
//     return uniqueNums.reduce((count, curr) => {
//       return curr < num ? count + 1 : count;
//     }, 0)
//   });
// }

// function getUnique(arr) {
//   return arr.reduce((seen, currEl) => {
//     if (!seen.includes(currEl)) {
//       seen.push(currEl);
//     }

//     return seen;
//   }, []);
// }

// function getUnique(arr) {
//   return [...new Set(arr)];
// }


// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]


// function smallerNumbersThanCurrent(nums) {
  //   return nums.map(num => {
  //     const seen = [];
  
  //     return nums.reduce((count, curr) => {
  //       if (curr < num && !seen.includes(curr)) {
  //         count += 1;
  //         seen.push(curr);
  //       }
  
  //       return count;
  //     }, 0)
  //   });
  // }


  // Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.


/* 
input: array(nums)
output: number OR null

Rules:
- IF 'nums' length less than 5, return null
- can contain negative numbers

Qs:
- non-array input?

Algorithm:
fn: minimumSum(nums)
- IF 'nums' length less than 5, return null
- create constant variable 'NUM_CONSEC', init to 5 // to avoid "magic" number
- create variable 'minSum', init to Infinity
- create loop (counter = 'idx') from 0 to ('nums' length minus 'NUM_CONSEC') inclusive, increment by 1:
  - get slice of 'nums' from 'idx' to ('idx' + 'NUM_CONSEC')
  - get sum of slice using fn: calcSum
  - IF 'sum' is less than 'minSum':
    - reassign 'minSum' to value of 'sum'
- return 'minSum'

fn: calcSum(nums)
- use reduce to get sum of 'nums':
  - accumulator = 'sum', init to 0
- return result of 'reduce' method

*/

// function minimumSum(nums) {
//   if (nums.length < 5) return null;

//   const NUM_CONSEC = 5;

//   let minSum = calcSum(nums.slice(0, NUM_CONSEC));

//   for (let idx = 1; idx <= nums.length - NUM_CONSEC; idx++) {
//     const slice = nums.slice(idx, idx + NUM_CONSEC);
//     const sum = calcSum(slice);
    
//     if (sum < minSum) {
//       minSum = sum;
//     }
//   }

//   return minSum;
// }

// function calcSum(nums) {
//   return nums.reduce((sum, curr) => sum + curr, 0);
// }


// // console.log(minimumSum([1, 2, 3, 4, 5, -5]));
// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);


// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.


/* 
input: string(str)
output: string

Algorithm:
- convert 'str' to an array of words
- map over words:
  - IF current index is even, return word as is
  - ELSE:
    - convert word to array of characters:
    - map over 'chars':
      - IF current index plus 1 is evenly divisible by 4 (remainder 0):
        - return current char converted to uppercase
      - ELSE return char as is
    - join mapped 'chars' into string and return
- join mapped words into string with space, and return

*/

// function toWeirdCase(str) {
//   const words = str.split(' ');
  
//   return words.map((word, wordIdx) => {
//     if (wordIdx % 2 === 0) {
//       return word;
//     } else {
//       const chars = word.split('');
//       const mappedChars = chars.map((char, idx) => {
//         if ((idx + 1) % 4 === 0) {
//           return char.toUpperCase();
//         } else {
//           return char;
//         }
//       });

//       return mappedChars.join('');
//     }
//   }).join(' ');
// }

// // console.log(
// //   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world'));

// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//               'Lorem IpsUm is simPly dummy texT of the printing worLd');
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');


// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/* 
input: array(nums)
output: array

Algorithm:
- create variable 'minDifference', init to Infinity
- create empty 'result' array
- create outer loop (counter = 'firstIdx') from 0 to ('nums' length - 1) exclusive, inc by 1
  - create inner loop (counter = 'secondIdx') from ('firstIdx' + 1) to end of 'nums', inc by 1
    - create variable 'difference', init to absolute value of result of subtracting number at 'secondIdx' from number at 'firstIdx',
    - IF 'difference' is less than 'minDifference':
      - reassign 'minDifference' ot value of 'difference'
      - append element at 'firstIdx' and element at 'secondIdx' to 'result'
- return 'result'

*/

// function closestNumbers(nums) {
//   let minDifference = Infinity;
//   const result = [];

//   for (let firstIdx = 0; firstIdx < nums.length - 1; firstIdx++) {
//     for (let secondIdx = firstIdx + 1; secondIdx < nums.length; secondIdx++) {
//       const first = nums[firstIdx];
//       const second = nums[secondIdx];

//       const difference = Math.abs(first - second);
      
//       if (difference < minDifference) {
//         minDifference = difference;
//         [ result[0], result[1] ] = [first, second];
//       }
//     }
//   }

//   return result;
// }

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]


// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.


/* 
input: string(str)
output: string (a single character)

Rules:
- return first character with lowest occurrence

Qs:
- empty string?
- non-string input?
- case does not matter!
- count spaces? YES

Algorithm:
fn: getCharCount(str, char)
- split 'str' on 'char'
- return length of array minus 1

fn: leastCommonChar(str)
- create variable 'minOccurrence', init to Infinity
- create variable 'minChar', init to ''

- convert str to lowercase
- get unique array from 'str'
- iterate over 'unique':
  - get character count of current char within 'str'
  - IF count is less than 'minOccurrence'
    - reassign 'minOccurrence' to value of 'count'
    - reassign 'minChar' to current char
- return 'minChar'

fn: getUnique(str)
- convert 'str' to array of characters
- convert array to a set
- convert back to an array

*/

// function leastCommonChar(str) {
//   let minOccurence = Infinity;
//   let minChar = '';

//   str = str.toLowerCase();
//   const seen = [];
  
//   str.split('').forEach(char => {
//     if (!seen.includes(char)) {
//       const count = getCharCount(str, char);
    
//       if (count < minOccurence) {
//         minOccurence = count;
//         minChar = char;
//       }

//       seen.push(char);
//     }  
//   });

//   return minChar;
// }

// function getCharCount(str, char) {
//   return str.split(char).length - 1;
// }


// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');

/* 
input: array(prices)
output: array

rules:
- return array of only discounted prices

Algorithm:
- create copy of 'prices'
- create empty 'discounted' array
- create loop WHILE 'pricesCopy' has length greater than 0:
  - get index of value of first element in 'pricesCopy' divided by .75
  - add first element to 'discounted'
  - splice both elements out of 'pricesCopy'
- return 'discounted'

*/

// function findDiscounted(prices) {
//   if (!prices.length) return '';
  
//   const pricesArr = prices.split(' ').map(Number);
//   const discounted = [];

//   while (pricesArr.length > 0) {
//     const foundIdx = pricesArr.indexOf(pricesArr[0] / .75);
//     discounted.push(pricesArr[0]);

//     pricesArr.splice(foundIdx, 1);
//     pricesArr.shift();
//   }

//   return discounted.join(' ');
// }

// // console.log(findDiscounted('15 20 60 75 80 100')); // [15, 60, 75]
// console.log(findDiscounted('')); // [15, 60, 75]
// console.log(findDiscounted([9, 9, 12, 12, 12, 15, 16, 20])); // [9, 9, 12, 15]


/* 
input: array(nums)
output: number

Algorithm:
- create variable 'runningTotal', init to 0
- create empty array 'arr', init to array with sum

- create loop from 0 to 'nums' length - 1, exclusive, inc by 1
  - add first two elements in 'nums'
  - push sum to 'arr'
  - concatenate 'arr' with 

*/

// console.log(doTest([1,2,3])); // 9
// console.log(doTest([1,2,3,4])); // 19
// console.log(doTest([1,2,3,4,5])); // 33

/* 
input: array(nums)
output: number

Algorithm:
- IF first two numbers in 'nums' are odd:
  - return first number in nums that is even using find method (even ==> no remainder when dividing by 2)
- IF first two numbers in 'nums' are even:
  - return first number in nums that is odd using find method (even ==> no remainder when dividing by 2)
- IF first num is odd AND second num is even:
  - IF 3rd num is odd:
    - return 2nd num
  - IF 3rd num is even:
    - return 1st num
- IF first num is even and second num is odd:
  - IF 3rd num is odd:
    - return 1st num
  - IF 3rd num is even:
    - return 2nd num  

*/

// function findOutlier(nums) {
//   const [ first, second, third ] = nums;

//   if (first % 2 === 0 && second % 2 !== 0) {
//     return third % 2 !== 0 ? first : second;
//   }

//   if (first % 2 !== 0 && second % 2 === 0) {
//     return third % 2 !== 0 ? second : first;
//   }

//   if (first % 2 === 0 && second % 2 === 0) {
//     return nums.find(num => num % 2 !== 0);
//   }

//   return nums.find(num => num % 2 === 0);
// }

// function findOutlier(nums) {
//   const evens = nums.filter(num => num % 2 === 0);
  
//   if (evens.length > 1) {
//     return nums.find(num => num % 2 !== 0);
//   }

//   return evens[0];
// }

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160


/* 
input: array(arr1), array(arr2)
output: array

Rules:
- no duplicates in result array

Algorithm:
- concatenate 'arr1' and 'arr2' to a new array 'result'
- remove duplicates:
  - convert 'result' to set, back to array
- return result

Algorithm 2:
fn: union(arr1, arr2)
- create copy of 'arr1' called 'result'
- iterate over 'arr2':
  - IF current element exists in 'result', continue to next iteration
  - ELSE:
    - append current element to 'result'
- return 'result'

*/

// function union(arr1, arr2) {
//   const result = [...arr1];
  
//   for (let el of arr2) {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   }

//   return result;
// }


// // function union(arr1, arr2) {
// //   const result = arr1.concat(arr2);
// //   return [...new Set(result)];
// // }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/* 
input: array(nums)
output: 2d array

Rules:
- If the original array contains an odd number of elements, place the middle element in the first half array.
- IF 'nums' is empty, return 2d array with 2 empty subarrays

Algorithm:
- create empty 'result' array
- create variable 'midPoint': init to Math.ceil of 'nums' length divided by 2
- get slice of 'nums' from 0 to 'midPoint', push to 'result'
- get slice of 'nums' from 'midPoint' to end of 'nums', push to 'result'
- return 'result'

*/

// function halvsies(nums) {
//   const midPoint = Math.ceil(nums.length / 2);
  
//   return [nums.slice(0, midPoint), nums.slice(midPoint)];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

/* 
input: array(nums)
output: number

Algorithm:
- use find method on 'nums':
  - return 'num' whose indexOf within 'nums' is not equal to its lastIndexOf
- return result of 'find'


Algorithm 2:
- create empty 'seen' array
- iterate through 'nums':
  - IF current element exists in 'seen':
    - return current element
  - add current element to 'seen'


*/

// function findDup(nums) {
//   const seen = [];

//   for (let idx = 0; idx < nums.length; idx++) {
//     const num = nums[idx];

//     if (seen.includes(num)) {
//       return num;
//     }

//     seen.push(num);
//   }

//   return undefined;
// }

// function findDup(nums) {
//   return nums.find(num => nums.indexOf(num) !== nums.lastIndexOf(num));
// }


// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73


/* 
input: array(arr1), array(arr2)
output: array

Algorithm:
- create empty 'result' array
- create loop from 0 to 'arr1' length (exclusive), inc by 1
  - add element at current 'idx' in 'arr1' and element at current 'idx' in 'arr2' to 'result'
- return 'result'

Algorithm: forEach
- create empty 'result' array
- use 'forEach' method on 'arr1':
  - push current element and element at current index in 'arr2' to result
- return result

Algorithm: map
- map over 'arr1':
  - return an array containing current el and element at current index in 'arr2'
- flatten mapped array and return

*/

// function interleave(arr1, arr2) {
//   return arr1.map((el, idx) => {
//     return [el, arr2[idx]];
//   }).flat();
// }

// function interleave(arr1, arr2) {
//   let result = [];

//   arr1.forEach((el, idx) => {
//    result = result.concat(el, arr2[idx]);
//   });

//   return result;
// }

// function interleave(arr1, arr2) {
//   const result = [];

//   for (let idx = 0; idx < arr1.length; idx++) {
//     result.push(arr1[idx], arr2[idx]);
//   }

//   return result;
// }


// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


/* 
input: array(nums)
output: string

Algorithm:
- use reduce to get product of array
- divide result of reduce by array length
- use toFixed method to convert number to a string, to 3 decimal places
- return result

*/

// function multiplicativeAverage(nums) {
//   const product = nums.reduce((total, curr) => total * curr, 1);
//   return (product / nums.length).toFixed(3);
// }


// console.log(multiplicativeAverage([3, 5]));                   // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

/* 
input: array(arr1), array(arr2)
output: array

Algorithm:
fn: multiplyList(arr1, arr2)
- map over 'arr1':
  - multiply current element and element at current index in 'arr2'
  - return result
- return mapped array

*/

// function multiplyList(arr1, arr2) {
//   return arr1.map((el, idx) => {
//     return el * arr2[idx];
//   });
// }


// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77])


/* 
input: number(num)
output: array

Algorithm:
- convert 'num' to a string
- convert string to an array of characters
- map characters to numbers
- return mapped array

*/

// function digitList(num) {
//   return [...String(num)].map(Number);
// }


// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

/* 
input: array(arr)
output: none - console log

Rules:
- case SENSITIVE

Algorithm:
fn: countOccurrences(arr)
- create empty object 'occurrences'
- iterate over 'arr':
  - IF current element exists as a key in 'occurrences':
    - increment value of key by 1
  - ELSE:
    - add element as key in 'occurrences', and init value to 1
- use for...in loop to iterate over 'occurrences'
  - log a template string `${key} => ${value}`

*/

// function countOccurrences(arr) {
//   const occurrences = {};

//   for (let el of arr) {
//     occurrences[el] = (occurrences[el] || 0) + 1;
//   }

//   for (let [ key, value] of Object.entries(occurrences)) {
//     console.log(`${key} => ${value}`);
//   }

//   // for (let key in occurrences) {
//   //   const value = occurrences[key];
//   //   console.log(`${key} => ${value}`);
//   // }
// }



// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

// console.log(countOccurrences(vehicles));

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2


/* 
input: array(nums)
output: number (integer)

Rules:
- return just integer component of number

Algorithm:
- use reduce to calculate sum of 'nums'
- divide result by 'nums' length
- return just integer part of result

*/

// function average(nums) {
//   const avg = nums.reduce((sum, curr) => sum + curr, 0) / nums.length;
//   return Math.trunc(avg);
// }


// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40

/* 
input: string(str)
output: boolean

Rules:
- case matters
- all characters matter

Qs:
- empty string?
- single character?
- do spaces matter?

Algorithm:
- convert 'str' to an array of characters
- reverse array of characters
- join back together to a string
- compare 'reversedStr' with original 'str'
- return boolean based on whether equal to original 'str' or not

*/

// function isPalindrome(str) {
//   const reversedStr = [...str].reverse().join('');
  
//   return reversedStr === str;
// }


// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true


/* 
input: string(str)
output: boolean

Rules:
- case does NOT matter
- ignore all non-alphanumeric characters

Algorithm:
fn: isRealPalindrome(str)
- convert 'str' to lowercase
- convert 'str' to array of chars
- filter out any non-alphanumeric characters
- join back to a string
- return boolean based on whether sanitized string is a palindrome, using fn:isPalindrome

fn: isAlphaNumeric(char)
- check whether char is between 'a' and 'z' inclusive
- OR between '0' and '9' inclusive

*/

// function isRealPalindrome(str) {
//   str = str.toLowerCase();
//   str = [...str].filter(isAlphaNumeric).join('');

//   return isPalindrome(str);
// }

// function isAlphaNumeric(char) {
//   char = char.toLowerCase();
  
//   const isNum = char >= '0' && char <= '9';
//   const isAlpha = char >= 'a' && char <= 'z';

//   return isNum || isAlpha;
// }

// function isPalindrome(str) {
//   const reversedStr = [...str].reverse().join('');
  
//   return reversedStr === str;
// }


// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false


/* 
input: number(num)
output: boolean

Algorithm:
- convert number to a string
- use fn:isPalindrome to check whether string is a palindrome
- return result

*/

// function isPalindromicNumber(num) {
//   const numStr = num.toString(10);
//   console.log(numStr);
//   return isPalindrome(numStr);
// }

// function isPalindrome(str) {
//   const reversedStr = [...str].reverse().join('');
  
//   return reversedStr === str;
// }


// console.log(isPalindromicNumber(034543));        // true
// // console.log(isPalindromicNumber(123210));       // false
// // console.log(isPalindromicNumber(22));           // true
// // console.log(isPalindromicNumber(5));            // true


// function isPalindromicNumber(number) {
//   return String(number) === String(number).split("").reverse().join("");
// }

// //Further exploration

// function isPalindrome(num, length) {
//   num = String(num);

//   if (length !== num.length) {
//     let diff = length - num.length;

//     for (let i = (num.length - 1); i >= diff; i--) {
//       if (num[i] === "0") {
//         num = num.slice(0, i);
//       } else {
//         break;
//       }
//     }
//   }

//   console.log(num);
//   return isPalindromicNumber(num);
// }

// // console.log(isPalindrome(000292000, 9));  // true
// console.log(isPalindrome(003300, 5)); // false
// console.log(isPalindrome(0, 1)); //true


/* 
input: array(nums)
output: array

Algorithm:
- map over 'nums':
  - get slice of 'nums' from 0 up to and including current index
  - get sum of slice
  - return sum
- return mapped 'nums'

*/

// function runningTotal(nums) {
//   return nums.map((num, idx) => {
//    return nums.slice(0, idx + 1).reduce((accum, curr) => accum + curr, 0);
//   });
// }


// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// // console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// // console.log(runningTotal([3]));                    // [3]
// // console.log(runningTotal([]));                     // []


/* 
input: string(str)
output: object

Rules:
- words consist of any sequence of non-space characters
- IF str is empty, return empty object

Qs:
- string consisting of just spaces

Algorithm:
- IF 'str' length when trimmed is 0, return {}
- create variable 'result', init to an empty object
- convert 'str' to array of words  //   ['Four', 'score', 'and', 'seven.']
- map over 'words':
  - convert current word to array of characters
  - filter out any non-letter characters
  - join array back together into string
  - return joined string
- iterate through 'words':
  - get length of current word
  - IF length exists as a key within 'result':
    - increment value of key by 1
  - ELSE:
    - create a key from current word length in 'result' and init value to 1
- return 'result'

*/


// function wordSizes(str) {
//   if (str.trim().length === 0) return {};

//   const result = {};
  
//   const words = str.split(' ').map(word => {
//     return [...word].filter(char => {
//       char = char.toLowerCase();
//       return char >= 'a' && char <= 'z';
//     }).join('');
//   });
  
//   words.forEach(word => {
//     const length = word.length;
    
//     if (length) {
//       result[length] = (result[length] || 0) + 1;
//     }
//   });

//   return result;
// }

// console.log(wordSizes('Four score and seven. ?'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes(''));                                            // {}


/* 
input: string(str)
output: string

Algorithm:
- convert 'str' to an array of words, on space
- map over words:
  - IF word length equals 1, return word as is
  - IF word length equals 2:
    - return word[1] + word[0]
  - otherwise:
    - return word[word length - 1] + slice of word from 2nd character to 2nd to last character + word[0]
- join mapped words back into string using space
- return joined string

*/

// function swap(str) {
//   return str.split(' ').map(word => {
//     // if (word.length === 1) return word;
//     // if (word.length === 2) {
//     //   return word[1] + word[0];
//     // }

//     // return word[word.length - 1] + word.slice(1, -1) + word[0];

//     switch (word.length) {
//       case 1:
//         return word;
//       case 2:
//         return word[1].concat(word[0]);
//       default:
//         return word.at(-1) + word.slice(1, -1) + word[0];
//     }
//   }).join(' ');
// }


// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"


/* 
input: none
output: console log

Algorithm:
fn: getRandom(min, max)
- get a random number using Math.random()
- multiply random num by (max minus min + 1)
- floor the result
- add min
- return result

- log template string to console:
  - Teddy is ${getRandom} years old

*/

// console.log(`Teddy is ${getRandom(20, 120)} years old!`);

// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// Teddy is 69 years old!


/* 
input: string(str)
output: string

Rules:
- IF input string is empty, return empty string

Algorithm:
- convert 'str' to array of characters
- map over array:
  - return current character repeated twice
- join array back to a string
- return string

*/

// function repeater(str) {
//   if (!str.length) return '';
  
//   return [...str].map(char => {
//     // return char.repeat(2);
//     return char + char;
//   }).join('');
// }


// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(' ') === '  ');             // ""


/* 
input: number(num)
output: number

Algorithm:
- convert 'num' to a string
- convert string to an array of characters
- add up array using reduce, make sure to coerce each element value to a number before summing
- return result of reduce

*/

// function sum(num) {
//   return [...String(num)].reduce((total, curr) => total + +curr, 0);
// }


// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45


/* 
input: array(nums)
output: array

Algorithm:
- create constant NUM_WORDS, init to an array with strings which correspond to each array index  i.e. ['zero', 'one'] etc
- create copy of 'nums'
- sort 'numsCopy':
  - alphabetical ascending sort
  - use current element as index position within 'NUM_WORDS' to access the English word equivalent and compare alphabetically
- return sorted array

*/

// function alphabeticNumberSort(nums) {
//   const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

//   const numsCopy = [...nums];

//   return numsCopy.sort((a, b) => {
//     if (NUM_WORDS[a] < NUM_WORDS[b]) {
//       return -1;
//     } else if (NUM_WORDS[b] < NUM_WORDS[a]) {
//       return 1;
//     }

//     return 0;
//   });
// }


// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


/* 
input: array(nums1), array(nums2)
output: array

Rules:
- sort result array in ascending numerical order

Algorithm:
- create empty 'result' array
- iterate over 'nums1':
  - iterate over 'nums2':
    - multiply current element in 'nums1' and current element in 'nums2'
    - append product to 'result'
- sort result numerically ascending and return

*/

// function multiplyAllPairs(nums1, nums2) {
//   const result = [];

//   nums1.forEach(num1 => {
//     nums2.forEach(num2 => {
//       const product = num1 * num2;
      
//       result.push(product);
//     });
//   });

//   return result.sort((a, b) => a - b);
// }


// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]


/* 
input: string(str)
output: array

Algorithm:
- create empty 'substrings' array
- create loop (counter = 'idx') from 1 to 'str' length inclusive, increment by 1
  - get slice of 'str' from 0 to 'idx'
  - append slice to 'substrings'
- return 'substrings' 

Algorithm: map
fn: leadingSubstrings(str)
- convert 'str' to an array of characters
- map over 'chars':
  - get slice of 'str' from 0 to (current index + 1)
  - return slice
- return mapped 'chars'

*/

// function leadingSubstrings(str) {
//   const substrings = [];

//   for (let idx = 1; idx <= str.length; idx++) {
//     substrings.push(str.slice(0, idx));
//   }

//   return substrings;
// }

// function leadingSubstrings(str) {
//   return [...str].map((char, idx) => {
//     return str.slice(0, idx + 1);
//   });
// }



// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/* 
input: string(str)
output: array

Algorithm:
- create empty 'allSubs' array
- iterate over 'str':
  - get slice of 'str' from current index to end of string
  - get leading substrings for slice (using fn:leadingSubstrings)
  - concatenate 'allSubs' with leading substrings and update 'allSubs'
- return 'allSubs'

*/

// function leadingSubstrings(str) {
//   return [...str].map((char, idx) => {
//     return str.slice(0, idx + 1);
//   });
// }

// function substrings(str) {
//   let allSubs = [];

//   for (let idx = 0; idx < str.length; idx++) {
//     const slice = str.slice(idx);
//     const leadingSubs = leadingSubstrings(slice);
    
//     allSubs.push(leadingSubs);
//   }

//   return allSubs.flat();
// }

function substrings(str) {
  const allSubs = [];

  for (let start = 0; start < str.length; start++) {
    for (let end = start + 1; end <= str.length; end++) {
      allSubs.push(str.slice(start, end));
    }
  }

  return allSubs;
}


// console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]


/* 
input: string(str)
output: array

Rules:
- case SENSITIVE
- all characters matter
- single character is not a palindrome

Algorithm:
fn: palindromes(str)
- get all substrings of 'str' using fn:substrings
- filter out single character strings
- filter for substrings that are palindromes using fn:isPalindrome

fn: isPalindrome(str)
- get reverse of 'str':
  - convert str to array of characters
  - reverse array
  - join back together into string
- compare with str:
  - return boolean based on whether 'str' is equal to reversed string

*/

// function palindromes(str) {
//   const subs = substrings(str);

//   return subs.filter(substring => substring.length > 1 && isPalindrome(substring));
// }

// function isPalindrome(str) {
//   return str === [...str].reverse().join('');
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]
// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


/* 
input: array(nums)
output: number

Algorithm:
fn: sumOfSums(nums)
- map over 'nums':
  - get slice of 'nums' from 0 to current index + 1
  - get sum of slice
  - return sum
- return sum of mapped 'nums'

fn: calcSum(nums)
- use reduce to calculate sum of 'nums':
  - accumulator = 'sum', init to 0
- return result

*/

// function sumOfSums(nums) {
//   const mapped = nums.map((_, idx) => {
//     const slice = nums.slice(0, idx + 1);
//     return calcSum(slice);
//   });

//   return calcSum(mapped);
// }

// function calcSum(nums) {
//   return nums.reduce((sum, curr) => sum + curr, 0);
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


/* 
input: 2d array(list)
output: array

Algorithm:
- map over 'list':
  - destructure and get reference to itemName and amount
  - create an empty array 'items'
  - create a loop from 1 to 'amount' inclusive, inc by 1
    - append 'itemName' to 'items'   
  - return 'items'  // [['apple', 'apple', 'apple']]
- flatten mapped array and return

*/

// function buyFruit(list) {
//   let items = [];

//   list.forEach(([ item, amount ]) => {
//     const fruitArr = Array(amount).fill(item);
    
//     items = items.concat(fruitArr);
//   })

//   return items;
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


/* 
input: number(itemId), array(transactions)
output: array (of objects)

Algorithm:
- filter 'transactions' for objects whose id is equal to 'itemId'
- return filtered transactions

*/

// function transactionsFor(itemId, transactions) {
//   return transactions.filter(transaction => transaction.id === itemId);
// }


// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]


/* 
input: number(itemId), array(transactions)
output: boolean

Algorithm:
- filter transactions for 'itemId' using fn: transactionsFor
- use reduce method:
  - accumulator = totalQty, init to 0
  - IF 'movement' equals 'in':
    - add 'quantity' to 'totalQty'
  - ELSE:
    - subtract quantity from 'totalQty'
  - return 'totalQty'
- check whether result of reduce is greater than 0 and return boolean

*/

// function isItemAvailable(itemId, transactions) {
//   const itemTransactions = transactionsFor(itemId, transactions);

//   const qtyAvailable = itemTransactions.reduce((totalQty, curr) => {
//     return curr.movement === 'in' ? totalQty + curr.quantity : totalQty - curr.quantity;
//   }, 0);

//   return qtyAvailable > 0;
// }


// function transactionsFor(itemId, transactions) {
//   return transactions.filter(transaction => transaction.id === itemId);
// }

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(isItemAvailable(101, transactions));     // false
// console.log(isItemAvailable(103, transactions));     // false
// console.log(isItemAvailable(105, transactions));     // true


/* 
input: array(arr)
output: array

Rules:
- non-array input ==> undefined
- empty array ==> []
- array with 1 element ==> return an array with just one element
- DON'T modify input array

Algorithm:
- IF input is not array: return undefined
- IF 'arr' is empty: return []
- IF 'arr' length equals 1: return an array with that element

- return slice of 'arr' from 1 to end, concatenated with first element of array

*/

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if (!arr.length) return [];
//   if (arr.length === 1) return [...arr];

//   return arr.slice(1).concat(arr[0]);
// }


// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]


/* 
input: number(num), number(count)
output: number

Algorithm:
- IF 'count' equals 1: return 'num'
- convert 'num' to string 'numStr'
- create variable 'left', init to slice of 'numStr' from 0 to negative(count)
- create variable 'right, init to slice of 'numStr' from negative count to end
- create slice of 'right' from 1 to end, and concatenate with first character in 'right', save to variable 'rotated'
- concatenate 'left' and 'rotated' back together
- convert to number and return

*/

// function rotateRightmostDigits(num, count) {
//   if (count === 1) return num;

//   const numStr = String(num);
  
//   const left = numStr.slice(0, -count);
//   const right = numStr.slice(-count);

//   const rotated = right.slice(1) + right[0];
  
//   return Number(left + rotated);
// }


// console.log(rotateRightmostDigits(735291, 1)); // 735291
// console.log(rotateRightmostDigits(735291, 2)); // 735219
// console.log(rotateRightmostDigits(735291, 3)); // 735912
// console.log(rotateRightmostDigits(735291, 4)); // 732915
// console.log(rotateRightmostDigits(735291, 5)); // 752913
// console.log(rotateRightmostDigits(735291, 6)); // 352917

/* 
input: number(num)
output: number

Algorithm:
- convert 'num' to string and get length
- create loop (counter = 'count') from 'length' down to 2 inclusive, decrement by 1
  - reassign 'num' to value of calling fn: rotateRighmostDigits and passing in current value of 'num' and 'count'
- return 'num'

*/

// function maxRotation(num) {
//   const length = String(num).length;

//   for (let count = length; count >= 2; count--) {
//     num = rotateRightmostDigits(num, count);
//   }

//   return num;
// }


// function rotateRightmostDigits(num, count) {
//   if (count === 1) return num;

//   const numStr = String(num);
  
//   const left = numStr.slice(0, -count);
//   const right = numStr.slice(-count);

//   const rotated = right.slice(1) + right[0];
  
//   return Number(left + rotated);
// }

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845


/* 
input: string(str)
output: string

Qs:
- does case matter? NO

Algorithm:
- create constant NUM_WORDS, init to array with elements corresponding to their indices i.e. ['zero', 'one']
- convert 'str' to array of words:
- map over 'words':
  - IF current word ends in '.' or ',':
    - get 'punctuation' by slicing word at -1
    - get slice of 'word' from 0 to -1
    - IF slice (lowercased) exists within NUM_WORDS:
      - return index within NUM_WORDS as a string and concat with 'punctuation'
  - IF word (lowercased) exists within NUM_WORDS:
    - return index as a string
  - ELSE:
    - return word as is
- join words back together with space, and return

*/

// function wordToDigit(str) {
//   const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

//   return str.split(' ').map(word => {
//     if (word.endsWith('.') || word.endsWith(',')) {
//       const punctuation = word.slice(-1);
//       const slice = word.slice(0, -1);

//       const idx = NUM_WORDS.indexOf(slice.toLowerCase());
      
//       if (idx !== -1) {
//         return String(idx) + punctuation;
//       }
//     }

//     const idx = NUM_WORDS.indexOf(word.toLowerCase());
    
//     if (idx !== -1) {
//       return String(idx);
//     }

//     return word;
//   }).join(' ');
// }


// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."


/* 
input: number(num)
output: number

rules:
- Issue an error message if there is no next featured number.
- largest possible featured number is 9876543201

Algorithm:


fn: isOdd(num)
- return whether 'num' is not equal to 0 when divided by 2

fn: isDivisibleBy7(num)
- return whether 'num' is evenly divisible by 7

fn: allUniqueDigits(num)
- create variable 'seen', init to empty array
- convert 'num' to a string
- iterate through 'numStr':
  - IF current number does not exist within 'seen':
    - add current number to 'seen'
  - ELSE: return false
- return true

fn: isFeatured(num)
- return whether 'num' is odd, divisible by 7, AND has all unique digits

fn: featured(num)
- create constant MAX, init to  
- IF 'num' is greater than or equal to MAX, issue error message
- create variable 'count', init to 'num' + 1
- create loop:
  - IF 'count' is featured, return count
  - ELSE:
    - increment count by 1

*/

// function featured(num) {
//   const MAX = 9876543201;
//   if (num >= MAX) {
//     return console.log('There is no possible number that fulfills those requirements.')
//   }

//   let count = num + 1;

//   while (true) {
//     if (isFeatured(count)) {
//       return count;
//     }

//     count += 1;
//   }

//   return undefined;
// }

// function allUniqueDigits(num) {
//   const seen = [];

//   const numStr = String(num);

//   for (let idx = 0; idx < numStr.length; idx++) {
//     const char = numStr[idx];

//     if (!seen.includes(char)) {
//       seen.push(char);
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// function isOdd(num) {
//   return num % 2 !== 0;
// }

// function isDivisibleBy7(num) {
//   return num % 7 === 0;
// }

// function isFeatured(num) {
//   return isOdd(num) && isDivisibleBy7(num) && allUniqueDigits(num);
// }




// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


// "write a function that removes every other element from an array."

/* 
input: array(arr)
output: array (same array)

Rules:
- you should mutate the input array

Algorithm:
- filter 'arr' for elements whose index is even (remainder 0 when dividing by 2)
- update arr to filtered arr and return

*/

// function removeEveryOther(arr) {
  
// }

// const arr1 = [1, 2, 3, 4, 5, 6, 7];

// console.log(removeEveryOther(arr1));
// console.log(arr1);

// function fibonacci(num) {
//   if (num <= 2) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// function generateFibonaccisTo(num) {
//   const fibs = [];

//  let count = 1;

//  while (true) {
//   const fib = fibonacci(count);

//   if (fib > num) break;

//   fibs.push(fib);
//   count += 1;
//  }

//  return fibs;
// }


// function filterFibs(arr) {
//   const fibs = generateFibonaccisTo(arr.length - 1);
//   console.log(fibs);

//   return arr.filter((_, idx) => {
//     return fibs.includes(idx);
//   });
// }

// console.log(filterFibs([1, 2, 3, 4, 5, 6, 'a', 'gh', 'x', true, false, true, true, 3289, 233, 11]));

/* 
input: number(length), number(min), number(max)
output: string

Rules:
- IF max < min OR length equals 0 ==> return empty string

Algorithm:
- create 'result' string
- create variable 'isAscending', init to true
- create variable 'count', init to 'min'
- create loop WHILE 'result' is less than 'length' length
  - 

*/

// console.log(ascendDescend(5, 1, 3)); // '12321'
// console.log(ascendDescend(14, 0, 2)); // '01210121012101'
// console.log(ascendDescend(11, 5, 9)); // '56789876567'


/* 
input: object(obj)
output: object

Rules:
- return a new object

Algorithm:
fn: mirror(obj)
- create empty 'result' object
- get keys of 'obj'
- iterate over 'keys':
  - add 'key' to 'result' as a key
  - get reverse of 'key' and set it as value
- return 'result'

fn: reverse(str)
- return 'str' converted to array of characters, reversed, joined back together

*/

// function mirror(obj) {
//   const result = {};

//   Object.keys(obj).forEach(key => {
//     const reversed = reverse(key);
//     result[key] = reversed;
//   });

//   return result;
// }

// function reverse(str) {
//   return [...str].reverse().join('');
// }

// console.log(mirror({ abc: '', arara: '', xyz: '' }));

/* 
input: string(str)
output: number

Qs:
- does case matter? NO

Algorithm:
- create constant 'VOWELS', init to string 'aeiou'
- convert 'str' to lowercase
- convert 'str' to array of characters
- filter for characters that are included in 'VOWELS'
- get length of filtered array and return

*/

// function countVowels(str) {
//   const VOWELS = 'aeiou';

//   str = str.toLowerCase();

//   return [...str].filter(char => VOWELS.includes(char)).length;
// }


// console.log(countVowels("Celebration")); // ➞ 5
// console.log(countVowels("Palm")); // ➞ 1
// console.log(countVowels("Prediction")); // ➞ 4



/* 

1. Read the problem carefully and understand it. Use the example/test cases to help with understanding.
2. Think about any potential edge cases, ask any questions if necessary, if not shown in example cases
3. Write down any special rules
4. Make sure to include any rules in algorithm
5. Add any necessary guard clauses
6. Make sure to test code as you write!

*/


/* 
input: string(str)
output: number

Rules:
- Return the result as an integer.

Algorithm:
- convert 'str' to array of characters
- use 'find' method on array:
  - get first character that is between '0' and '9'
- convert char to number and return

*/

// function leftDigit(str) {
//   return +[...str].find(char => {
//     return char >= '0' && char <= '9';
//   });
// }


// console.log(leftDigit("TrAdE2W1n95!")); // ➞ 2
// console.log(leftDigit("V3r1ta$")); // ➞ 3
// console.log(leftDigit("U//DertHe1nflu3nC3")); // ➞ 1
// console.log(leftDigit("J@v@5cR1PT")); // ➞ 5