//  Input: array (of numbers)
//  Output: array (running total)

//  Rules:
//  - if array is empty, return empty array
//  - result array should have same number of elements as input array

//  Questions:
//  - deal with negative numbers?
//  - deal with non-integers?
//  - presumably, both of these would just deal with them the same way

//  Data structures
//  - arrays

//  Algorithm:
//  - create a 'total' variable, init to 0
//  - map (iterate) over the input array - 'totalsArr'
//    - add value of current element to 'total'
//    - return current value of 'total' as the mapped value for that element
//  - return 'totalsArr'array

function runningTotal(arr) {
  let total = 0;

  return arr.map(el => total += el);

 
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));