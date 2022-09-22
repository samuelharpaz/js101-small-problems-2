//  Input: array of numbers
//  Output: number

//  Algorithm:
//  - create variable 'result' and init to 0
//  - create loop from 1 to array length (inclusive)
//    - create slice of array from 0 to 'idx'
//    - use reduce to add up digits of sliced array, and add to current value of 'result'
//  - return 'result'

function sumOfSums(arr) {
  let result = 0;

  for (let idx = 1; idx <= arr.length; idx++) {
    const slice = arr.slice(0, idx);
    result += slice.reduce((acc, curr) => acc + curr, 0);
  }

  return result;
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35