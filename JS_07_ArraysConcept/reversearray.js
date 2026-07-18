let num = [1,2,3,4,5];

for(let i=num.length-1; i>=0; i--){
    console.log(num[i]);
}

//Not recommended way to reverse the array
// let count = num.length - 1;
// for(let e of num){
//     console.log(num[count]);
//     count--;
// }

for (let e of num) {
    let count = num.length - num.indexOf(e) - 1; //4
    console.log(num[count]);
}

console.log('---------');

let counter = num.length - 1;//4
for (let e in num) {
    e = counter;//3
    console.log(num[e]);
    counter--;//3
}