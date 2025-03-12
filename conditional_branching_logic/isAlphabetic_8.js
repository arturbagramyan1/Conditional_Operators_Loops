// Exercise 8
// Write a code which checks whether a character is in the alphabet or not.
// Hint: have a look at the ASCII table. link


function isAlphabet(char) {

    let asciiValue = char.charCodeAt(0);


    if ((asciiValue >= 65 && asciiValue <= 90) || (asciiValue >= 97 && asciiValue <= 122)) {
        console.log("The character is in the alphabet.");
    } else {
        console.log("The character is not in the alphabet.");
    }
}











isAlphabet('a');
isAlphabet('Z');
isAlphabet('1');
isAlphabet('$');  
