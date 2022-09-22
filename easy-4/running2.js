//  Input: array (of numbers)
//  Output: array (of numbers)

//  Rules:
//  implicit:
//  - if input is empty array, return empty array
//  - if input array has only one element, return an array with just that one element

//  Algorithm:
//  - IF input is empty, return empty array
//  - IF input has 1 element, return array with that 1 element
//  - create 'total' variable and init to 0
//  - map over input array:
//    - replace each element with current value of 'total' added to current element
//    - update 'total'
//  - return mapped array

function runningTotal(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [...arr];
  
  let total = 0;

  return arr.map(num => total += num);
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []