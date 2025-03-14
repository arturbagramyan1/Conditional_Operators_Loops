// Exercise 6
// Develop a JavaScript program enabling users to define an array's size and input its elements
// via prompt.

let arraySize = parseInt(prompt("Enter the size of the array:"));
let userArray = [];

for (let i = 0; i < arraySize; i++) {
    let element = prompt(`Enter element ${i + 1}:`);
    userArray.push(element);
}

