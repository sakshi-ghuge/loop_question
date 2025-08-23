// 4. Write a program that takes a positive integer n as input and prints all multiples of 3 from 1 to n, separated by spaces.

let n = 15;
let i = 1;
while(i <= n){
    if(i % 3 === 0){
        console.log(i + " ");
    }
    i++;
}