const readlineSync = require("readline-sync");
let num1 = new Number(readlineSync.question('Give me a decimal number'));
let num2 = new Number(readlineSync.question('Give me an another decimal number '));
let integer = Math.trunc(num1);
console.log(integer * num2);

