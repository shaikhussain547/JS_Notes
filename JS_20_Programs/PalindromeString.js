//racecar

let str = 'racecar';
let rev = '';

/**
 * 
 * @param {string} str 
 */
function isStrPalindrome(str){
    rev += str.split('').join('');
    if(str === rev){
        console.log(str+' Given string is palindrome');
    } else {
        console.log(str+' Not a palindrome string');
    }
}

isStrPalindrome(str);
isStrPalindrome('Playwright');