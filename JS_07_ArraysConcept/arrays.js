//collection of different or similar data in JS
//Array : []
//dynmaic arrays

//number array: 1D Array
let num = [10, 20, 30, 40]; //0-3; length=4

console.log(num);

console.log(num[-1]);//undefined
console.log(num[0]);//10
console.log(num[3]);
console.log(num[4]);//undefined
console.log(num[40]);//undefined

//lowest index = 0;
//highest index = len -1;
//length = highest index +1;

console.log(num.length);//4
console.log("lowest index = " + 0);
console.log("highest index = " + (num.length - 1));

num[4] = 50;
console.log(num);
console.log(num.length);//5

num[10] = 100;
console.log(num);
console.log(num[8]);//undefined
console.log(num[9]);//undefined
console.log(num[10]);

num[8] = 900;
console.log(num);


console.log('******************');

let arrName = ['tom', 'ravi'];
console.log(arrName); //[ 'tom', 'ravi' ]
arrName[0] = 'naveen';
console.log(arrName); //[ 'naveen', 'ravi' ]
arrName[5] = 'rohit';
console.log(arrName); //[ 'naveen', 'ravi', <3 empty items>, 'rohit' ]

console.log('******************');
//hetrogenous array
let empData = ['pratik', 30, 'SDET1', 'IBM', 12.33, true];
console.log(empData);
console.log(typeof empData);//object

console.log('******************');

const p = [10, 20, 30];//3
console.log(p);
p[3] = 40;
console.log(p);

// p = [12, 34, 56];
// console.log(p); //TypeError: Assignment to constant variable.

console.log('******************');

//string array
let products = ['macbook pro', 'imac', 'samsung galaxy'];
console.log(typeof products);

console.log('-----------');

let nm = Array.of(1, 2, 3, 'naveen', true);
console.log(nm);//[1,2,3]

console.log('-----------');

let pro = Array.from('playwright');
console.log(pro);

let pr = Array.from('12345');
console.log(pr);

//2D matrix
//jagged array