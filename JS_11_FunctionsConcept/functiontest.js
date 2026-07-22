//duplcate functions can be written but the latest function will be called.
//function/method overloading is not possible in JS

function search() { //0 param
    console.log('hello search1');
}

function search() { //0 param
    console.log('hello search2');
}


function search(productname) { //1 param
    console.log('hello search3', productname);
}

search('imac', 1000, 300);

function search(productname, price) { //2 param
    console.log('hello search4', productname, price);
}


// search();
// search('imac');
search('imac', 1000, 300);
