// CONTENTS:
// - functions

// ----- FUNCTIONS -----
function greet() {
    console.log('Hi!');
}
greet();

// dice roll - arguments
function diceRoll(sides, times) {
    console.log(`Rolling a ${sides} sided dice ${times} times.`)
    for (let i = 0; i < times; i++) {
        console.log(Math.floor(Math.random() * sides) + 1);
    }
}
diceRoll(8, 5)

// factorial - recursion
function factorial(x) {
    if (x == 0) { return 0; }
    else if (x == 1) { return 1; }
    else { return x * factorial(x - 1); }
}
console.log(`Factorial of 0 is ${factorial(0)}`);
console.log(`Factorial of 1 is ${factorial(1)}`);
console.log(`Factorial of 4 is ${factorial(4)}`);
console.log(`Factorial of 7 is ${factorial(7)}`);

// adding to strings
function lol(times) {
    let result = 'L';
    for (let i = 0; i < times; i++) {
        result += 'OL'
    }
    console.log(result);
}
lol(20);

