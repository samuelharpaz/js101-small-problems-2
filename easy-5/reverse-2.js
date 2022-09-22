//  Input: string
//  Output: string

//  Algorithm:
//  - split input 'str' into array of words 'strArr'
//  - map 'strArr' to 'mapped':
//    - IF current word is at least 5 letters long:
//      - return reversed word (helper function)
//    - ELSE return current word
//  - join 'mapped' into string of words (with spaces separating)

//  reverse(word)
//  *****************
//  - split word into array of characters
//  - reverse array
//  - join array into string and return

function reverse(word) {
  return [...word].reverse().join('');
}

function reverseWords(str) {
  const strArr = str.split(' ');

  const mapped = strArr.map(el => {
    if (el.length >= 5) {
      return reverse(el);
    }

    return el;
  });

  return mapped.join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));