//  Input: array (arr)
//  Output: array (same array mutated!)

//  Algorithm:
//  - create while loop:
//    - create variable 'numSwaps', init to 0;
//    - iterate over array:
//    - compare current element and next element:
//      - IF current el is greater, swap elements
//        - increment 'numSwaps' by 1
//    - IF 'numSwaps' is equal to 0, break out of loop
//  - return 'arr'

// function bubbleSort(arr) {
//   while (true) {
//     let numSwaps = 0;

//     for (let idx = 0; idx < arr.length - 1; idx++) {
//       if (arr[idx] > arr[idx + 1]) {
//         [ arr[idx], arr[idx + 1] ] = [arr[idx + 1], arr[idx]];
//         numSwaps += 1;
//       }
//     }    

//     if (numSwaps === 0) break;
//   }

//   return arr;
// }

function bubbleSort(arr){
  let trip = true;
  while(trip){
    for(let n = 0; n < arr.length; n++) {
      if (n === arr.length -1){
        trip = false;
        break;
      }
      if(arr[n+1]<arr[n]){
        const hold = arr[n];
        arr[n] = arr[n+1];
        arr[n+1] = hold;
        break;
      }
    }
  }
}

let arr = [3, 2, 1];
bubbleSort(arr);
console.log(arr);

// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]


// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]