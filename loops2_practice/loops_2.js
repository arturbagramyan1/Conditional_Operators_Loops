// Task 2
// Insert a digit and a number. Check whether the digits contains in the number or not.


function containsDigit(digit, number) {
    return number.toString().includes(digit.toString()) ? 'Yes' : 'No';
}


console.log(containsDigit(5, 2463)); 
console.log(containsDigit(4, 6)); 
console.log(containsDigit(8, 45689)); 