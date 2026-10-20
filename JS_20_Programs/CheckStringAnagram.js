//An anagram is a word formed by rearranging the letters of another word.
//Example : listen, silent

/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 */
function areAnagrams(str1, str2){
    str1 = str1.toLowerCase().split('').sort().join('');
    str2 = str2.toLowerCase().split('').sort().join('');
    if(str1 === str2) return true;
    return false;
}

console.log(areAnagrams('Listen','silent'));
console.log(areAnagrams('java','vaaja'));