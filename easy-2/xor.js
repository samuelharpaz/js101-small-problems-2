//  Input: two values
//  Output: boolean

//  Algorithm:
//  - return true if:
//    - 'val1' is truthy AND 'val2' is falsy OR
//    - 'val2' is truthy AND 'val1' is falsy

function xor(val1, val2) {
  return (!!val1 && !val2) || (!val1 && !!val2);
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);