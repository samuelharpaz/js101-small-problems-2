//  Input: number (integer)
//  Output: boolean

//  Algorithm:
//  - convert input num to string 'numStr'
//  - return result of calling 'isPalindrome' on 'numStr'

// function isPalindromicNumber(num) {
//   let numStr = String(num);

//   return isPalindrome(numStr);
// }

// function isPalindrome(str) {
//   const reversed = [...str].reverse().join('');
  
//   return str === reversed;
// }

function isPalindromicNumber(num) {
  const nums = [];
  let numCopy = num;

  while (numCopy > 0) {
    const lastDigit = numCopy % 10;
    nums.unshift(lastDigit);

    numCopy = (numCopy - lastDigit) / 10;
  }

  nums.reverse();

  let reversed = 0;

  nums.forEach(num => {
    reversed = (reversed * 10) + num;
  })

  return reversed === num;
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));