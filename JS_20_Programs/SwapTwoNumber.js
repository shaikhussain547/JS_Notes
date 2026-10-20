//1. Swap two numbers using third variable:
let x = 10;
let y = 5;
let temp;
console.log(`Before Swapping x value is ${x} and y value is ${y}`);
temp = x; //10
x = y; //5
y = temp; //10

console.log(`After Swapping x value is ${x} and y value is ${y}`);

//2. Swap two numbers withoutusing third variable:
let a = 10;
let b = 5;
console.log(`Before Swapping a value is ${a} and b value is ${b}`);
a = a + b; //15
b = a - b; //10
a = a - b; //5
console.log(`After Swapping a value is ${a} and b value is ${b}`);