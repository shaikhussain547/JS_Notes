/**
 * 
 * @param {string} str 
 * @returns 
 */
function firstNonRepeatingChar(str) {
    const map = new Map();
    for (const char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (const [char, count] of map.entries()) {
        if (count === 1) return char;
    }
    return null;
}
// Time: O(n), Space: O(k)


console.log(firstNonRepeatingChar('aabbbcabbb'));
console.log(firstNonRepeatingChar('swiss'));
console.log(firstNonRepeatingChar('abab'));