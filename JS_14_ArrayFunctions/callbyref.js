

let user = {
    name : 'Prateek',
    age : 30,
    city : 'London'
}

let dept = {
    name: 'admin',
    HOD: 'Sushant'
};

/**
 * Prints user data
 * @param {object} userObj
 * @param {object} deptObj
 */
function printUserData(userObj, deptObj){
    userObj.age = 40;
    userObj.zip = 201234;
    console.log(userObj);
    console.log(deptObj);
};

printUserData(user,dept); //pass by reference
console.log(user); //the original object is modified



