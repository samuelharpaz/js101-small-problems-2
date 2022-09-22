//  Input: string
//  Output: string (reverse words)

//  Algorithm:
//  - split input 'str' into array of words
//  - reverse the array
//  - join back together with spaces
//  - return joined string

const reverseSentence = str => {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseSentence('') === '');
console.log(reverseSentence('Hello World'));
console.log(reverseSentence('Reverse these words'));