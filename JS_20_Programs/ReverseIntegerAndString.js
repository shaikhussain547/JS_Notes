//1.Reverse Integer
let num = 138;
let reversedNum = 0;
while(num > 0) {
    reversedNum = reversedNum * 10 + num % 10;
    num = Math.floor(num / 10);
}
console.log(`Reversed Integer is ${reversedNum}`);

//2.Reverse String
let str = "John";
console.log(str.split('').reverse().join(''));
str = "Wick";
let reversedStr = '';
// Using a loop to reverse a string
for(let i=str.length-1; i>=0; i--){
    reversedStr += str[i];
}
console.log(`Reversed String is ${reversedStr}`);
// Using charAt() method to reverse a string
let reversedStr2 = '';
for(let i=str.length-1; i>=0; i--){
    reversedStr2 += str.charAt(i);
}
console.log(`Reversed String is ${reversedStr2}`);
// Using for loop
let reversedStr3 = '';
for(let char of str){
    reversedStr3 = char + reversedStr3;
}
console.log(`Reversed String is ${reversedStr3}`);

//Reverse words in string:
let str1 = 'I have one doubt';
/**
 * 
 * @param {string} str 
 */
function reverseWords(str){
    let newStr = '';
    let words = str.split(' ');//.reverse(); tbuod eno evah I
    for(let word of words){
        newStr += reverseStr(word)+' ';
    }
    return newStr.trim();
}

/**
 * 
 * @param {string} str 
 * @returns 
 */
function reverseStr(str){
    return str.split('').reverse().join('');
}

console.log(reverseWords(str1));//I evah eno tbuod
