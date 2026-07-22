//object --> non prmitive data type
//reference types
//key-value pair format

//Object will be create inside heap memry
//reference variable will be created inside stack memory

let user = {
    name: 'John',
    age: 49,
    city: 'New York',
    isActive: true,
    address: {
        flat: 101,
        zip: 235370,
        lat: 13.592,
        long: 7.891
    }
};

console.log(user);
console.log(user.name);//GET
console.log(user.age);
console.log(user.tel); //undefined
console.log(user['city']);

console.log(user.address.flat);
console.log(user.address.lat);
console.log(user.address['zip']);
console.log(user['address']['flat']);

//create a new key-value pair
user.email = 'tom@gmail.com';
console.log(user);

//delete a pair
delete user.age;
console.log(user);
//update a pair
user.name = 'Tom Autmation';
console.log(user);

delete user.address;
console.log(user);
