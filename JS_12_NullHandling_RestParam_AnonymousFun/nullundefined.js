let obj = {
    name: 'Tom',
    age: 20
};

obj = null;
//console.log(obj.name); //TypeError: Cannot read properties of null
console.log(obj?.name);

console.log('hello world');