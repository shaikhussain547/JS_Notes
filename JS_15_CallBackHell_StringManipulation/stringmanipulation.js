
let str = 'hello';
console.log(str.length); // Output: 5
console.log(str.indexOf('e')); // Output: 1
console.log(str.indexOf('p')); // Output: -1
console.log(str.indexOf('l')); // Output: 1
console.log(str.lastIndexOf('l')); // Output: 3

console.log(str.includes('ell')); // Output: true
console.log(str.includes('naveen')); // Output: false

console.log(str.startsWith('he')); // Output: true
console.log(str.endsWith('lo')); // Output: true
console.log(str.endsWith('hello')); // Output: true

//slice:
let str1 = 'hello';
console.log(str1.slice(1, 3)); // Output: el
console.log(str1.slice(1, 4)); // Output: ell
console.log(str1.slice(2, 4)); // Output: ll
console.log(str1.slice(-3)); // Output: llo
console.log(str1.slice(-1)); // Output: o
console.log(str1.slice(0)); // Output: hello
console.log(str1.slice(-5)); // Output: hello

console.log(str1.slice(-4, -1)); // Output: ell
console.log(str1.slice(-3, -1)); // Output: ll
console.log(str1.slice(-5, -3)); // Output: he

console.log(str1.slice(-4, 4)); // Output: ell
console.log(str1.slice(-5, 3)); // Output: hel

console.log('==========');
console.log(str1.slice(0, -5)); // Output: 
//start>=end

console.log(str.substring(1, 3)); // Output: el
//in substrins negitive indexs are not allowed
console.log('==========');


let st = 'playwright';
console.log(st.charAt(0)); // Output: p
console.log(st.charAt(-1)); // Output: 

console.log("A".charCodeAt()); // Output: 65
console.log("a".charCodeAt()); // Output: 97
console.log("abc".charCodeAt(2)); // Output: 99
console.log(" ".charCodeAt()); // Output: 32
console.log("$".charCodeAt()); // Output: 36

//A-Z: 65 to 90
//a-z: 97 to 122
//0-9: 48 to 57

console.log(st.toUpperCase()); // Output: PLAYWRIGHT
console.log(st.toLowerCase()); // Output: playwright

console.log("  hello    ".trim()); // Output: "hello"
console.log("  hello    ".trimStart()); // Output: "hello    "
console.log("  hello    ".trimEnd()); // Output: "  hello"

//replace:

console.log("hi hi".replace("hi", "hey")); // Output: hey hi
console.log("hi hi".replaceAll("hi", "hey")); // Output: hey hey

let dob = "01-01-1990"; //01/01/1990
console.log(dob.replaceAll("-", "/")); // Output: 01/01/1990

//concat:
console.log("hello".concat(" ", " Selenium", " Automation")); // Output: "hello Selenium Automation"

//padding:
console.log("7".padStart(3, 0)); // Output: "007"
console.log("7".padEnd(3, 0)); // Output: "700"
console.log("7".padEnd(5, 'hi')); // Output: "7hihi"
console.log("7".padEnd(7, 'hello')); // Output: "7helloh"

//repeat:
console.log("".repeat(3)); // Output: ""
console.log("hi".repeat(3)); // Output: "hihihi"
//split:
let lang = 'java_python_ruby';
let lg = lang.split('_');
console.log(lg[0]); // Output: "java"
