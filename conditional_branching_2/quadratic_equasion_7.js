// Task 7
// Input three numbers a, b, c respectively, where a is a non zero number and write a program to solve
// quadratic equations: ax^2 + bx + c . (Hint: use Math.pow or Math.sqrt).


function solveQuadratic(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `The roots is ${root1} and ${root2}`;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        return `The root is ${root}`;
    } else {
        return 'No real roots';
    }
}



console.log(solveQuadratic(1, -3, 2));