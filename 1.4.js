const readlineSync = require("readline-sync");
let name = new String(readlineSync.question('What is your name ? '));
let firstName = new String(readlineSync.question('What is your firsname ? '));
let city = new String(readlineSync.question('What is your city ? '));
console.log("Your name is "+  name + " "+ firstName +  ' and you live in ' + city );