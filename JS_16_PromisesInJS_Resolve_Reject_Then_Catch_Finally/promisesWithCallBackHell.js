
function startMachine() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Machine started');
            resolve();
        }, 3000);
    })
}

function grindBeans() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Grinding coffee beans');
            resolve();
        }, 3000);
    })
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Boiling water');
            resolve();
        }, 2000);
    })
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Brewing Coffee');
            resolve();
        }, 3000);
    })
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Pouring Coffee into cup');
            resolve();
        }, 1000);
    })
}

startMachine()
            .then(() => grindBeans())
            .then(() => boilWater())
            .then(() => brewCoffee())
            .then(() => pourCoffee())
            .then(() => console.log('coffee is ready'))
            .finally(() => console.log('go back to ur desk!'));
