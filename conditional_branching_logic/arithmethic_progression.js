// Exercise 2: Arithmetic Progression
// Write a JavaScript program that calculates and displays the n-th term of an arithmetic
// progression given the first two terms a1 and a2. The program should:
// ● Prompt the user to enter three integers: a1, a2, and n.
// ● Calculate the n-th term of the arithmetic progression using the formula an = a1 +
// (n-1) * d, where d is the common difference between terms (calculated as d = a2
// - a1).
// ● Display the result in the console.

function calculateNthTerm(a1, a2, n) {
    if (typeof a1 == 'number' && typeof a2 == 'number' && typeof n == 'number') {
        const d = a2 - a1;
        const an = a1 + (n - 1) * d;
        return an;
    } else return 'incorrect values are passed';
}



console.log(calculateNthTerm(2, 4, 3));
