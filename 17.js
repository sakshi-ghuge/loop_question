// 17. Write a program that takes a positive integer n as input and calculates its factorial using a while loop. The factorial of a number n is the product of all positive integers less than or equal to n (i.e., n! = n * (n-1) * (n-2) * ... * 1).

let n = 5;
let i = 1;
factorial = 1;
while(i <= n){
    factorial = factorial * i;
    i++;
}
console.log(factorial);
