const readlineSync = require('readline-sync');

let yourName = readlineSync.question("Your Name ?");
console.log("Hello " + yourName);