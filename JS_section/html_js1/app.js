greeting = "Hi, this is the secret message. Are you disappointed?"
console.log(greeting);

let rand = Math.random();
if (rand <= 0.3) {
    console.log("Random number is less than or equal to 0.3")
}
else if (rand >= 0.7) {
    console.log("Random number is greater than or equal to 0.7")
}
else {
    console.log("Random number is between 0.3 and 0.7.")
}

const str = "ksjfgsbbb"
if (str.length >= 5 && str.includes("a")) {
    console.log("String has length >= 5 and includes 'a'")
}
else if (str.length >= 5 || str.includes("a")) {
    console.log("String has length >= 5 or includes 'a'")
}
else {
    console.log("String length is less than 5, and it doesn't include an 'a', or both.")
}

if (!null) {
    console.log("!null is true")
}

const num = 2;
switch (num) {
    case 1:
        console.log("1")
        break;
    case 2:
        console.log("2")
        break;
    case 3:
        console.log("3")
        break;
    case 4:
        console.log("4")
        break;
    default:
        console.log("not 1, 2, 3, or 4")
}

// ARRAYS
const lang = ["English", "French", "Spanish"];
console.log(typeof lang);
console.log(lang.length);
console.log(lang)

let stuff = [99, "Joe", 22, null, NaN]
console.log(stuff[0])
console.log(stuff[8]) //undefined
console.log(stuff[1][2]) //e
stuff[4] = 54
console.log(stuff)
stuff[9] = 13 // will increase the size of the array! empty(undefined) slots where not specified
console.log(stuff)
console.log(stuff[8])

let travelList = ["Portugal", "France", "Italy", "Bahamas"]
console.log(travelList)
travelList.push("USA") // push adds to end
console.log(travelList)
let popped = travelList.pop() // pop removes from the end
console.log(`popped = ${popped}`)
console.log(travelList)
let shifted = travelList.shift() // shift removes from start
console.log(`shifted = ${shifted}`)
console.log(travelList);
travelList.unshift("Florida"); // unshift adds to start
console.log(travelList); 
