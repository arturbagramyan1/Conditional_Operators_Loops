// Task 9
// Write a code which prints the number of days in a month using switch / case.



function getDaysInMonthByNumber(monthNumber) {
    let days;
    switch (monthNumber) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = '"31 days"';
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = '"30 days"';
            break;
        case 2:
            days = '"28/29 days"';
            break;
        default:
            days = '"Invalid input! Please enter month number between 1-12."';
    }
    return days;
}

console.log(getDaysInMonthByNumber(2));
console.log(getDaysInMonthByNumber(5));
console.log(getDaysInMonthByNumber(15)); 