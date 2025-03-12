// Exercise 5
// Declare three variables.Two of them are the bounds of a range.Print “In bounds”, if the third
// number is in the range, otherwise print “Out of bounds”.


function checkBounds(start, end, num) {
    if (typeof start != 'number' || typeof end != 'number' || typeof num != 'number') {
        console.log('Incorrect arguments are passed :(');
    } else if (start <= num && num <= end) {
        console.log('In bounds');
    } else {
        console.log('Out of bounds');
    }
}




checkBounds(-12, 9, 'a')