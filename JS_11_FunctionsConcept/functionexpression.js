//function expression:

let cart = function addToCart(productName) {
    console.log('add to cart', productName);
    return true;
};

cart('phone');

console.log(cart('phone'));

let flag = cart('mobile');//add to cart mobile
console.log(typeof flag);//boolean


//function expression name: cart
//actual function name: addToCart


//addToCart(); error

//call the function:
let n1 = cart('macbook pro');
console.log(n1);

console.log(cart.name);


console.log('===============');


let waitFor = function waitForElementPresenceWithExplicitWaitOnThePage(productName) {
    console.log('add to cart', productName);
    return true;
};

console.log(waitFor('sim card'));
console.log(waitFor('sim'));


let flag1 = waitFor('imac');
console.log(flag1);

flag1 = waitFor('macbook');
console.log(flag1);

flag1 = waitFor('samsung');
console.log(flag1);

console.log(waitFor.name);


