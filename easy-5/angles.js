//  Input: number
//  Output: string

//  Rules:
//  - string represents angles in degrees, minutes, and seconds, using appropriate symbols

//  Questions:
//  - negative input?
//  - non-number input?

//  Data Structures
//  numbers, strings

//  Algorithm
//  - create constant variable 'degreeSymbol', init to 
//  - create constant variable 'MINUTES_TO_DEGREES', init to 60
//  - create constant variable 'SECONDS_TO_MINUTES', init to 60
//  - truncate input num and init to a variable 'degrees'
//  - create variable 'decimal' and init to input num minus 'degrees', then multiply by 100
//  - create variable 'minutesFloat', init to 'decimal' * MINUTES_TO_DEGREES / 100  
//  - create variable 'minutes', init to 'minutesFloat' truncated
//  - create variable 'minutesDecimal', init to 'minutesFloat' minus 'minutes', then multiply by 100
//  - create variable 'seconds', init to ('minutesDecimal' * SECONDS_TO_MINUTES / 100 ), rounded to nearest integer
//  - return a string with 'degrees', 'minutes', and 'seconds' correctly formatted

function dms(num) {
  const DEGREE_SYMBOL = '\xB0';
  const MINUTES_TO_DEGREES = 60;
  const SECONDS_TO_MINUTES = 60;

  let degrees = Math.trunc(num);

  const minutesFloat = (num - degrees) * MINUTES_TO_DEGREES;
  const minutes = Math.trunc(minutesFloat);

  const minutesDecimal = minutesFloat - minutes;
  const seconds = Math.floor(minutesDecimal * SECONDS_TO_MINUTES);

  degrees = degrees % 360;

  if (Math.sign(degrees) === -1) {
    degrees = degrees + 360;
  }
  

  return `${degrees}${DEGREE_SYMBOL}${String(minutes).padStart(2, '0')}'${String(seconds).padStart(2, '0')}"`;
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(5));
console.log(dms(385));
console.log(dms(-40));
console.log(dms(-420));
console.log(dms(400));
console.log(dms(-1));


