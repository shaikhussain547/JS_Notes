//Data types: type of data: 

//1. Primitive data types: simple | stack | not part of object/reference | fixed memory | No GC
//2. Non-primitive data types: Object/References/Class/Arrays/Functions/Interfaces| dynamic memory | Heap

//Primitive data types: 
//1. number:
//range: -9007199254740991 to 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

let i = 10;
console.log(i); //10
console.log(typeof i); //number

let j = 12.33;
console.log(j); //12.33
console.log(typeof (j)); //number

const PI = 3.14;
console.log(typeof PI); //number

//1 byte = 8 bits
//size of number : 8 bytes = 64 bits

//2. string: '' or ""
let name = "John";
let firstName = 'Wick';
let gender = 'm';
let isEmployee = 'Y';
let phoneNum = '9876543210';

console.log(firstName);
console.log(typeof firstName);
console.log(typeof gender);
console.log(typeof phoneNum);

let productName = 'MacBook Pro';
console.log(productName);

//size of string: 2 bytes per character
let e = 'abc'; //3x2=6 bytes
console.log('my first name is ' + firstName);

//3. boolean: true/false
const flag = true;
console.log(flag);
let isEmpActive = false;
console.log(isEmpActive);
console.log(typeof flag);

const rest = 'true';
console.log(typeof rest);
//size of boolean: ~ 1 byte = 8 bits

console.log("--------------");
//range: -9007199254740991 to 9007199254740991
let num = 9007199254740991;
let num1 = num + 1;
console.log(num1);

//4. BigInt: used to long value/large values 
let amt = 9007199254740993n;
console.log(typeof amt); //bigint

let te = 10n;
console.log(typeof te);//bigint

let x = 10n; //bigint
let y = 20n; //bigint
//Cannot mix BigInt and other type
console.log(x + y);//30n

//let z = 10.33n;//A bigint literal must be an integer.

let pop = BigInt(100);
console.log(pop);//100n -- bigint
console.log(typeof pop); //bigint
console.log(pop/2n);//50n

//5. null: nothing/no value
//size: 0 to 8 bytes - depends on the engine
let myName = null;
let data = null;
console.log(data);//null
console.log(typeof data);//object -- JS bug

//6. undefined:
let v;
console.log(v);//undefined
//size: 0 to 8 bytes - depends on the engine
v = 'test';

var c;
console.log(c);//undefined
console.log(typeof c);//undefined

let sd = "undefined";
console.log(typeof sd);//string

let qa = undefined;
console.log(qa);//undefined
console.log(typeof qa);//undefined