const readlineSync = require("readline-sync");

let favNumber;
do{
    favNumber=readlineSync.question("What is your favorite number?");
    if(favNumber != 42)
    console.log("Are you sure?");
    else
    console.log("Yay me too :)");
}while(favNumber!=42);

//If you're sick to do{}while
/*
let favNumber=readlineSync.question("What is your favorite number?");
if(favNumber == 42)
{
    console.log("Yay me too :)");
}
else
{
    console.log("Are you sure?");
    while(favNumber!=42){
    favNumber=readlineSync.question("What is your favorite number?");
    if(favNumber != 42)
    console.log("Are you sure?");
    else
    console.log("Yay me too :)");
    }
}
*/
