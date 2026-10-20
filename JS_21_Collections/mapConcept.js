let nameMap = new Map();
nameMap.set('fname', 'John');
nameMap.set('age', 33);
nameMap.set('role', 'admin');
nameMap.set('dept', 'qe');
nameMap.set('city', 'Hyderabad');

console.log(nameMap);
console.log(nameMap.size);//5
console.log(nameMap.get("fname"));
console.log(nameMap.get("age"));

nameMap.set('fname', 'Wick');
console.log(nameMap);

console.log(nameMap.has('role'));
nameMap.delete('city');
console.log(nameMap);
nameMap.clear();
console.log(nameMap);//Map(0) {}

//Iterate a map:
let rolesMap = new Map();
rolesMap.set('john', 'sde');
rolesMap.set('wick', 'sdet');
rolesMap.set('thomas', 'admin');
rolesMap.set('Tom', 'devops');

// for(const [key, value] of rolesMap){
//     console.log(key, value);
// }

// for (const [key, value] of rolesMap.entries()) {
//     console.log(key, value);
// }

// for (let key of rolesMap.keys()) {
//     console.log(key);
// }

// for (let value of rolesMap.values()) {
//     console.log(value);
// }

rolesMap.forEach((k,v) => console.log('Key : '+k+', Value : '+v));
rolesMap.forEach((k,v) => console.log('Key : '+k));
rolesMap.forEach((k,v) => console.log('Value : '+v));
