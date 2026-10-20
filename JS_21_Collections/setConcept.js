//Create a new set and add, delete the values
let numberset = new Set();

numberset.add(10);
numberset.add(23);
numberset.add(14);
numberset.add(76);
numberset.add(34);

console.log(numberset);//Set(5) { 10, 23, 14, 76, 34 }

numberset.delete(14);
console.log(numberset);///Set(4) { 10, 23, 76, 34 }

console.log(numberset.size);//4
console.log(numberset.has(76));//true

numberset.forEach((e)=> console.log(e));//It will print all the values in Set

//Arrays to set
let numArr = [1,3,5,2,7];
let numSet = new Set(numArr);
console.log(numSet); //Set(5) { 1, 3, 5, 2, 7 }

//Set to Array
const arr = Array.from(numSet);
console.log(arr);//[ 1, 3, 5, 2, 7 ]

const arr2 = [...numSet];
console.log(arr2);//[ 1, 3, 5, 2, 7 ]

//Iterate a set:
let nameset = new Set();
nameset.add('Rohit');
nameset.add('Kohli');
nameset.add('Dhoni');
nameset.add('Sachin');
nameset.add('Shami');

//1. Using for of loop
for(let name of nameset){
    console.log(name);
}

//2. Using for each method: Not recommendable
nameset.forEach((name) => console.log(name));

//3. Using Set.entries()
for(const[key,value] of nameset.entries()){
    console.log(key, value);
}