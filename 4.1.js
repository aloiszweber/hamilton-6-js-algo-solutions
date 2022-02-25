const readlineSync = require("readline-sync");

// calculate the surface of a rectangle 

function calcSurface(lenght, width) {
    return lenght*width;
}
let lenght = readlineSync.question('Enter lenght of a rectangle');
let width = readlineSync.question('give me a width now ;)');

let surface = (calcSurface(lenght, width));

console.log("Rectangle's area is " + surface);
