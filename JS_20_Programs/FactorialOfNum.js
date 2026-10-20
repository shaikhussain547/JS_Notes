//Factorial of a number using recursion
function factorial(n) {
    let fact = 1;
    if (n === 0 || n === 1) {
        return 1;
    } else {
        fact = n * factorial(n - 1);
        console.log(fact);
        return fact;
    }
}

// Example usage:
const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);

//Factorial of a number using iteration
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
const numberIterative = 5;
console.log(`Factorial of ${numberIterative} is ${factorialIterative(numberIterative)}`);