/*
Ask the user to enter three numbers: minAge, maxAge and currentAge. Display if current is between min and max.

Bonus: if minAge is greater than maxAge, display an error message to explain the user he's doesn't understand anything then exit the program.
(It must not ask any other question.)
*/

const readlineSync = require('readline-sync');

let minAge = readlineSync.question('What\'s the minimal age ? : ');
let maxAge = readlineSync.question('What\'s the maximum age ? : ');
let currentAge = readlineSync.question('What\'s your age ? : ');

console.log('The minAge is : ' + minAge);
console.log('The maxAge is : ' + maxAge);
console.log('Your age is : ' + minAge);

if(minAge >= currentAge || currentAge <= maxAge){
    console.log('Your age is ok!');
} else {
    console.log('You can\'t !');
}

if( minAge <= maxAge){
    console.log('It\'s good ! (Bonus)');
} else {
    console.log('I can\'t understand !(Bonus)');
}

