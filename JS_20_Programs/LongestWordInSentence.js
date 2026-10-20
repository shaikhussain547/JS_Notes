let str = 'I love coding in JavaScript lang';

/**
 * Using for loop:
 * @param {string} str 
 */
function longestWord(str){
    const words = str.split(' ');
    let longestword = '';
    for(let word of words){
        if(word.length > longestword.length) longestword = word
    }
    console.log(longestword);
}

longestWord(str);

//Using reduce method:
let longestWord2 = str.split(' ').reduce((longword, word)=>{
    return word.length > longword.length ? word : longword;
},'');

console.log(longestWord2);