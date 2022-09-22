//  Input: string of words
//  Output: object

//  Algorithm:
//  - create empty 'result' object
//  - convert 'str' to array of words
//  - create array 'lengths' by mapping words:
//    - replace each word with its length
//  - iterate over 'lengths':
//    - IF current length is already a key in 'result':
//      - increment value of property by 1
//    - ELSE:
//      - create a key within 'result' and init to a value of 1
//  - return 'result'

function wordSizes(str) {
  if (str.trim().length === 0) return {};
  
  const result = {};

  const words = str.split(' ');  
  const lengths = words.map(word => word.length);

  lengths.forEach(length => {    
    result[length] = (result[length] || 0) + 1;
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));