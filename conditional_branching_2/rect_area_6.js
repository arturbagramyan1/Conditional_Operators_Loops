// Task 6
// Write a program which will compute the area of a rectangular or a triangle after prompting the user to type
// the name of the figure name. Also check that entered numbers are positive. For the triangle entered
// numbers are height and and base.

function computeArea() {

    let shape = prompt("Enter the shape (rectangle or triangle):").toLowerCase();


    if (shape === "rectangle") {

        let width = parseFloat(prompt("Enter the width of the rectangle:"));
        let height = parseFloat(prompt("Enter the height of the rectangle:"));


        if (width > 0 && height > 0) {
            let area = width * height;
            alert(`The area of the rectangle is: ${area}`);
        } else {
            alert("Please enter positive numbers for width and height.");
        }

    } else if (shape === "triangle") {

        let base = parseFloat(prompt("Enter the base of the triangle:"));
        let height = parseFloat(prompt("Enter the height of the triangle:"));


        if (base > 0 && height > 0) {
            let area = (base * height) / 2;
            alert(`The area of the triangle is: ${area}`);
        } else {
            alert("Please enter positive numbers for base and height.");
        }

    } else {
        alert("Invalid shape entered! Please enter either 'rectangle' or 'triangle'.");
    }
}


computeArea();