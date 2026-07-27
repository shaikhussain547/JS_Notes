
import { Car, BMW, Audi } from "./cardesign.js";

// let bmw = new BMW();
// bmw.start();
// bmw.stop();
// bmw.refuel();
// bmw.autoParking();
// console.log(bmw.min_speed);//100
// console.log(BMW.wheels);//4

// console.log('=======================');

let car = new Car();
car.start();
car.stop();
car.refuel();
console.log(Car.wheels);//4
// console.log(car.wheels);//undefined
console.log(car.getPassword());
car.getEngineData();



// console.log('=======================');

// let audi = new Audi();
// // audi.getEngineData();
// audi.start();
// audi.stop();
// audi.refuel();
// audi.theftSafety();

// console.log('=======================');