// NAMING CONVENTIONS
// variable names can't start with digits
let camelCase = true;
let curretYear = 2023;

// NUMBERS
let score = 5;
// same to add 1
score = score + 1;
score += 1;
score++; // returns value then increments
++score; // increments then returns value

// same to subtract 1
score = score - 1;
score - + 1;
score--; // returns value then increments
--score; // increments then returns value

// var is the old way to do it

const gravity = -9.81;

// BOOLEANS
let loggedIn = false;
let isHotdogSandwich = true;

// in JS, types can change
loggedIn = 3;


// STRINGS
let name = "Bob";
let name2 = `Matt` // backtick character
let animal = 'chicken'; // can use single quotes, but stay consistent
let quote1 = "he said 'yes'...";
let quote2 = 'he said "yes"...';

animal[0]; // c
animal[2]; // i
animal[99] // undefined

animal.length; // returns number of characters
animal + animal; // "chickenchicken"
animal + " " + animal; // "chicken chicken"
1 + animal; // "1chicken" (will convert the 1 to a string)

let greet = "  hello  ";
greet.toUpperCase(); // "  HELLO  ", don't forget to put the ()
greet.trim(); // "hello", only trims spaces at the start and end
greet.trim().toUpperCase(); // "HELLO"

greet = "hello";
greet.indexOf("el"); // 1
greet.indexOf("l"); // 2, only gives first index
greet.slice(1, 3); // "el", 1 and 2 are start and end index
greet.slice(2); // "llo"
greet.slice(-1); // "o"
greet.replace("ell", "ayyyy"); // "hayyyyo"

let product = "avocado";
let price = 19.99;
let qty = 3;
let msg = "";
msg = "This " + product + " is ONLY $" + price + "! You bought " + qty + ", so your total is: $" + price * qty + ".";
console.log(msg);
msg = `This ${product} is ONLY $${price}! You bougth ${qty}, so your total is: $${price * qty}.`; // much cleaner imo
console.log(msg);


// NULL & UNDEFINED
null // intentional absence of a value
undefined // no assigned value

let loggedInUser = null;


// MATH OBJECT
Math.round(4.9); // 5
Math.PI;
Math.E;
Math.floor(4.9); // 4
Math.random(); // returns random decimal between 0 and 1
// Math.random(5) returns num between 0 and 5, floor turns to an int
Math.floor(Math.random() * 5);


