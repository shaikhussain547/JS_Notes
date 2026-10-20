let numArr = [1,2,3,4,4,5,6,6];
let uniqueArray = [];
/**
 * Using for loop
 * @param {Array} numberArray 
 */
function removeDuplicates(numberArray) {
    for(let i=0; i<numberArray.length; i++){
        if(uniqueArray.indexOf(numberArray[i])=== -1){
            uniqueArray.push(numberArray[i]);
        }else{
            console.log(`Duplicate elements found ${numberArray[i]}`);
        }
    }
    return uniqueArray;
}

removeDuplicates(numArr);
console.log(uniqueArray);

/**
 * Using Set
 * @param {Array} arr 
 */
function removeDuplicatesFromArr(arr) {
    console.log('Using Set');
    return [...new Set(arr)];
}

console.log(removeDuplicatesFromArr(numArr));

//3. Using filter and indexof methods:
let uniqueArr = numArr.filter((num,index)=>{
    return numArr.indexOf(num) === index;
});
console.log(uniqueArr);

//4. Using reduce method:
let uniqueArr2 = numArr.reduce((acc,num)=>{
    if(!acc.includes(num)) acc.push(num);
    return acc;
},[]);
console.log(uniqueArr2);