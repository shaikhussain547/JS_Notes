//data types: type of data:
//number, boolean, string

//var, let, const

//1. var: used in old JS -- never use it in modern JS/tools/PW

//1. Declaration: Re-Declaration is allowed
var x = 10;
var x = 20;
var x = 30;
console.log(x);

//2. Reassignment:
var y = 100;
y = 200;
y = 300;
console.log(y);

//3. Hoisting:
console.log(t); //undefined
var t = 90;
console.log(t);

console.log('***************************');

//2. let:
//1. Declaration: Re-Declaration is not allowed
let p = 10;
//lep p = 20; // Shows compile error
console.log(p);

let a;
console.log(a); //undefined

//2. Reassignment:
let total = 900;
total = 970;
total = 1000;
console.log(total); //100

//3. Hoisting: Hoisting is allowed but with error at RT
//console.log(h);  //Gives error
let h = 25;  //Shortcut to comment : Ctrl+/

console.log('***************************');

//3. const:
//1. Declaration: Re-Declaration is not allowed
const PI = 3.14;
//2. Reassignment: Reassignment is not allowed
//PI = 90.99; //Gives Type Error
const LOGIN_TITLE = 'LoginPage';
const DAYS_IN_WEEK = 7;
//title, url, days, month, PI, logo, base URL

//3. Duplicate not allowed:
// const tr = 100;
// const tr = 200;

//4. Initialize error:
//const num; 

//4. Hoisting:
console.log(pi); //Cannot access 'pi' before initialization
const pi = 3.14;

console.log('***************************');

//scope of the variables: if-else, functions
