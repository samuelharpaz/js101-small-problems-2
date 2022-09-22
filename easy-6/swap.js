//  Input: string
//  Output: string

//  Algorithm:
//  - split string into array of words
//  - use destructuring to label first element in array 'firstName' and 2nd el 'lastName'
//  - return template string with 'lastName' followed by comma, space, then 'firstName'

function swapName(name) {
  const [ firstName, lastName ] = name.split(' ');
  
  return `${lastName}, ${firstName}`;
}

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

//  Algorithm - Further Exploration:
//  - convert 'name' to array of words
//  - return template string with last element in array, comma, space, then join an array sliced from word array, from 0 until -1;

function swapName2(name) {
  const names = name.split(' ');

  return `${names.at(-1)}, ${names.slice(0, -1).join(' ')}`;
}

console.log(swapName('Karl Oskar Henriksson Ocheo Ragvals'));