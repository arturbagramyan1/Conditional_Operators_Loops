// Exercise 3
// Write a JavaScript program to calculate the sum of the first two digits and the sum of the last
// // two digits in a four-digit number.


function sumFirstLast(num) {
    if (num >= 1000 && num <= 9999) {
        let firstTwoDigits = Math.floor(num / 100)  //https://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript

        let lastTwoDigits = num % 100

        let sumFirstTwo = Math.floor(firstTwoDigits / 10) + firstTwoDigits % 10
        let sumLastTwo = Math.floor(lastTwoDigits / 10) + lastTwoDigits % 10


        console.log("Sum of the first two digits: " + sumFirstTwo);
        console.log("Sum of the last two digits: " + sumLastTwo);
    } else console.log('number contains more than 4 digits sry :D')
}



sumFirstLast(1234)