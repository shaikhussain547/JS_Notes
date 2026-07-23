//callback hell: pyramid of doom

//multiple async operations/tasks, they depnd on each other --- nested callback/indented callbacks
//hard to read
//hard to debug

//example: coffee machine:
//1. start the machine -- 5 secs
//2. Grind the beans -- 3 secs
//3. Boil water -- 4 secs
//4. Brew Coffee -- 3 secs
//5. Pour into cup -- 2 secs

setTimeout((name, age) => {
    console.log('hello', name, age);
}, 3000, 'Devika', 30);
//once 3 seconds over, program will execute
setTimeout(() => {
    console.log('account is created');
}, 4000);
//once 4 seconds over, program will execute

function startMachine(callback) {
    setTimeout(() => {
        console.log('Machine Started');
        callback();
    }, 5000);
};

startMachine(() => {
    console.log('hello');
})

function grindBeans(callback) {
    setTimeout(() => {
        console.log('Grinding coffee beans');
        callback();
    }, 3000);
};

function boilWater(callback) {
    setTimeout(() => {
        console.log('Boiling Water');
        callback();
    }, 4000);
};

startMachine(() => {
    boilWater(() => {
    })
});

function brewCoffee(callback) {
    setTimeout(() => {
        console.log('Brewing Coffee');
        callback();
    }, 3000);
};

function pourCoffee(callback) {
    setTimeout(() => {
        console.log('Pouring coffee into cup');
        callback();
    }, 2000);
};

function stopMachine() {
    setTimeout(() => {
        console.log('machine is offf');
    }, 4000);
}

//calling the functions: 
startMachine(() => {
    grindBeans(() => {
        boilWater(() => {
            brewCoffee(() => {
                pourCoffee(() => {
                    console.log('Coffee is ready');
                })
            })
        })
    })
});


// async function makeCoffee() {
//     await grindBeans();
//     await boilWater();
//     await brewCoffee();
// }
//promises
//async await
