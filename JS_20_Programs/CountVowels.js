let str = 'Hello, world!';

/**
 * 
 * @param {string} str 
 */
function countVowels(str){
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)) count++;
    }
    console.log(count);
}

countVowels(str);