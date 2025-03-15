// Enter a number. Find the difference between its biggest and smallest digits.

function findDifference(num) {
    let digits = num.toString().split('').map(Number);
    let maxDigit = Math.max(...digits);
    let minDigit = Math.min(...digits);
    return maxDigit - minDigit;
}


console.log(findDifference(5));
console.log(findDifference(152));
console.log(findDifference(4593653)); 