// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

//  Input: user
//  Output: console log

//  Algorithm:
//  - ask user for length
//  - convert to number and save to variable 'length'
//  - ask user for width
//  - convert to number and save to variable 'width'
//  - log a template string, multiply 'length' and 'width' to obtain product (and round to nearest hundredth decimal place)

const rl = require('readline-sync');

const SQ_METER_TO_SQ_FEET = 10.7639;

console.log('Enter your preferred input type: meters (m) or feet (f)');
let inputType = rl.prompt();

while (!['m', 'f', 'meters', 'meter', 'feet'].includes(inputType.toLowerCase())) {
  console.log('Input type must be either "m" for meters or "f" for feet');
  inputType = rl.prompt();
}

inputType = ['f', 'feet'].includes(inputType) ? 'feet' : 'meters';
const secondaryType = inputType === 'meters' ? 'feet' : 'meters';


console.log(`Enter the length of the room in ${inputType}`);
const length = +rl.prompt();

console.log(`Enter the width of the room in ${inputType}`);
const width = +rl.prompt();

const productMain = length * width;

const productSecondary = inputType === 'meters' ? productMain * SQ_METER_TO_SQ_FEET : productMain / SQ_METER_TO_SQ_FEET;

console.log(`The area of the room is ${productMain.toFixed(2)} square ${inputType} (${productSecondary.toFixed(2)} square ${secondaryType}).`);

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).