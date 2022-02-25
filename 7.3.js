const readlineSync = require("readline-sync");

let userNumber=-1;

while (userNumber < 0 ){
    userNumber = new Number(readlineSync.question('Give me a number: '));
    if (userNumber<0){
        console.log('enter a positive integer please!');
    }
}

//type of userNumber is object, so we parse it to a number type and we keep only the integer in case of a float number entered by user
userNumber = parseInt(userNumber);

//initialize divisors array
let divisors=[];

//loop from 2 cause 1 is not suppose to be tested. not "i<="" cause we don't want to test if he can be divided by himself
for (let i=2;i<userNumber;i++){
    //if rest is 0 it's a divisors
    if (userNumber%i==0){
        divisors.push(i);
    }
}
if (divisors.length!=0){
    console.log(`divisors are : ${divisors.toString()}`);
} else{
    console.log('nothing (it\'s a prime number)');
}

