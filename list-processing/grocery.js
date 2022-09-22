//  Input: two-dimensional array
//  Output: array

//  Algorithm:
//  - create empty 'list' array
//  - iterate over input arr
//    - for each inner array:
//    - create 'fruit' and init to first array el
//    - create 'amount' and init to second array el
//    - create for loop, from 1 up to 'amount' inclusive
//      - in each iteration: add 'fruit' to 'list'
//  - return 'list'

function buyFruit(arr) {
  const list = [];

  arr.forEach(([ fruit, amount ]) => {
    for (let idx = 1; idx <= amount; idx++) {
      list.push(fruit);
    }
  });

  return list;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]