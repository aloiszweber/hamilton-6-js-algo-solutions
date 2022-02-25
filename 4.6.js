const readlineSync = require("readline-sync")
function factorial(a){
    if (a < 0)
        return -1;
    else if (a ==0)
        return 1;
    else{
        return (a * factorial(a - 1));
    }
}
let a = parseInt(readlineSync.question('Give me a number'))
console.log(factorial(a))
    