function stringToSignedInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }

  // if (!Number.isInteger(+str.slice(0, 1))) {
  //   console.log('not a num');
  // }

  let sign = null;
  const firstChar = str.slice(0, 1);

  if (!Number.isInteger(+firstChar)) {
    sign = firstChar;
    str = str.slice(1);
  }

  const strArr = str.split('');
  const mapped = strArr.map(char => DIGITS[char]);

  const int = mapped.reduce((acc, curr) => {
    return (acc * 10) + curr;
  }, 0);

  if (sign !== null) {
    return sign === '-' ? -int : int; 
  }

  return int;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true