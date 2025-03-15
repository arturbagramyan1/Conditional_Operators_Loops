// Task 2
// Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

function checkMultiple(number) {
    if (number % 3 === 0) {
        console.log(number + " is a multiple of 3");
    }
    if (number % 5 === 0) {
        console.log(number + " is a multiple of 5");
    }
    if (number % 7 === 0) {
        console.log(number + " is a multiple of 7");
    }
    if (number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
        console.log(number + " is not a multiple of 3, 5, or 7");
    }
}


checkMultiple(21); 
checkMultiple(10);
checkMultiple(8); 