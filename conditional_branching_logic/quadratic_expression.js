// Exercise 1
// Write a JavaScript program that calculates and displays the value of a quadratic expression
// ax^2 + bx + c at a given point x0. The program should:
// ● Prompt the user to enter four integers: a, b, c, and x0.
// ● Calculate the value of the expression ax^2 + bx + c at x0.
// ● Display the result in the console.


function calculateQuadratic(a, b, c, x0) {
    if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number' && typeof x0 == 'number') {
        let result = a * (x0 ** 2) + b * x0 + c;
        return result;
    } else return 'Incorrect values are passed'
}


let a = "o";
let b = 3;
let c = 1;
let x0 = 4;

console.log(calculateQuadratic(a, b, c, x0));

