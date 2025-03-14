// Exercise 8
// Write a JavaScript code that counts the occurrences of a given digit within a given number using
// loops.



function countDigit(number, digit) {
    const numberStr = number.toString();
    const digitStr = digit.toString();
    let counter = 0
    for (let i = 0; i < numberStr.length; i++) {
        if (numberStr[i] === digitStr) {
            counter++
        }
    }
    return counter
}



console.log(countDigit(1111234, 1))