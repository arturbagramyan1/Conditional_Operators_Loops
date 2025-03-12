// Exercise 6
// Given a number. Determine whether it consists of 2 digits and whether the first digit is greater
// than the second one. Print “yes” if it is, otherwise print “no”.

function checkDigits(num) {
    if (num >= 10 && num < 100) {
        const firstDigit = Math.floor(num / 10);
        const secondDigit = num % 10;
        if (firstDigit > secondDigit) {
            console.log("yes");
        } else {
            console.log("no");
        }
    } else {
        console.log("no");
    }
}