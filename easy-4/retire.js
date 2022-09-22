// Input: user input, current age and retirement age
// Output: console log

//  questions:
//  - validate data?

//  Algorithm:
//  - import readline sync library
//  - ask user their age, convert to Number and save to variable 'age'
//  - ask user their preferred retirement age, convert to Number and save to variable 'retirementAge'
//  - save current year to variable 'currentYear'
//  - calculate yearsUntilRetirement by subtracting 'age' from 'retirementAge'
//  - calculate retirementYear by adding 'yearsUntilRetirement' to 'currentYear'
//  - log info to console

const rl = require('readline-sync');

const age = +rl.question('What is your age?\n');
const retirementAge = +rl.question('At what age would you like to retire?\n');

const currentYear = new Date().getFullYear();
const yearsUntilRetirement = retirementAge - age;
const retirementYear = currentYear + yearsUntilRetirement;

console.log(`It's ${currentYear}. You will retire in the year ${retirementYear}.`);
console.log(`You have only ${yearsUntilRetirement} years of work to go!`);


