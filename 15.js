// 15. Write a program that takes a positive integer as input and counts how many digits it has using a while loop. Print the digit count.

let n = 34500;
let c = 0;

while(n > 0){
    n = Math.floor(n / 10);
    c++;
}
console.log(c);