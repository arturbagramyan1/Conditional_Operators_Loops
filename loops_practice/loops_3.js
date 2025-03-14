// Exercise 3
// For a given natural number n, print the sum 1×2+2×3+...+(n-1)×n.

function sumOfPrevious(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * (i + 1);
    }
    return sum;
}

console.log(sumOfPrevious(2)); 