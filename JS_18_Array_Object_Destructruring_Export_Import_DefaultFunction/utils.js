// import { rest } from "./utilstest.js";

let name = 'Tom';
let flag = true;

function add(a, b) {
    return a + b;
}

function test() {
    console.log('test method');
}



//Two defaults are not allowed
export default function print() {
    console.log('print something...');
}

export { name, flag, add, test};

// rest();