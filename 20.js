// 19. Write a program that takes a positive integer as input and calculates the sum of its digits using a while loop. Print the sum.

let n = 567;
let sum = 0;

while(n > 0){
    let lastdigit = n % 10;
    sum += lastdigit;
    n = Math.floor(n / 10);
}
console.log(sum);
