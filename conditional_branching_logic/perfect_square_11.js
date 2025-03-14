// Exercise 11
// Given a number, determine if it's a perfect square (i.e., the square of an integer). Print "Perfect
// square" if it is, and "Not a perfect square" otherwise.
// Hint: use Math.sqrt() and Number.isInteger().

function checkPerfectSquare(number) {
    if (Number.isInteger(Math.sqrt(number))) {
        console.log('"Perfect Square"')
    } else {
        console.log('"Not a perfect Square"')
    }
}



checkPerfectSquare(16);
checkPerfectSquare(20);