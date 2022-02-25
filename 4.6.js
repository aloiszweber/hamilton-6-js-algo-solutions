const readlineSync = require('readline-sync');

let nFact = readlineSync.question("Give a number for factorial");

function factorial(num){
    if (num === 0){
       return 1; 
    }else{
       return num * factorial( num - 1 ); 
    }
}
console.log(factorial(nFact));