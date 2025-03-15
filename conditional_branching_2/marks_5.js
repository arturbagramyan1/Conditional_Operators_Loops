// Task 5
// Percentage marks obtained by a student in three exams are to be entered to a computer. An indication of
// Pass or Fail is given out after the three marks are entered. The criteria for passing are as follows:
// A student passes if all three examinations are passed.
// Additionally a student may pass if only one subject is failed but the overall average is greater than or
// equal to 50.
// The pass mark for an individual subject is 40.

function checkPassOrFail(mark1, mark2, mark3) {
    const passMark = 40;
    const averageMark = (mark1 + mark2 + mark3) / 3;

    const passedAll = mark1 >= passMark && mark2 >= passMark && mark3 >= passMark;
    const passedTwo = (mark1 >= passMark && mark2 >= passMark) || 
                      (mark1 >= passMark && mark3 >= passMark) || 
                      (mark2 >= passMark && mark3 >= passMark);

    if (passedAll || (passedTwo && averageMark >= 50)) {
        return "Pass";
    } else {
        return "Fail";
    }
}


console.log(checkPassOrFail(45, 55, 65)); 
console.log(checkPassOrFail(35, 55, 65));
console.log(checkPassOrFail(35, 25, 65));