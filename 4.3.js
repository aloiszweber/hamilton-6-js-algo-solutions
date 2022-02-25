const readlineSync = require("readline-sync");
function rand10(){
    return Math.ceil(Math.random() * 10);
}
function multiRand(n){
    const arr = []
    for(let i = 0; i < n; i++){
        let number = rand10();
        arr.push(number)
    }
    return arr;
}
console.log(multiRand(3))