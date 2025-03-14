// Exercise 5
// Enter three numbers: X, Y, and A. Within the range X-Y, display a table of cubes of integers that
// are divisible by A.

function displayCubes(x, y, a) {
    console.log(`Cubes of integers divisible by ${a} between ${x} and ${y}:`);
    for (let i = x; i <= y; i++) {
        if (i % a === 0) {
            console.log(`Number: ${i}, Cube: ${i ** 3}`);
        }
    }
}


displayCubes(1, 30, 3);