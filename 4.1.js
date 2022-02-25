const readlineSync = require("readline-sync");
let length = parseInt(readlineSync.question('Give me the length of the rectange : '))
let width = parseInt(readlineSync.question('Give me the width of the rectange : '))
function calcSurface(length, width) {
    return length * width;
}



console.log(calcSurface(length, width) + "m2")