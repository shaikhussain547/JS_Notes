/**
 * 
 * @param {string} str 
 * @returns 
 */
function charFrequency(str) {
    const freq = {};//object
    for (const char of str.toLowerCase()) {
        if (char !== " "){
            freq[char] = (freq[char] || 0) + 1;
        }   
    }
    return freq;
}

console.log(charFrequency('India'));

//2. Count of specific character
const str = 'aaasdfdfdfdddffffaaa34345134314&*&*&*';
let count = 0;
for (let char of str) {
    if (char === 'a') {
        count++;
    }
}
console.log('count of a is : '+count);