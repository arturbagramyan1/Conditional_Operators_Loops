// Exercise 1
// For a given natural number n, print the sum 1^2+2^2+...+n^2.

function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i ** 2;
    }
    return sum;
}

console.log(sumOfSquares(4))