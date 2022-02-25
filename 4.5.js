/**
 * Function that calculates the square of a number
 * @param {a} 
 * @returns a*a
 */
let sqr = (a) => {
    return a * a;
}

/**
 * Function that will calculate the distance between point A and B
 * @param {a1,b1,a2,b2} 
 * @returns pythagore formula with function params
 */
let calcDistance = (a1, b1, a2, b2) => {
    //calculate the distance between A and B + round after comma...
    return Math.round(Math.sqrt(sqr(b2 - b1) + sqr(a2 - a1)) * 100) / 100;
}

console.log("Distance between(1,1)-(2,2): " + calcDistance(1, 1, 2, 2));
console.log("Distance between(1,1)-(2,2): " + calcDistance(1, 1, 3, 1));
console.log("Distance between(1,1)-(2,2): " + calcDistance(-2, 2, 2, -2));