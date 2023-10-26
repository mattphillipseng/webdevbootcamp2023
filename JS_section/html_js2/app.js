// CONTENTS:
// - for loops
// - while loops
// for...of loops

// ----- FOR LOOPS -----
console.log('----- FOR LOOPS -----')

console.log('1 to 5')
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('Evens')
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// loop through arrays
console.log("5 W's")
let ws = ['who', 'what', 'when', 'where', 'why'];
for (i = 0; i < ws.length; i++) {
    console.log(i + 1, ws[i].toUpperCase());
}
// nested loops
console.log('Nested loops')
let letters = ['a', 'b', 'c'];
for (let i = 1; i <= 3; i++) {
    console.log(i.toString())
    for (let j = 0; j < letters.length; j++) {
        console.log(`   ${letters[j]}`);
    }
}
// ----- WHILE LOOPS -----
console.log('----- WHILE LOOPS -----')

// let code = '1';
// let guess = prompt("enter the code (it's 1)");
// while (guess !== code) {
//     console.log('nope... try again')
//     guess = prompt(`enter the code (it's 1)`)
// }
// console.log("Yay! You got it! :)")

i = 0
while (true) {
    if (i >= 5) {
        console.log("break reached")
        break;
    }
    console.log(i)
    i++
}

// ----- FOR...OF LOOPS -----
console.log('----- FOR...OF LOOPS -----')
const carsMakes = ['Subaru', 'Toyota', 'Honda', 'Ford', 'Peugot']
for (let make of carsMakes) {
    console.log(make)
}

const users = [["Joe", 1996, 27], ["Bob", 2000], ["Jeff", 1993]]
for (let user of users) {
    for (let userData of user) {
        console.log(userData)
    }
}

for (let char of "Bonjour!") {
    console.log(char)
}

const productInfo = {
    product: 'soap',
    price: 5.25,
    qty: 1
}

// can't use for of here, as it
for (let entry in productInfo) {
    console.log(`${entry}: ${productInfo[entry]}`)
}

console.log(Object.keys(productInfo))
console.log(Object.values(productInfo))

// To do list exercise
console.log('----- Welcome to the to do list! -----')
console.log('Your choices, are: new, list, delete, quit')
const todos = [];
let input = prompt('What would you like to do?')
while (input !== 'quit') {
    if (input === 'new') {
        let newTodo = prompt('Enter an item for your to do list.')
        todos.push(newTodo);
        console.log(`Added "${newTodo}" to your list!`)
    }
    else if (input === 'list') {
        if (todos.length <= 0) {
            console.log('Your todo list is empty.')
        }
        else {
            console.log('----- Todo list -----')
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`);
            }
            console.log('---------------------')
        }
    }
    else if (input === 'delete') {
        index = parseInt(prompt('Please enter the index of the item you want to delete.'))
        if (index >= 0 && index < todos.length) {
            console.log(`Removed: "${todos.splice(index, 1)}"`)
        }
        else {
            console.log('Aborted delete (invalid input).')
        }
    }
    input = prompt('What would you like to do?')
}
console.log('You quit the app.')

