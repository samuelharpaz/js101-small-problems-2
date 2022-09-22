//  Input: string (of words)
//  Output: string

//  Algorithm:
//  - split input 'str' into array of words
//  - return 2nd to last word from 'words'

const penultimate = function(str) {
  return str.split(' ').filter(word => word !== '').at(-2);
};

// const penultimate = function(str) {
//   const words = str.split(' ');
//   return words[words.length - 2];
// };

console.log(penultimate("last  word")); // logs true
console.log(penultimate("Launch School is great!")); // logs true