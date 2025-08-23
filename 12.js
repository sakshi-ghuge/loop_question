// 12. Write a program that takes a positive integer n as input and calculates the sum of all numbers from 1 to n using a while loop. Print the result.

let n = 3;
let i = 1;
let sum = 0;

while(i <= n){
    sum = sum + i;
    i++;
}
console.log(sum);
