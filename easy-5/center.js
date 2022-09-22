//  Input: string
//  Output: string (1 or 2 characters long)

//  Rules:
//  - return one char if str is odd length, 2 if even
//  Implicit:
//  - if str length <= 2, return str

//  Algorithm:
//  - IF str length <= 2, return str
//  - create variable 'middleIdx' and init to (str length divided by 2) rounded up, then subtract 1
//  - IF str length is odd:
//    - return str at index 'middleIdx'
//  - ELSE return slice of string starting at 'middleIdx' plus one more character

function centerOf(str) {
  const len = str.length;
  
  if (len <= 2) return str;

  const middleIdx = Math.ceil(len / 2) - 1;

  return len % 2 === 1 ? str[middleIdx] : str.slice(middleIdx, middleIdx + 2);
}




console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School')); // " "
console.log(centerOf('Launch')); // 'un'
console.log(centerOf('Launchschool')); // 'hs'
console.log(centerOf('x')); // 'x'

