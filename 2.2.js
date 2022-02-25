const readlineSync = require("readline-sync");
let minAge = new Number(readlineSync.question('Enter minAge : '))
let maxAge = new Number(readlineSync.question('Enter maxAge : '))
let currentAge = new Number(readlineSync.question('Enter currentAge : '))
if (maxAge > currentAge && currentAge > minAge) {

    console.log("between")
}
else if (minAge > maxAge){
    console.log("ERROR you don't understand")
}
   
