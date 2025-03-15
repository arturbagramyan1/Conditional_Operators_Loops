// Task 8
// Given the following code rewrite it using only two if operators. (Hint: use logical operators).



let n = +prompt()

const i = 0
const j = 0

if (n % 2 === 0 && !Math.floor(n / 10)) {
    i += 1
}


if (n % 3 === 0 && n % 10 === 1) {
    j += 1
}