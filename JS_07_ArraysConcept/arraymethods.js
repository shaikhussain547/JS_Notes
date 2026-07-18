let num = [10, 20, 30, 40];
console.log(num);

//push, pop, shift, unshift
num.push(50);//will be added after the last element, at the end
console.log(num);
num.unshift(5); //will be added at the first index, at the 0th index
console.log(num);

let i = num.pop();//remove the last element
console.log(num);
console.log(i);//50
num.pop();
console.log(num);
num.shift();//remove the first element
console.log(num);

console.log('********************');

//splice:
let fruits = ['apple', 'grapes', 'banana', 'cherry'];
console.log(fruits);
fruits.splice(0,1, 'mango');//at 0th index, remove 1 element and add mango
console.log(fruits);
fruits.splice(0,2, 'Jack');//at 0th index, remove 2 elements and add Jack
console.log(fruits);
fruits.splice(0,1);//at 0th index, remove 1 element and add nothing
console.log(fruits);
fruits.splice(fruits.length, 0,  'berries');//at last index, remove 0 elements and add berries
console.log(fruits);

console.log('********************');

let marks = [1, 2, 3, 4, 1, 5, 6, 1];
// console.log(marks.indexOf(5));//5
// console.log(marks.indexOf(4));//3
// console.log(marks.indexOf(50));//-1

console.log(marks.indexOf(1));//0 -- 1st occurrence of 1
console.log(marks.indexOf(30));//-1
console.log(marks.indexOf(1, marks.indexOf(1)+1));//4- 2nd occurrence of 1
//array.indexOf(searchElement, fromIndex)

let myfruits = ['apple', 'grapes', 'banana', 'apple', 'cherry', 'apple'];

console.log(myfruits.indexOf('apple'));//0 //1st occ of apple
console.log(myfruits.indexOf('apple', myfruits.indexOf('apple') + 1));//3 -- 2nd occ of apple


let p = myfruits.indexOf('apple', myfruits.indexOf('apple') + 1);//3
console.log(myfruits.indexOf('apple', p + 1));//5

//1st
//2nd: 1st+1
//3rd: 2nd+1
//4th: 3rd+1

let newfruits = ['apple', 'grapes', 'banana', 'cherry'];
let length = newfruits.length-1;//3
for (let e of newfruits) {
    let index = length - newfruits.indexOf(e);
    console.log(newfruits[index]);
}
