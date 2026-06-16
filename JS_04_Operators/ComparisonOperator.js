// 10 is eq to 10
//Hussain is eq to Hussain

// == : Loose equality : compares the value only
// === : Strict equality : compares both value and type

console.log(10 == 10);//true
console.log(10 == "10");//true
console.log(10 == '10');//true

console.log(10 === 10);//true
console.log(10 === "10");//false
console.log(10 === '10');//false
console.log('10' === 10);//false

let bill = "10000";
console.log(bill == 10000);//true
console.log(bill === 10000);//false
console.log('10' === "10");//true

//true = 1
//false = 0
console.log(true == 1);//true
console.log(1 == true);//true
console.log(true === 1);//false
console.log(false == 0);//true

console.log('somika' == 'Somika');//false
console.log('somika' === 'Somika');//false
console.log('A' == 'a');//false
