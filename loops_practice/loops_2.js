// Exercise 2
// For a given natural number n, print the sum 1^3+2^3+...+n^3.

function sumOfCubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i ** 3;
    }
    return sum;
}

console.log(sumOfCubes(4)); 
