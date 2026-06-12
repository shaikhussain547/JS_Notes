let num = [10, 20, 30, 40]; //0-3, l=4

//to print all the values of array: use for loop:
for(let i=0; i<num.length; i++){
    console.log(num[i]);
    console.log(typeof num[i]); 
}

console.log('-------------');
//for..of loop: iterate the values of array:
for(let n of num){
    console.log(n);
    console.log(typeof n); 
}

console.log('-------------');
//for..in loop: iterate the index of array:
for (let k in num) {
    console.log(k + ":" + num[k]);
    console.log(typeof k); 
}

console.log('-------------');
let empData = ['pratik', 30, 'SDET1', 'IBM', 12.33, true];//0-5; len = 6

for (let e of empData) {
    console.log(e);
    if (e === 'SDET1') {
        console.log('10% hike');
        break;
    }
}

console.log('-------------');

for (let i = empData.length - 1; i >= 0; i--){
    console.log(empData[i]);
}

