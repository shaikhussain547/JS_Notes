//data types: type of data: 

//1. primitive data types: simple | stack | not part of object/reference | fixed memory | No GC

//2. non primitive data types: Object/References/Class/Arrays/Functions/Interfaces| dynamic memory | Heap

//primitive data types: 
//1. number:
//range: -9007199254740991 to 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

let i = 10;
console.log(i);
console.log(typeof (i));

let j = 12.33;
console.log(j);
console.log(typeof (j));

const PI = 3.14;
console.log(typeof PI);

//1 byte = 8 bits
//size: 8 bytes = 64 bits

//2. string: '' or ""
let name = "Testing";
let firstName = 'Hussain';
let gender = 'm';
let isExe = 'Y';
let ph = '9898989898';

console.log(firstName);
console.log(typeof firstName);
console.log(typeof gender);
console.log(typeof ph);

let productName = 'MacBook Pro';
console.log(productName);

//size: 2 bytes per character
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
//size: ~ 1 byte = 8 bits


console.log("--------------");
//range: -9007199254740991 to 9007199254740991
let num = 9007199254740993;
let num1 = num + 1;
console.log(num1);//9007199254740992

//4. BigInt: used to long value/large values 
let amt = 9007199254740993n;
console.log(typeof amt); //bigint

let te = 10n;
console.log(typeof te);//bigint

let x = 10n; //bigint
let y = 20n; //bigint
//console.log(x + y);//Cannot mix BigInt and other type
console.log(x + y);//30n

let pop = BigInt(100);
console.log(pop);//100n -- bigint
console.log(typeof pop); //bigint

console.log(pop / 2n);

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
console.log(qa);
