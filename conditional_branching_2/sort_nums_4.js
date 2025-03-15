// Task 4
// Given three numbers. Sort them by the ascending order.

function sortNumbers(a, b, c) {
    let numbers = [a, b, c];
    numbers.sort((x, y) => x - y);
    return numbers;
}

let sortedNumbers = sortNumbers(5, 2, 8);
console.log(sortedNumbers); 

