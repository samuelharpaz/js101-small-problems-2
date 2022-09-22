//  Input: string (in 24 hr format) = 'str'
//  Output: number (integer between 0 and 1439)

//  Rules:
//  - create two functions, 'beforeMidnight' and 'afterMidnight'
//  - return number of minutes before or after midnight, respectively
//  - can't use Date objects

//  Questions:
//  - can assume input within 24 hr? proper format? (edge cases! '00:00' and '24:00')

//  Data Structures
//  - strings, numbers

//  Algorithm:
//  convertToMinutes
// ******************
//  - create constant variable 'MINUTES_PER_HOUR', init to 60
//  - extract 'hours' from 'str' and convert to number
//  - extract 'minutes' from 'str' and convert to number
//  - multiply 'hours' * 'MINUTES_PER_HOUR', add to 'minutes' to get 'totalMinutes'
//  - return 'total'

//  afterMidnight
// ******************
//  - return value of call to convertToMinutes, passing in the input 'str' as argument

//  beforeMidnight
// ******************
//  - create constant variable 'MINUTES_PER_DAY', init to 1440
//  - save value of call to convertToMinutes to new variable 'minutes'
//  - return 'MINUTES_PER_DAY' minus 'minutes'

function convertToMinutes(str) {
  const MINUTES_PER_HOUR = 60;

  const hours = (+str.slice(0, 2)) % 24;
  const minutes = +str.slice(-2);

  return (hours * MINUTES_PER_HOUR) + minutes;
}

function afterMidnight(str) {
  return convertToMinutes(str);
}

function beforeMidnight(str) {
  const MINUTES_PER_DAY = 1440;
  
  const minutes = convertToMinutes(str);

  return minutes > 0 ? MINUTES_PER_DAY - minutes : minutes;
}



console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);