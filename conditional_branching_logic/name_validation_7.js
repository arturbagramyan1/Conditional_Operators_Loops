// Exercise 7
// Given a name. Print "Your name is valid", if the length of name is greater or equal 4, otherwise
// print "Invalid name".



function checkNameValidity(name) {
    if (name.length >= 4) {
        console.log("Your name is valid");
    } else {
        console.log("Invalid name");
    }
}

checkNameValidity('Artur')
checkNameValidity('Ara')