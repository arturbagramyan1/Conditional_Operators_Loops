// Task 4
// Enter a number. Reverse its first and last digits. Print the new number.

function reverseFirstAndLastDigits(num) {
    let numStr = num.toString();
    if (numStr.length === 1) {
        return num;
    }
    let reversedNumStr = numStr[numStr.length - 1] + numStr.slice(1, -1) + numStr[0];
    return parseInt(reversedNumStr, 10);
}

let number = 12345;
let reversedNumber = reverseFirstAndLastDigits(number);
console.log(reversedNumber);
