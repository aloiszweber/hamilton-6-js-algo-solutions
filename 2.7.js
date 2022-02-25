const readlineSync = require("readline-sync");


let n = readlineSync.question("Enter a number for how much numb your sum will calculate: ");
let sum = 0;
let num = 0;

for(i = 0; i < n; i++){
    num = new Number(readlineSync.question("Enter a number to sum: "));
    sum += num;

}

console.log("the sum of the numbers is " + sum)

