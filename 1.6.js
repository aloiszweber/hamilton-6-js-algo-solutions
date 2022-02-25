const readlineSync = require("readline-sync");
let num1 = new Number(readlineSync.question('Give me an integer number '))
let num2 = new Number(readlineSync.question('Give me an another integer number '))
console.log(num1 % num2)