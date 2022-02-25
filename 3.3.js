const readlineSync = require("readline-sync");


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];


//personnal function
const dupliArray = function(arr){
    let arrCopy = [];
    for(let elem of arr){
        arrCopy.push(elem);
    }
    return arrCopy;
}

//use of slice method
const dupliArraySlice = arr => arr.slice();

let arr1Copy = dupliArray(arr1);
let arr2Copy = dupliArraySlice(arr2);
console.log(arr1Copy);
console.log(arr2Copy);





