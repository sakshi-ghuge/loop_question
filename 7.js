// 7. Write a program that takes a positive integer n as input and prints all odd numbers from 1 to n inclusive, separated by spaces.

let n = 6;
let i = 1;
while(i <= n){
    if(i % 2 !== 0){
    console.log(i);
    }
    i++;
}