const readlineSync = require("readline-sync");
let age = new Number(readlineSync.question('What is your age ? '));
if
    (age >= 18) {
    console.log("You ara an adult...")
}else{
    console.log("You are not yet an adult.")
}


