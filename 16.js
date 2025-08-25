// 16. Write a program that takes a positive integer as input and prints its digits in reverse order using a while loop.

let n = 560;
let reverse = 0;

while(n > 0){
    let lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = Math.floor(n / 10);
}
console.log(reverse);

