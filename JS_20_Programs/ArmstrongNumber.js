//1. Armstrong Number:
/**
 * 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 * 1634 = 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
 */
function getCube(num) {
    return num * num * num;
};
function isArmstrongNum(num) {
    let sum = 0;
    let temp = num;
    while(temp > 0){
    sum = sum + getCube(temp % 10);
    temp = Math.floor(temp / 10);
    }
    if(sum === num){
        console.log(num + ' is an Armstrong number');
    } else {
        console.log(num + ' is not an Armstrong number');
    }
}

isArmstrongNum(153);
isArmstrongNum(123);
isArmstrongNum(370);
isArmstrongNum(371);
isArmstrongNum(1634);

function isArmstrong(num) {
    if (num < 0) return false;

    // Step 1: Count the total number of digits
    let temp = num;
    let numDigits = 0;
    while (temp > 0) {
        numDigits++;
        temp = Math.floor(temp / 10);
    }

    // Edge case for 0
    if (num === 0) numDigits = 1;

    // Step 2: Sum each digit raised to power of numDigits
    temp = num;
    let sum = 0;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

// Test cases
console.log(isArmstrong(153));  // true
console.log(isArmstrong(370));  // true
console.log(isArmstrong(1634)); // true
console.log(isArmstrong(123));  // false

function findArmstrongNumbersInRange(start, end) {
    const results = [];
    for(let i=start; i<=end; i++){
        if(isArmstrong(i)){
            results.push(i);
        }
    }
    return results;
}

const armstrongNumbers = findArmstrongNumbersInRange(1, 200);
console.log(armstrongNumbers.length);
for(let num of armstrongNumbers) {
    console.log(num);
}