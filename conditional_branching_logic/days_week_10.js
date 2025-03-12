// Exercise 10
// Write a code which prints day of week.

// Input Output
// 1 "Monday"
// 5 "Friday"
// 15 "Please enter the number between 1-7."



function printDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Please enter the number between 1-7.");
    }
}

printDayOfWeek(1);
printDayOfWeek(2);
printDayOfWeek(7)
printDayOfWeek(15)