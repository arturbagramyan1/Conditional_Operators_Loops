// Task 3
// Write a code to calculate the sum of digits in a number


function sumOfDigits(number) {
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

let number = 12345;
console.log(`The sum of digits in ${number} is ${sumOfDigits(number)}`);