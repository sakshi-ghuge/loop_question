// 18. Write a program that takes two integers x and y as input, and calculates the value of x raised to the power y (i.e., x^y) using a while loop.

let x = 5;
let y = 4;

let result = 1;
let i = 1;
while(i <= y){
    result = result * x;
    i++;
}
console.log(result);
