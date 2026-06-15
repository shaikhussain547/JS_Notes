let u1 = {
    name: 'Harry',
    age: 40,
    city: 'Mumbai'
};

let u2 = {
    name: 'John',
    age: 26,
    city: 'Bangalore'
};

let u3 = {
    name: 'Rahul',
    age: 37,
    city: 'Noida'
};


console.log(u1);
console.log(u2);
console.log(u3);

console.log('=======');
u1 = u2;
console.log(u1);
console.log(u2);
console.log(u3);

console.log('=======');
u2 = u3;
console.log(u1);
console.log(u2);
console.log(u3);

console.log('=======');
u3 = u1;
console.log(u1);
console.log(u2);
console.log(u3);
