const readlineSync = require("readline-sync")
let n = parseInt(readlineSync.question('Number '))
let sum = 0
do{
    sum = sum + parseInt(readlineSync.question('enter a number'))
    n = n-1
} while(n>0)
console.log('the sum is ' + sum)