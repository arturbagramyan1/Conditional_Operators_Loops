// Exercise 12
// Given three angles of a triangle, determine if it's an acute triangle (all angles are less than 90
// degrees), right triangle (one angle is exactly 90 degrees), or obtuse triangle (one angle is
// greater than 90 degrees).



function checkTriangleType(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        console.log('Invalid input, please provide numbers');
    } else if (a + b + c !== 180) {
        console.log('Invalid triangle, the sum of angles must be 180 degrees');
    } else if (a < 90 && b < 90 && c < 90) {
        console.log('Acute triangle');
    } else if (a === 90 || b === 90 || c === 90) {
        console.log('Right triangle');
    } else if (a > 90 || b > 90 || c > 90) {
        console.log('Obtuse triangle');
    } else {
        console.log('Invalid triangle');
    }
}



checkTriangleType(60, 60, 60)
checkTriangleType(90, 45, 45)
checkTriangleType(100, 40, 40)
checkTriangleType(100, 100, 100)
checkTriangleType("a", 12, 21)