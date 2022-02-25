const readlineSync = require("readline-sync")
let arr = []
let n =parseInt(readlineSync.question("Enter the number of elements for the array you want to create : "));

/*function multiRand take an argument as array name, and n for number of elements. 
Then it creates an array with random numbers*/
function multiRand(arr, n){
    for(let i = 0; i < n ; i++){
        arr[i] = Math.floor(Math.random() * 10) + 1
    }
    return arr;
}

/*function average takes an array as argument and return
the average value*/
function average(arr){
    let avr = 0
    for (let i=0; i<arr.length; i++){
        avr += parseInt(arr[i])
    }
    return avr/arr.length
}

/*function min takes an array as argument and return the smallest element value*/
function min(arr){
    let min = arr[0]
    for (let i = 1; i<=arr.length; i++){
        if (min>arr[i]){
            min = arr[i]
        }
    }
    return min
}

/*function max takes an array as argument and return the biggest element value*/
function max(arr){
    let min = arr[0]
    for (let i=1; i<= arr.length; i++){
        if (min<arr[i]){
            min=arr[i]
        }
    }
    return min
}

multiRand(arr,n);
console.log(arr);
console.log("The average is :" + average(arr));
console.log("The biggest number is 	:" + max(arr));
console.log("The smallest number is	:" + min(arr));