//  Input: array
//  Output: array

//  Rules:
//  - return array should contain 1st, 3rd, 5th etc. elements from input array (indexes 0, 2, 4, etc)

//  Algorithm:
//  - return filtered input array, filter for elements whose index is even (if divide by 2, remainder is 0)

function oddities(arr) {
  return arr.filter((_, idx) => idx % 2 === 0);
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []