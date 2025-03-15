// // Task 1
// Given a number.Print “odd” if the number is odd and “even” if itʼs even.


function oddOrEven(num) {
    if (typeof num == 'number') {
        if (num % 2 == 0) {
            console.log('"even"')
        } else if (num % 2 != 0) {
            console.log('"odd"')
        }
    } else console.log('Invalid input')
}


oddOrEven(123);
oddOrEven(35);
oddOrEven(288);
oddOrEven('123')