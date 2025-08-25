// 19. Write a program that takes a positive integer n as input and prints a countdown from n to 1, but only print every second number (i.e., n, n-2, n-4, ...) using a while loop

let n = 7;
let i = n;

while(i >= 1){
    console.log(i);
    i = i - 2;
}