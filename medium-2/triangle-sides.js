//  Input: 3 numbers (length of triangle sides)
//  Output: string

//  Algorithm:
//  fn triangle(side1, side2, side3)
//  ********************************
//  - IF side1 + side2 is not greater than side3
//      OR side1 plus side3 is not greater than side2
//      OR side2 plus side3 is not greater than side1
//      OR an array of elements side1, side2, and side3 filtered for elements whose length is 0 or less has a length of at least 1:
//    - return the string 'invalid'
//  - IF a set created from side1, side2, and side3 and converted to array has a length of 1
//    - return 'equilateral'
//  - IF a set created from side1, side2, and side3 and converted to array has a length of 2:
//    - return 'isosceles"
//  - IF the setArray has a length of 3:
//    - return 'scalene'

function triangle(side1, side2, side3) {
  const sidesArr = [side1, side2, side3];
  
  if (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1) || sidesArr.filter(el => el <= 0).length >= 1) {
    return 'invalid';
  }

  const setArray = [...new Set(sidesArr)];

  if (setArray.length === 1) {
    return 'equilateral';
  }

  if (setArray.length === 2) {
    return 'isosceles';
  }

  if (setArray.length === 3) {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"