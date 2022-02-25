const readlineSync = require("readline-sync");
let prefer = parseInt(readlineSync.question('What is your favorite number ? '))

while (prefer != 42){
    console.log("Are you sure?")
    prefer = new Number(readlineSync.question('What is your favorite number ? '))
}