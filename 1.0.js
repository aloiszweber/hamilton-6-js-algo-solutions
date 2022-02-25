const readlineSync = require("readline-sync");

let number = new Number(readlineSync.question('Give me a number who want to add : '));
let addition = new Number(readlineSync.question('Give me a second number who want to add : '));
let sum = number + addition;
console.log(sum);

let multiplication = new Number(readlineSync.question('Give me a number for the multiplication : '));
let multiplicate = sum * multiplication;
console.log(multiplicate);

let divise = new Number(readlineSync.question('Give me a number for the division : '));
let division = multiplicate / divise;
console.log(division);

let soustraction = division - sum;
console.log(soustraction);