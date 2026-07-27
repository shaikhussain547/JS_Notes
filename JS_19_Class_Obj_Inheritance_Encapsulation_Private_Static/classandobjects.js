
class Employee {

    //class vars: global vars
    name;
    age;
    salary;
    isPerm;

    //construtor : only one const... is allowed
    constructor(name, age, salary, isPerm){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isPerm = isPerm;
    }

    //methods
    study() {
        console.log(`${this.name} is studying here...`);
    }

    getInfo() {
        console.log(`${this.name} is ${this.age} years older and he earns  ${this.salary} per month and his perm status is ${this.isPerm}`);
    }

}

//object of the Employee class: using new keyword:
let e1 = new Employee('John', 49, 2500, true);

console.log(e1.name);
e1.study();
e1.getInfo();

let e2 = new Employee('peter', 35, 13.33, false);
e2.getInfo();
