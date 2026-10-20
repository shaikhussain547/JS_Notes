//Check given strin value contains only numeric value or not
/**
 * @param {string} value 
 */
function isNumeric(value) {
    for(let i=0; i<value.length; i++){
        if(value[i] < '0' || value[i] > '9'){
            return false;
        }
    }
    return true;
}
/**
 * @param {string} value 
 */
function isNumeric2(value) {
    return !isNaN(value) && value.trim() !== '';
}


console.log(isNumeric('2'));
console.log(isNumeric('123a'));
console.log(isNumeric2('123'));
console.log(isNumeric2('123a'));
