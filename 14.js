// 14. Write a program that takes a positive integer as input and calculates the sum of all even digits in that number using a while loop. Print the result.

let n = 4827;
let sum = 0;

while(n > 0){
    let digit = n % 10;
    if(digit % 2 === 0){
        sum = sum + digit;
    }
    n = Math.floor(n / 10);
}
console.log(sum);
