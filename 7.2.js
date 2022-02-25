/********* = 0+1+1+2+3+5+8+13+21+34....  *****************/


const num = parseInt(readlineSync.question('Can you give me a number of terms'));
let num1 = 0;
let num2 = 1;

for (let i = 1; i <= num; i++){
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}