// 11. Write a program that takes a positive integer n as input and prints all multiples of 5 from n down to 1 in reverse order, separated by spaces.

let n = 20;
let i = n;
let c = 0;

while(c < n){
    if(i % 5 === 0){
        console.log(i);
    }
    i--;
    c++;
}