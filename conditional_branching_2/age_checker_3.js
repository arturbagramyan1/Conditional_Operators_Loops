// Task 3
// Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1 year - 2 years),
// child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18 years and more ). Also check that age in
// months is between 1 and 12.


function determineAgeCategory(age) {
    if (age >= 1 && age <= 12) {
        console.log("Baby");
    } else if (age >= 13 && age <= 24) {
        console.log("Toddler");
    } else if (age >= 3 && age <= 12) {
        console.log("Child");
    } else if (age >= 13 && age <= 17) {
        console.log("Teenager");
    } else if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Invalid age");
    }
}

// Example usage:
determineAgeCategory(10);  
determineAgeCategory(18);  
determineAgeCategory(5);   
determineAgeCategory(15);  
determineAgeCategory(20);  