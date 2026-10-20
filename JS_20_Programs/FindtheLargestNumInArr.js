let numbers = [2,4,1,6,9,3];

/**
 * 
 * @param {Array} numArr 
 */
function findLargest(numArr){
    let largest = numArr[0];
    for(let i=0; i<numArr.length; i++){
        if(numArr[i]>largest){
            largest = numArr[i];
        }
    }
    console.log(`Largest Number : ${largest}`);
}

findLargest(numbers);

/**
 * 
 * @param {Array} numArr 
 */
function findLargestAndLowest(numArr){
    let largest = numArr[0];
    let lowest = numArr[0];
    for(let i=0; i<numArr.length; i++){
        if(numArr[i]>largest){
            largest = numArr[i];
        } else if(numArr[i] < lowest){
            lowest = numArr[i];
        }
    }
    console.log(`Largest Number : ${largest} and Lowest Number : ${lowest}`);
}

findLargestAndLowest(numbers);

/**
 * 
 * @param {Array} numArr 
 */
function findSecondLargest(numArr){
    let largest = numArr[0];
    let secondLargest = numArr[0];
    for(let i=0; i<numArr.length; i++){
        if(numArr[i]>largest){
            secondLargest = largest;
            largest = numArr[i];
        } 
    }
    console.log(`Largest Number : ${largest} and Second Number : ${secondLargest}`);
}

findSecondLargest(numbers);

//Using sort method
let sortArr = numbers.sort();
console.log(sortArr[sortArr.length-1]);
console.log(sortArr[sortArr.length-2]);