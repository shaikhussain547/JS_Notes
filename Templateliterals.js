//template literals String: concept
//back tick: ``
let mesg = `this is hussain here`;
console.log(mesg);

let para = `hi this is my JS code
I love JS
I want to learn PW
I have exp in selenium`;

console.log(para);

//op: I love 'javascript' coding

console.log('I love \'javascript\' coding');
console.log("I love \"javascript\" coding");

console.log(`I love 'javascript' coding`);
console.log(`I love "javascript" coding`);

console.log(`hi it's my javascript code`);
console.log(`hi \`javascript\` code`);

console.log(`the product name is 'macbook' and price '12.33$'`);

//dynamic values:
let username = 'seller';
console.log('welcome ' + username);
console.log(`welcome ${username}`);

let productName = 'Apple iMac';
let price = 1002.33;

console.log(`the search product name is ${productName} and price is ${price}`);

let playerName = 'Joe.root';
//button[text()='ViratKohli']

console.log(`//button[text()='${playerName}']`);
console.log(`//button[text()="${playerName}"]`);

let n1 = 100;
let n2 = 200;
console.log(`the sum of n1 and n2 is ${n1 + n2}`);

let emailId = 'automation@gmail.com';
let password = 'testing@123';

console.log(`the user credentials : 
    username : ${emailId} and 
    password: : ${password}`);     


let str = `hi this is naveen here`;
console.log(typeof str);    

console.log(emailId, password, 'admin');
console.log('price: ', 10);


//'' or "" -- normal string -- static string
// dynamic string --> ``
// ${} --> placeholder


